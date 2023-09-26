<script>
import axios from 'axios';
import { CRM_API } from '@/constant/ApiConfig';

export default {
    data() {
        return {
            tab: null,
            teams: [], // Store the fetched teams here
            addDialog: false, // Control the add team dialog visibility
            newTeam: {
                name: '',
                department_id: '',
                teamlead_id: '',
            },
            editDialog: false, // Control the edit team dialog visibility
            editedTeam: {
                id: '',
                name: '',
                department_id: '',
                teamlead_id: '',
            },
            deleteDialog: false, // Control the delete team dialog visibility
            selectedTeamId: null, // Store the ID of the selected team for deleting
        };
    },
    created() {
        this.fetchTeams(); // Fetch teams when the component is created
    },
    methods: {
        fetchTeams() {
            // ... (Your existing code to fetch teams)

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
        closeAddDialog() {
            // Close the add team dialog
            this.addDialog = false;
        },
        closeEditDialog() {
            // Close the edit team dialog
            this.editDialog = false;
        },
        closeDeleteDialog() {
            // Close the delete team dialog
            this.deleteDialog = false;
        },
    },
};
</script>
