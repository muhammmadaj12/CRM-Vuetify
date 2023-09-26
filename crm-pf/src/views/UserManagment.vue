<template>
    <div>
        <button @click="showUserForm = true; showRollForm = false">Add User</button>
        <button @click="showUserForm = false; showRollForm = true">Add Roll</button>
        <table v-if="showUserForm">
            <!-- Table headers -->
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <!-- Table body -->
            <tbody>
                <tr v-for="(user, index) in users" :key="index">
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
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
                </v-card-text>
                <v-card-actions>
                    <v-btn color="primary" @click="saveUser">Save</v-btn>
                    <v-btn color="red" @click="cancelEdit">Cancel</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>


        <!-- Add User Form -->
        <div v-if="showUserForm">

            <form @submit.prevent="addUser">
                <label for="userName">User Name:</label>
                <input type="text" v-model="userName" required><br><br>

                <label for="userEmail">User Email:</label>
                <input type="email" v-model="userEmail" required><br><br>
                <label>User Role:</label><br>
                <input type="radio" id="admin" value="admin" v-model="userRole">
                <label for="admin">Admin</label><br>
                <input type="radio" id="user" value="user" v-model="userRole">
                <label for="user">User</label><br>
                <input type="radio" id="guest" value="guest" v-model="userRole">
                <label for="guest">Guest</label><br><br>

                <button type="submit">Add User</button>
            </form>
        </div>

        <!-- Add Roll Form -->
        <div v-if="showRollForm">

            <form @submit.prevent="addRoll">
                <label for="rollName">Roll Name:</label>
                <input type="text" v-model="rollName" required><br><br>

                <label for="rollDescription">Roll Description:</label>
                <textarea v-model="rollDescription" rows="4" cols="50"></textarea><br><br>

                <label for="rollPrice">Roll Price:</label>
                <input type="number" v-model="rollPrice" step="0.01" required><br><br>

                <button type="submit">Add Roll</button>
            </form>
        </div>


    </div>
</template>
  
<script>
 
export default {
    components: {


    },
    data() {
        return {
            users: [],
            showUserForm: false,
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
            // You can send a request to add a user to your backend here
        },
        addRoll() {
            // Handle roll addition logic here
            console.log("Roll Name:", this.rollName);
            console.log("Roll Description:", this.rollDescription);
            console.log("Roll Price:", this.rollPrice);
            // You can send a request to add a roll to your backend here
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
            };

            // Push the new user to the users array
            this.users.push(newUser);

            // Clear the form fields
            this.userName = "";
            this.userEmail = "";
        },
    },
};
</script>
<style>
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