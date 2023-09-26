<template>
    <div>
        <button @click="showUserForm = true; showRollForm = false" class="action-button user-button">Add User</button>
        <button @click="showUserForm = false; showRollForm = true" class="action-button roll-button">Add Roll</button>
        <table v-if="showUserForm">
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
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>
                        <div>
                            <v-btn @click="editUser(user)">
                                <v-icon>mdi-pencil</v-icon>
                            </v-btn>
                            <v-btn @click="confirmDeleteUser(user.id)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <v-dialog v-model="editDialog" max-width="400px">
            <!-- ... Existing dialog content ... -->
            <v-card>
                <v-card-title>Edit User</v-card-title>
                <v-card-text>
                    <v-text-field v-model="editedUser.name" label="Name"></v-text-field>
                    <v-text-field v-model="editedUser.email" label="Email"></v-text-field>
                    <v-select v-model="selectedRole" :items="roles" label="Select Role" required></v-select>
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="saveUser">Save</v-btn>
                    <v-btn color="red" @click="cancelEdit">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!-- Add User Form -->
        <div>
            <button v-if="!showForm" @click="showForm = true" class="action-button user-button">
                Add User
            </button>
            <button v-else @click="showForm = false" class="action-button user-button">
                Add User
            </button>
            <form v-if="showForm" @submit.prevent="addUser" class="user-form">
                <!-- User form fields go here -->
                <label for="userName">User Name:</label>
                <input type="text" v-model="userName" required><br><br>

                <label for="userEmail">User Email:</label>
                <input type="email" v-model="userEmail" required><br><br>

                <v-select v-model="selectedRole" :items="roles" :rules="[v => !!v || 'Item is required']"
                    label="Select Role" required></v-select>
                <br><br>

                <button type="submit">Submit</button>
            </form>
        </div>

        <!-- Add Roll Form -->
        <form v-if="showRollForm" @submit.prevent="addRoll" class="roll-form">
            <!-- Roll form fields go here -->
            <label for="rollName">Roll Name:</label>
            <input type="text" v-model="rollName" required><br><br>

            <label for="rollDescription">Roll Description:</label>
            <textarea v-model="rollDescription" rows="4" cols="50"></textarea><br><br>

            <label for="rollPrice">Roll Price:</label>
            <input type="number" v-model="rollPrice" step="0.01" required><br><br>

            <button type="button">Submit</button>
        </form>


    </div>
</template>
  
<script>

export default {

    data() {
        return {
            selectedRole: "", // Selected role will be stored here
            roles: ["Guest", "Admin", "Administrator"], // Array of role options
            users: [],
            showUserForm: false,
            showForm: false,
            showRollForm: false,
            userName: "",
            userEmail: "",
            rollName: "",
            rollDescription: "",
            rollPrice: 0,
        };
    },
    methods: {
        addUser() {
            // Handle user addition logic here
            console.log("User Name:", this.userName);
            console.log("User Email:", this.userEmail);
            console.log("selectedRole:", this.selectedRole)
            // You can send a request to add a user to your backend here
        },
        addRoll() {
            // Handle roll addition logic here
            console.log("Roll Name:", this.rollName);
            console.log("Roll Description:", this.rollDescription);
            console.log("Roll Price:", this.rollPrice);
            // You can send a request to add a roll to your backend here
            // Reset form fields

            // Hide the form
        },
        addUser() {
            // Validate user inputs if needed
            if (!this.userName || !this.userEmail) {
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
            this.users.push(newUser);

            // Clear the form fields
            this.userName = "";
            this.userEmail = "";
            this.selectedRole = "";
            this.showForm = false;
            this.showUserForm = false;
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