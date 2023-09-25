<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab value="1">Departments Info</v-tab>
            <v-tab value="2">Department Permissions</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-container fluid>
                    <v-table fixed-header height="300px">
                        <thead>
                            <tr>
                                <th class="text-left">ID</th>
                                <th class="text-left">Name</th>
                                <th colspan="2" class="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Render department data here -->
                            <tr v-for="department in departments" :key="department.id">
                                <td>{{ department.id }}</td>
                                <td>{{ department.name }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-window-item>
            <v-window-item value="2">
                <v-container fluid>
                    <!-- Add content for tab 2 here if needed -->
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            tab: null,
            departments: [], // Store the fetched department data
        };
    },
    created() {
        this.fetchDepartments(); // Fetch department data when the component is created
    },
    methods: {
        fetchDepartments() {
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
            axios
                .get('http://10.0.10.114:8000/api/departments', { headers })
                .then((response) => {
                    // Set the fetched department data to the data property
                    this.departments = response.data;
                    console.log('Fetched Departments:', this.departments);
                })
                .catch((error) => {
                    console.error('Error fetching departments:', error);
                });
        },
    },
};
</script>
  