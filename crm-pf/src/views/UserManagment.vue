<template>
    <div>
        <button id="button1" @click="openForm">Open Form</button>

        <!-- User Update Dialog -->
        <v-dialog v-model="editDialog" max-width="400px">
            <!-- ... Existing dialog content ... -->
            <v-card>
                <v-card-title>Edit User</v-card-title>
                <v-card-text>
                    <v-text-field v-model="editedUser.name" label="Name"></v-text-field>
                    <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="saveUser">Save</v-btn>
                    <v-btn color="red" @click="cancelEdit">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>
                        <div>
                            <v-btn @click="editUser(user)">
                                <v-icon>mdi-pencil</v-icon> Edit
                            </v-btn>
                            <v-btn @click="confirmDeleteUser(user.id)">
                                <v-icon>mdi-delete</v-icon> Delete
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Add User Form (Initially hidden) -->
        <div v-if="showForm">
            <add-user @user-added="onUserAdded" @close-form="closeForm"></add-user>
            <v-divider></v-divider>
        </div>

        <!-- Success Snackbar -->
        <v-snackbar v-model="successSnackbar" :timeout="3000" color="success">
            {{ successMessage }}
            <v-btn color="white" text @click="successSnackbar = false">Close</v-btn>
        </v-snackbar>

        <!-- Confirm Delete Dialog -->
        <v-dialog v-model="deleteDialog" max-width="400px">
            <v-card>
                <v-card-title>Confirm Delete</v-card-title>
                <v-card-text>
                    Are you sure you want to delete this user?
                </v-card-text>
                <v-card-actions>
                    <v-btn color="red" @click="deleteUser(confirmedUserId)">Delete</v-btn>
                    <v-btn color="blue" @click="cancelDelete">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>
  
  
<script>
import AddUser from "@/components/AddUser.vue";

export default {
    components: {
        AddUser,
    },
    data() {
        return {
            users: [],
            editDialog: false,
            editedUser: {
                name: "",
                email: "",

            },
            editedIndex: -1,
            successSnackbar: false,
            successMessage: "",
            deleteDialog: false, // Add delete confirmation dialog data property
            confirmedUserId: null, // Store the user ID to be deleted
            showForm: false,
        };
    },


    mounted() {
        this.fetchUsers();
    },
    methods: {
        openForm() {
            // When the button is clicked, toggle the value of showForm
            this.showForm = !this.showForm;
        },
        fetchUsers() {
            fetch("http://127.0.0.1:8000/api/users")
                .then((response) => response.json())
                .then((data) => {
                    this.users = data.data;
                })
                .catch((error) => {
                    console.error("Error fetching users:", error);
                });
        },
        onUserAdded(user) {
            this.users.push(user);
            console.log('User Added:', user);
            this.showForm = false;
        },
        closeForm() {
            // Close the form without adding a user (e.g., cancel button)
            this.showForm = false;
        },
        editUser(user) {
            this.editedIndex = this.users.indexOf(user);
            this.editedUser = Object.assign({}, user);
            this.editDialog = true;
        },
        saveUser() {
            this.successMessage = "User data saved successfully";
            this.successSnackbar = true;
            fetch(`http://127.0.0.1:8000/api/users/${123}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.editedUser),

            })
                .then(() => {
                    this.$set(this.users, this.editedIndex, this.editedUser);
                    this.cancelEdit();

                })
                .catch((error) => {
                    console.error("Error updating user:", error);
                });
        },
        cancelEdit() {
            this.editDialog = false;
            this.editedUser = {
                name: "",
                email: "",
            };
            this.editedIndex = -1;
        },
        confirmDeleteUser(user) {
            this.confirmedUser = user; // Store the user object to be deleted
            this.deleteDialog = true;
        },
        deleteUser(user) {
            if (user) {
                const deleteUrl = `http://127.0.0.1:8000/api/users/${user.id}`;

                // Make the DELETE request with the correct URL from the user object
                fetch(deleteUrl, {
                    method: "DELETE",
                })
                    .then(() => {
                        // Remove the deleted user from the local users array
                        this.users = this.users.filter((u) => u.id !== user.id);
                        this.successMessage = "User data deleted successfully";
                        this.successSnackbar = true;
                    })
                    .catch((error) => {
                        console.error("Error deleting user:", error);
                    });

                // Close the delete confirmation dialog
                this.deleteDialog = false;
            }
        },

        confirmDeleteUser(userId) {
            this.confirmedUserId = userId;
            this.deleteDialog = true;
        },
        cancelDelete() {
            this.deleteDialog = false;
        },
    },
};
</script>
<style>
/* Style the table */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

thead {
    background-color: #f2f2f2;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

tr:hover {
    background-color: #f5f5f5;
}

/* Style the buttons within the table */
v-btn {
    padding: 6px 12px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    /* Add some spacing between buttons */
}

v-btn:hover {
    background-color: #0056b3;
}

#button1 {
    padding: 10px 20px;
    /* Adjust padding as needed */
    background-color: #007BFF;
    /* Background color */
    color: #fff;
    /* Text color */
    border: none;
    /* Remove button border */
    cursor: pointer;
    margin-top: 10px;
    margin-left: 0px;

}

#button1 {
    padding: 10px 20px;
    background-color: #007BFF;
    color: #fff;
    cursor: pointer;
    margin-left: 850px;
}

#button1:hover {
    background-color: #0056b3;
    /* Background color on hover */
}
</style>


