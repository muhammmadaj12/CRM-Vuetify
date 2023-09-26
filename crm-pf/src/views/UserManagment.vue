<template>
    <v-app>
        <v-container>
            <v-btn @click="showUserForm = true; showRollForm = false; showForm = true" class="action-button user-button">
                Add User
            </v-btn>
            <v-btn @click="showUserForm = false; showRollForm = true; showForm = false" class="action-button roll-button">
                Add Roll
            </v-btn>

            <v-container>
                <table v-if="showUserForm" class="user-table">
                    <!-- Table headers -->
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <!-- Table body -->
                    <tbody>
                        <tr v-for="(user, index) in userList" :key="index">
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>{{ user.role }}</td>
                            <td>
                                <div>
                                    <button @click="editUser(user)">
                                        <i class="mdi mdi-pencil"></i>
                                    </button>
                                    <button @click="confirmDeleteUser(user.id)">
                                        <i class="mdi mdi-delete"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <v-row>
                    <v-col cols="6">
                        <!-- User Input Form -->
                        <v-form @submit.prevent="submitUser">
                            <v-text-field v-model="userName" label="User Name" required></v-text-field>
                            <v-text-field v-model="userEmail" label="User Email" required></v-text-field>
                            <v-select v-model="selectedRole" :items="roles" label="Select Role" required></v-select>
                            <v-btn type="submit" color="primary">Submit</v-btn>
                        </v-form>
                    </v-col>
                </v-row>

                <!-- Table to Display User Data -->

            </v-container>

            <v-dialog v-model="editDialog" max-width="400px">
                <!-- ... Existing dialog content ... -->
                <!-- Replace this with your edit user form using Vuetify components -->
            </v-dialog>

            <!-- Add User Form -->


            <!-- Add Roll Form -->
            <v-form v-if="showRollForm" @submit.prevent="addRoll">
                <!-- Replace this with your add roll form using Vuetify components -->
            </v-form>
        </v-container>
    </v-app>
</template>
  
<script>
export default {
    data() {
        return {
            selectedRole: "",
            roles: ["Guest", "Admin", "Administrator"],
            userName: "",
            userEmail: "",
            userList: [], // To store the submitted user data
            showForm: true,

            displayedUsers: [], // Initialize an empty array for displayed users
            showUserForm: false,
            showForm: false,
            showRollForm: false,
            userName: "",
            userEmail: "",
            rollName: "",
            rollDescription: "",
            rollPrice: 0,
            editDialog: false,
        };
    },
    computed: {
        tableHeaders() {
            return [
                { text: "Name", value: "name" },
                { text: "Email", value: "email" },
                { text: "Role", value: "role" },
                { text: "Actions", value: "actions", sortable: false },
            ];
        },
    },
    methods: {
        submitUser() {
            // Validate user inputs if needed
            if (!this.userName || !this.userEmail || !this.selectedRole) {
                // Handle validation error (e.g., show an error message)
                return;
            }

            // Create a new user object
            const newUser = {
                name: this.userName,
                email: this.userEmail,
                role: this.selectedRole,
            };

            // Push the new user to the users array
            this.userList.push(newUser);
            // Clear the form fields
            this.userName = "";
            this.userEmail = "";
            this.selectedRole = "";
            this.showForm = false;
            this.showUserForm = true;
            this.showRollForm = false;
        },
    },
};
</script>

<style>
.action-button {
    margin-right: 10px;
    margin-top: 20px;
    margin-left: 50px;
    /* Adjust the margin value as needed */
}




.action-button {
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.2s, color 0.2s;
    margin: 10px;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Style the "Add User" button */
.user-button {
    background-color: #007BFF;
    color: #fff;
}

.user-button:hover {
    background-color: #0056b3;
}

/* Style the "Add Roll" button */
.roll-button {
    background-color: #4CAF50;
    color: #fff;
}

.roll-button:hover {
    background-color: #45a049;
}

/* CSS for the Add User Form */
form {
    margin: 20px;
}

label {
    display: block;
    margin-bottom: 8px;
}

input[type="text"],
input[type="email"],
textarea,
input[type="number"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0056b3;
}

/* table form css */
/* Style the table */
table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
}

/* Style the table headers */
thead {
    background-color: #f2f2f2;
}

th,
td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
}

/* Style table rows on hover */
tr:hover {
    background-color: #f5f5f5;
}

/* Style buttons within the table */
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
</style>