<template>
    <div>
      <v-row class="py-3">
        <v-col cols="6" class="pl-5">
          <h1 style="color: plum;">Teams Info</h1>
        </v-col>
        <v-col cols="6" class="text-end">
            <v-btn @click="openAddTeamDialog">Add Team</v-btn>
        </v-col>
      </v-row>
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
                    <td>
                      <v-btn @click="editTeam(team.id)">
                        <i class="fa-regular fa-pen-to-square fa-xs" style="color: #000000;"></i>
                      </v-btn>
                      <v-btn class="ml-2" @click="deleteTeam(team.id)">
                        <i class="fa-solid fa-trash fa-xs" style="color: #000000;"></i>
                      </v-btn>
                    </td>
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

       <!-- Add Team Dialog -->
    <v-dialog v-model="addDialog" max-width="500px">
      <v-card>
        <v-card-title>Add Team</v-card-title>
        <v-card-text>
          <!-- Add your form for adding a new team here -->
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="addTeam">Add</v-btn>
          <v-btn color="error" @click="closeAddDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Edit Team Dialog -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>Edit Team</v-card-title>
        <v-card-text>
          <!-- Add your form for editing the selected team here -->
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="saveEditedTeam">Save</v-btn>
          <v-btn color="error" @click="closeEditDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Delete Team Dialog -->
    <v-dialog v-model="deleteDialog" max-width="500px">
      <v-card>
        <v-card-title>Delete Team</v-card-title>
        <v-card-text>
          Are you sure you want to delete this team?
        </v-card-text>
        <v-card-actions>
          <v-btn color="error" @click="confirmDeleteTeam">Delete</v-btn>
          <v-btn color="primary" @click="closeDeleteDialog">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { CRM_API } from '@/constant/ApiConfig';
  
  export default {
    data() {
      return {
        tab: null,
        teams: [], // Store the fetched teams here
        editDialog: false, // Control the edit team dialog visibility
        editedTeam: {
          id: '',
          name: '',
          department_id: '',
          teamlead_id: '',
        },
        deleteDialog: false, // Control the delete team dialog visibility
        selectedTeamId: null,
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
        axios
          .get(`${CRM_API}api/teams`, { headers })
          .then((response) => {
            // Set the fetched teams to the data property
            this.teams = response.data; // Check the API response structure
            // console.log('Fetched Teams:', this.teams);
          })
          .catch((error) => {
            console.error('Error fetching teams:', error);
          });
      },
      openAddDepartmentDialog() {
            // Clear the input fields when opening the add team dialog
            this.newTeam = {
                name: '',
                department_id: '',
                teamlead_id: '',
            };
            this.addDialog = true; // Open the add team dialog
        },
        addTeam() {
            // Prepare the data to send to the API
            const teamData = {
                name: this.newTeam.name,
                department_id: this.newTeam.department_id,
                teamlead_id: this.newTeam.teamlead_id,
            };

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

            // Make a POST request to create the team
            axios
                .post(`${CRM_API}api/team/add`, teamData, { headers })
                .then((response) => {
                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Team Created Successfully') {
                        // Close the add team dialog after adding
                        this.closeAddDialog();
                        // Refresh the team data by calling fetchTeams()
                        this.fetchTeams();
                    } else {
                        console.error('Team creation failed:', response.data);
                        // Handle the case where the creation was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error creating team:', error);
                });
        },
      editTeam(teamId) {
            // Find the selected team in the teams array
            const selectedTeam = this.teams.find((team) => team.id === teamId);

            if (selectedTeam) {
                // Set the selected team's data to the editedTeam object
                this.editedTeam = { ...selectedTeam };
                // Open the edit team dialog
                this.editDialog = true;
            } else {
                console.error('Team not found.');
            }
        },
        saveEditedTeam() {
            // Prepare the data to send to the API
            const teamData = {
                name: this.editedTeam.name,
                department_id: this.editedTeam.department_id,
                teamlead_id: this.editedTeam.teamlead_id,
            };

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

            // Make a PUT request to update the team data
            axios
                .put(`${CRM_API}api/teams/${this.editedTeam.id}`, teamData, { headers })
                .then((response) => {
                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Team updated successfully') {
                        // Close the edit team dialog after saving
                        this.closeEditDialog();
                        // Refresh the team data by calling fetchTeams()
                        this.fetchTeams();
                    } else {
                        console.error('Team update failed:', response.data);
                        // Handle the case where the update was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error updating team:', error);
                });
        },
      deleteTeam(teamId) {
            // Set the selected team ID
            this.selectedTeamId = teamId;
            // Open the delete team dialog
            this.deleteDialog = true;
        },
        confirmDeleteTeam() {
            // Perform the API request to delete the selected team
            axios
                .delete(`${CRM_API}api/teams/${this.selectedTeamId}`)
                .then(() => {
                    // Close the delete team dialog after deletion
                    this.closeDeleteDialog();
                    // Refresh the team data by calling fetchTeams()
                    this.fetchTeams();
                })
                .catch((error) => {
                    console.error('Error deleting team:', error);
                });
        },
    },
  };
  </script>
  