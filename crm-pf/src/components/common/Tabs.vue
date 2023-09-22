<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab value="1">All Users</v-tab>
            <v-tab value="2">All Users Permissions</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-container fluid>
                    <v-table fixed-header height="300px">
                        <thead>
                            <tr>
                                <th class="text-left">id</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-window-item>
            <v-window-item value="2">
                <h1>Hello World</h1>
            </v-window-item>
        </v-window>
    </v-card>
</template>
  
<script>
import axios from 'axios';

export default {
    data: () => ({
        tab: null,
        users: [], // Store the fetched users here
    }),
    created() {
        this.fetchUsers(); // Fetch users when the component is created
    },
    methods: {
        fetchUsers() {
            // Get the authentication token from localStorage
            const authToken = localStorage.getItem('authToken');

            // Check if the authToken exists
            if (!authToken) {
                console.error('Authentication token not found.');
                return;
            }

            // Define headers with the authentication token
            const headers = {
                Authorization: `Bearer ${authToken}`,
            };

            // Make a GET request to the API endpoint with headers
            axios.get('http://10.0.10.114:8000/api/users', { headers })
                .then((response) => {
                    // Set the fetched users to the data property
                    this.users = response.data.data;
                    console.log(this.users)
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });
        },
    },
};
</script>
