<template>
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
                </tr>
              </tbody>
            </v-table>
          </v-container>
        </v-window-item>
        <v-window-item value="2">
          <v-table fixed-header height="300px">
            <thead>
              <tr>
                <th class="text-left">User Name</th>
                <th class="text-left">Permission Name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>
                  <ul style="display: flex;" v-for="permission in user.permissions" :key="permission.id">
                    <!-- <div style="display: flex; justify-content: space-evenly; align-items: center;"> -->
                        <li>{{ permission.name }}</li>
                        <v-switch
                        v-model="permissionToggles[permission.id]"
                        :label="permissionToggles[permission.id] ? 'Enabled' : 'Disabled'"
                        @change="togglePermission(permission.id)"
                      ></v-switch>
                    <!-- </div> -->


                    <!-- <v-row>
                        <v-col cols="6"><li>{{ permission.name }}</li></v-col>
                        <v-col cols="6"><v-switch
                        v-model="permissionToggles[permission.id]"
                        :label="permissionToggles[permission.id] ? 'Enabled' : 'Disabled'"
                        @change="togglePermission(permission.id)"
                      ></v-switch></v-col>
                    
                    
                    </v-row> -->
                    <!-- <li v-for="permission in user.permissions" :key="permission.id">
                      {{ permission.name }}
                      <v-switch
                        v-model="permissionToggles[permission.id]"
                        :label="permissionToggles[permission.id] ? 'Enabled' : 'Disabled'"
                        @change="togglePermission(permission.id)"
                      ></v-switch>
                    </li> -->
                  </ul>
                </td>
                <!-- <td style="display: flex; flex-direction: column;" v-for="permission in user.permissions" :key="permission.id" >
                    <v-switch
                        v-model="permissionToggles[permission.id]"
                        :label="permissionToggles[permission.id] ? 'Enabled' : 'Disabled'"
                        @change="togglePermission(permission.id)"
                      ></v-switch>
                </td> -->
              </tr>
            </tbody>
          </v-table>
        </v-window-item>
      </v-window>
    </v-card>
  </template>
  
  <script>
  import axios from 'axios';
  import { CRM_API } from '@/constant/ApiConfig';
  
  export default {
    data: () => ({
      tab: null,
      users: [], // Store the fetched users here
      permissionToggles: {}, // Object to store permission toggle states
    }),
    created() {
      this.fetchUsersAndPermissions(); // Fetch users and their permissions when the component is created
    },
    methods: {
      fetchUsersAndPermissions() {
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
  
        // Make a GET request to the API endpoint to fetch users
        axios.get(`${CRM_API}api/users`, { headers })
          .then((response) => {
            // Set the fetched users to the data property
            this.users = response.data.data;
  
            // After fetching users, fetch their permissions
            this.fetchUserPermissions();
          })
          .catch((error) => {
            console.error('Error fetching users:', error);
          });
      },
      fetchUserPermissions() {
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
  
        // Make a GET request to the API endpoint to fetch permissions
        axios.get(`${CRM_API}api/permissions/getpermissions`, { headers })
          .then((response) => {
            // Assign the fetched permissions to the respective users
            this.users.forEach((user) => {
              user.permissions = response.data.data.member;
            });
          })
          .catch((error) => {
            console.error('Error fetching permissions:', error);
          });
      },
      togglePermission(permissionId) 
      {
        // Update the permissionToggles object with the new toggle state
        this.permissionToggles[permissionId] = !this.permissionToggles[permissionId];

        // You can also send a request to update the server with the new state
        // Add your API call here to update the permission state on the server
      },
      
    },
  };
  </script>
  <style>
  /* .v-input--density-default {
    --v-input-control-height: 0px;
}
.v-selection-control--density-default {
    --v-selection-control-size: 10px;
} */
</style>