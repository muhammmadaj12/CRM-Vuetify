<template>
    <v-form @submit.prevent="addUser">
        <v-text-field v-model="user.name" label="Name"></v-text-field>
        <v-text-field v-model="user.email" label="Email"></v-text-field>
        <v-select v-model="user.role" :items="roles" label="Role"></v-select>
        <v-btn type="submit" color="primary">Add User</v-btn>
    </v-form>
</template>
  
<script>
export default {
    data() {
        return {
            user: {
                name: "",
                email: "",
                role: null,
            },
            roles: ["Admin", "User", "Guest"], // Modify this array with your roles
        };
    },
    methods: {
        addUser() {
            // Add the user to your data store or perform an API call here
            // You can emit an event to notify the parent component
            this.$emit("user-added", this.user);
            // Clear the form fields
            this.user = {
                name: "",
                email: "",
                role: null,
            };
        },
    },
};
</script>
  