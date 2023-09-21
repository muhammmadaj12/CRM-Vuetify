<template>
    <div>
        <add-user @user-added="onUserAdded"></add-user>
        <v-divider></v-divider>
        <v-list>
            <v-list-item v-for="(user, index) in users" :key="index">
                <v-list-item-content>
                    <v-list-item-title>{{ user.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                    <v-btn @click="editUser(user)">Edit</v-btn>
                    <v-btn @click="confirmDeleteUser(user.id)">Delete</v-btn>
                </v-list-item-action>
            </v-list-item>
        </v-list>
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
            successSnackbar: true,
            successMessage: "",
            deleteDialog: false, // Add delete confirmation dialog data property
            confirmedUserId: null, // Store the user ID to be deleted
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
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

        },
        editUser(user) {
            this.editedIndex = this.users.indexOf(user);
            this.editedUser = Object.assign({}, user);
            this.editDialog = true;
        },
        saveUser() {
            this.successMessage = "User data saved successfully";
            this.successSnackbar = true;
            fetch(`http://127.0.0.1:8000/api/users/${this.editedUser.id}`, {
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
        deleteUser(userId) {
            this.successMessage = "User data delete successfully";
            this.successSnackbar = true;
            fetch(`http://127.0.0.1:8000/api/users/${userId}`, {
                method: "DELETE",
            })
                .then(() => {
                    this.users = this.users.filter((user) => user.id !== userId);
                })
                .catch((error) => {
                    console.error("Error deleting user:", error);
                });
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
  