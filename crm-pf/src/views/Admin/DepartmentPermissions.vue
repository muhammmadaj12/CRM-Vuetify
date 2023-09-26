<template>
    <div>
        <v-row class="py-3">
            <v-col cols="6" class="pl-5">
                <h1 style="color: plum;">Departments Info</h1>
            </v-col>
            <v-col cols="6" class="text-end">
                <v-btn style="margin-right: 5px;" @click="openAddDepartmentDialog">Add Department</v-btn>
            </v-col>
        </v-row>
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
                                    <th class="text-center">ID</th>
                                    <th class="text-center">Name</th>
                                    <th colspan="2" class="text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Render department data here -->
                                <tr v-for="department in departments" :key="department.id" class="text-center">
                                    <td>{{ department.id }}</td>
                                    <td>{{ department.name }}</td>
                                    <td>
                                        <v-btn @click="editDepartment(department.id)">
                                            <i class="fa-regular fa-pen-to-square fa-xs" style="color: #000000;"></i>
                                        </v-btn>
                                        <v-btn class="ml-2" @click="deleteDepartment(department.id)">
                                            <i class="fa-solid fa-trash fa-xs" style="color: #000000;"></i>
                                        </v-btn>
                                    </td>
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

            <!-- Add Department Dialog -->
            <v-dialog v-model="addDialog" max-width="500">
                <v-card>
                    <v-card-title>Add Department</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="newDepartment.name" label="Department Name"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="addDepartment">Add</v-btn>
                        <v-btn @click="closeAddDialog">Cancel</v-btn> <!-- Ensure this line is correct -->
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Edit Department Modal -->
            <v-dialog v-model="editDialog" max-width="500">
                <v-card>
                    <v-card-title>Edit Department</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="editedDepartment.name" label="Department Name"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="saveEditedDepartment">Save</v-btn>
                        <v-btn @click="closeEditDialog">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Delete Department Confirmation Dialog -->
            <v-dialog v-model="deleteDialog" id="del">
                <v-card>
                    <v-card-text>Are you sure you want to delete this department?</v-card-text>
                    <v-card-actions>
                        <v-btn @click="confirmDeleteDepartment">Yes</v-btn>
                        <v-btn @click="closeDeleteDialog">No</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-card>
    </div>
</template>
  
<script>
import axios from 'axios';
import { CRM_API } from '@/constant/ApiConfig';

export default {
    data() {
        return {
            tab: null,
            departments: [], // Store the fetched department data
            editDialog: false, // Control the edit dialog visibility
            deleteDialog: false, // Control the delete dialog visibility
            selectedDepartmentId: null, // Store the ID of the selected department for editing or deleting
            editedDepartment: {
                id: null,
                name: '',
            },
            addDialog: false, // Control the add department dialog visibility
            newDepartment: {
                name: '',
            },
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
                .get(`${CRM_API}api/departments`, { headers })
                .then((response) => {
                    // Set the fetched department data to the data property
                    this.departments = response.data;
                    // console.log('Fetched Departments:', this.departments);
                })
                .catch((error) => {
                    console.error('Error fetching departments:', error);
                });
        },

        openAddDepartmentDialog() {
            this.newDepartment.name = ''; // Clear the input field
            this.addDialog = true; // Open the add department dialog
        },

        addDepartment() {
            // Prepare the data to send to the API
            const departmentData = {
                name: this.newDepartment.name,
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

            // Make a POST request to add the department data
            axios
                .post(`${CRM_API}api/departments`, departmentData, { headers })
                .then((response) => {
                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Department Created Successfully') {
                        // Close the add department dialog after adding
                        this.closeAddDialog();
                        // Refresh the department data by calling fetchDepartments()
                        this.fetchDepartments();
                    } else {
                        console.error('Department creation failed:', response.data);
                        // Handle the case where the creation was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error creating department:', error);
                });
        },

        editDepartment(departmentId) {
            // Find the selected department in the departments array
            const selectedDepartment = this.departments.find((department) => department.id === departmentId);

            if (selectedDepartment) {
                // Set the selected department's data to the editedDepartment object
                this.editedDepartment = { ...selectedDepartment };
                // Open the edit dialog
                this.editDialog = true;
            } else {
                console.error('Department not found.');
            }
        },

        deleteDepartment(departmentId) {
            // Set the selected department ID
            this.selectedDepartmentId = departmentId;
            // Open the delete dialog
            this.deleteDialog = true;
        },

        saveEditedDepartment() {
            // Prepare the data to send to the API
            const departmentData = {
                name: this.editedDepartment.name,
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

            // Make a PUT request to update the department data
            axios
                .put(`${CRM_API}api/departments/${this.editedDepartment.id}`, departmentData, { headers })
                .then((response) => {
                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Department Updated Successfully') {
                        // Close the edit dialog after saving
                        this.closeEditDialog();
                        // Refresh the department data by calling fetchDepartments()
                        this.fetchDepartments();
                    } else {
                        console.error('Department update failed:', response.data);
                        // Handle the case where the update was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error updating department:', error);
                });
        },


        confirmDeleteDepartment() {
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

            // Perform the API request to delete the selected department with the authorization headers
            axios
                .delete(`${CRM_API}api/departments/${this.selectedDepartmentId}`, { headers })
                .then(() => {
                    // Close the delete dialog after deletion
                    this.closeDeleteDialog();
                    // Refresh the department data by calling fetchDepartments()
                    this.fetchDepartments();
                })
                .catch((error) => {
                    console.error('Error deleting department:', error);
                });
        },


        closeAddDialog() {
            // Close the add department dialog
            this.addDialog = false;
        },
        closeEditDialog() {
            // Close the edit dialog
            this.editDialog = false;
        },

        closeDeleteDialog() {
            // Close the delete dialog
            this.deleteDialog = false;
        },
    },
};
</script>
<style scoped>
#del {
    width: 33%;
}
</style>