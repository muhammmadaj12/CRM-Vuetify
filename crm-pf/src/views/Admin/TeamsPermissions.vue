<template>
    <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab value="1">Teams Info</v-tab>
            <v-tab value="2">Teams Permissions</v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item value="1">
                <v-container fluid>
                    <v-table fixed-header height="300px">
                        <thead>
                            <tr>
                                <th class="text-left">ID</th>
                                <th class="text-left">Name</th>
                                <th class="text-left">Department ID</th>
                                <th class="text-left">Teamlead ID</th>
                                <th colspan="2" class="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="team in teams" :key="team.id">
                                <td>{{ team.id }}</td>
                                <td>{{ team.name }}</td>
                                <td>{{ team.department_id }}</td>
                                <td>{{ team.teamlead_id }}</td>
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
import { CRM_API } from '@/constant/ApiConfig';

export default {
    data() {
        return {
            tab: null,
            teams: [], // Store the fetched teams here
        };
    },
    created() {
        this.fetchTeams(); // Fetch teams when the component is created
    },
    methods: {
        fetchTeams() {
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
            axios.get(`${CRM_API}api/teams`, { headers })
                .then((response) => {
                    // Set the fetched teams to the data property
                    this.teams = response.data; // Check the API response structure
                    // console.log('Fetched Teams:', this.teams);
                })
                .catch((error) => {
                    console.error('Error fetching teams:', error);
                });
        },
    },
};
</script>
  