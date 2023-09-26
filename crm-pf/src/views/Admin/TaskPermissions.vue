<template>
    <div>
        <v-row class="py-3">
            <v-col cols="6" class="pl-5">
                <h1 style="color: plum;">Tasks Info</h1>
            </v-col>
            <v-col cols="6" class="text-end">
                <v-btn @click="openAddTaskDialog">Add Task</v-btn>
            </v-col>
        </v-row>
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
                    <!-- Add content for tab 2 here if needed -->
                </v-window-item>
            </v-window>

            <!-- Add Task Dialog -->
            <v-dialog v-model="addDialog" max-width="500">
                <v-card>
                    <v-card-title>Add Task</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="newTask.name" label="Task Name"></v-text-field>
                        <v-text-field v-model="newTask.status" label="Status"></v-text-field>
                        <v-text-field v-model="newTask.comments" label="Comments"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="addTask">Add</v-btn>
                        <v-btn @click="closeAddDialog">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Edit Task Modal -->
            <v-dialog v-model="editDialog" max-width="500">
                <v-card>
                    <v-card-title>Edit Task</v-card-title>
                    <v-card-text>
                        <v-text-field v-model="editedTask.name" label="Task Name"></v-text-field>
                        <v-text-field v-model="editedTask.status" label="Status"></v-text-field>
                        <v-text-field v-model="editedTask.comments" label="Comments"></v-text-field>
                    </v-card-text>
                    <v-card-actions>
                        <v-btn @click="saveEditedTask">Save</v-btn>
                        <v-btn @click="closeEditDialog">Cancel</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- Delete Task Confirmation Dialog -->
            <v-dialog v-model="deleteDialog" id="del">
                <v-card>
                    <v-card-text>Are you sure you want to delete this task?</v-card-text>
                    <v-card-actions>
                        <v-btn @click="confirmDeleteTask">Yes</v-btn>
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
            tasks: [], // Store the fetched tasks here
            editDialog: false, // Control the edit dialog visibility
            deleteDialog: false, // Control the delete dialog visibility
            selectedTaskId: null, // Store the ID of the selected task for editing or deleting
            editedTask: {
                id: '',
                name: '',
                status: '',
                comments: '',
            },
            addDialog: false, // Control the add task dialog visibility
            newTask: {
                name: '',
                status: '',
                comments: '',
            },
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
            axios.get(`${CRM_API}api/tasks`, { headers })
                .then((response) => {
                    // Set the fetched tasks to the data property
                    this.tasks = response.data; // Check the API response structure
                    // console.log('Fetched Tasks:', this.tasks);
                })
                .catch((error) => {
                    console.error('Error fetching tasks:', error);
                });
        },

        openAddTaskDialog() {
            // Clear the input fields when opening the add task dialog
            this.newTask = {
                name: '',
                status: '',
                comments: '',
            };
            this.addDialog = true; // Open the add task dialog
        },

        addTask() {
            // Prepare the data to send to the API
            const taskData = {
                name: this.newTask.name,
                status: this.newTask.status,
                comments: this.newTask.comments,
                user_id: "11", // Assuming a default user_id for now
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

            // Log the data being sent in the request
            console.log('Sending Task Data:', taskData);

            // Make a POST request to create the task
            axios
                .post(`${CRM_API}api/tasks`, taskData, { headers })
                .then((response) => {
                    // Log the response from the server
                    console.log('Task Creation Response:', response);

                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Task Created Successfully') {
                        // Close the add task dialog after adding
                        this.closeAddDialog();
                        // Refresh the task data by calling fetchTasks()
                        this.fetchTasks();
                    } else {
                        console.error('Task creation failed:', response.data);
                        // Handle the case where the creation was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error creating task:', error);
                });
        },

        editTask(taskId) {
            // Find the selected task in the tasks array
            const selectedTask = this.tasks.find((task) => task.id === taskId);

            if (selectedTask) {
                // Set the selected task's data to the editedTask object
                this.editedTask = { ...selectedTask };
                // Open the edit dialog
                this.editDialog = true;
            } else {
                console.error('Task not found.');
            }
        },
        deleteTask(taskId) {
            // Set the selected task ID
            this.selectedTaskId = taskId;
            // Open the delete dialog
            this.deleteDialog = true;
        },
        saveEditedTask() {
            // Prepare the data to send to the API
            const taskData = {
                name: this.editedTask.name,
                status: this.editedTask.status,
                comments: this.editedTask.comments,
                user_id: this.editedTask.user_id,
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

            // Make a PUT request to update the task data
            axios
                .put(`${CRM_API}api/tasks/${this.editedTask.id}`, taskData, { headers })
                .then((response) => {
                    // Check if the response contains the "message" property as specified in the documentation
                    if (response.data.message === 'Task Updated Successfully') {
                        // Close the edit dialog after saving
                        this.closeEditDialog();
                        // Refresh the task data by calling fetchTasks()
                        this.fetchTasks();
                    } else {
                        console.error('Task update failed:', response.data);
                        // Handle the case where the update was not successful, e.g., show an error message
                    }
                })
                .catch((error) => {
                    console.error('Error updating task:', error);
                });
        },

        confirmDeleteTask() {

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


            // Perform the API request to delete the selected task
            axios
                .delete(`${CRM_API}api/tasks/${this.selectedTaskId}`, {headers})
                .then(() => {
                    // Close the delete dialog after deletion
                    this.closeDeleteDialog();
                    // Refresh the task data by calling fetchTasks()
                    this.fetchTasks();
                })
                .catch((error) => {
                    console.error('Error deleting task:', error);
                });
        },
        closeEditDialog() {
            // Close the edit dialog
            this.editDialog = false;
        },
        closeDeleteDialog() {
            // Close the delete dialog
            this.deleteDialog = false;
        },

        closeAddDialog() {
            // Close the add task dialog
            this.addDialog = false;
        },
    },
};
</script>
<style scoped>
#del {
    width: 33%;
}
</style>