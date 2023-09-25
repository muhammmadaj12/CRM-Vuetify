<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab value="1">Tasks Info</v-tab>
            <v-tab value="2">Task Permissions</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-container fluid>
                    <v-table fixed-header height="300px">
                        <thead>
                            <tr>
                                <th class="text-left">ID</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Status</th>
                                <th class="text-left">Comments</th>
                                <th colspan="2" class="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="task in tasks" :key="task.id">
                                <td>{{ task.id }}</td>
                                <td>{{ task.name }}</td>
                                <td>{{ task.status }}</td>
                                <td>{{ task.comments }}</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-window-item>
            <v-window-item value="2">
                <!-- Add content for tab 2 here if needed -->
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
            tasks: [], // Store the fetched tasks here
        };
    },
    created() {
        this.fetchTasks(); // Fetch tasks when the component is created
    },
    methods: {
        fetchTasks() {
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
            axios.get('http://10.0.10.114:8000/api/tasks', { headers })
                .then((response) => {
                    // Set the fetched tasks to the data property
                    this.tasks = response.data; // Check the API response structure
                    console.log('Fetched Tasks:', this.tasks);
                })
                .catch((error) => {
                    console.error('Error fetching tasks:', error);
                });
        },
    },
};
</script>
  