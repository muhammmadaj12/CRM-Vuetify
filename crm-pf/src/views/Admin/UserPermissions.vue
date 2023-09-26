<template>
    <div>
        <v-row class="py-3">
            <v-col cols="6" class="pl-5">
                <h1 style="color: plum;">Users Info</h1>
            </v-col>
            <v-col cols="6" class="text-end">
                <v-btn @click="openAddDepartmentDialog">Add User</v-btn>
            </v-col>            
        </v-row>
        <v-card>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab value="1">Users Info</v-tab>
            <v-tab value="2">Users Permissions</v-tab>
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
                                <th colspan="2" class="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.id }}</td>
                                <td>{{ user.name }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                        <v-btn @click="editTask(task.id)">
                                            <i class="fa-regular fa-pen-to-square fa-xs" style="color: #000000;"></i>
                                        </v-btn>
                                        <v-btn class="ml-2" @click="deleteTask(task.id)">
                                            <i class="fa-solid fa-trash fa-xs" style="color: #000000;"></i>
                                        </v-btn>
                                    </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-container>
            </v-window-item>
            <v-window-item value="2">
                <v-table fixed-header height="300px">
                        <thead>
                            <tr>
                                <th class="text-left">Name</th> 
                                <th class="text-left">User Permissions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="user in users" :key="user.id">
                                <td>{{ user.name }}</td>
                            </tr>
                        </tbody>
                    </v-table>
            </v-window-item>
        </v-window>
    </v-card>
    </div>
</template>
  

<script>
import axios from 'axios';
import { CRM_API } from '@/constant/ApiConfig';

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
            axios.get(`${CRM_API}api/users`, { headers })
                .then((response) => {
                    // Set the fetched users to the data property
                    this.users = response.data.data;
                    // console.log(this.users)
                })
                .catch((error) => {
                    console.error('Error fetching users:', error);
                });
        },
    },
};
</script>
