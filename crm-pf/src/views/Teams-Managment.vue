<template>
  <v-form>
    <v-text-field v-model="team.name" label="Name"></v-text-field>
    <v-text-field v-model="team.department_id" label="Department ID"></v-text-field>
    <v-text-field v-model="team.teamlead_id" label="Team Lead ID"></v-text-field>
    <v-btn @click="logData" color="primary">Log Data</v-btn>
    <v-btn @click="submitForm" color="primary">Save</v-btn>
  </v-form>
</template>
<script>
import axios from 'axios';

export default {
  props: {
    teamId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      team: {
        name: '',
        department_id: '',
        teamlead_id: '',
      },
    };
  },
  methods: {
    logData() {
      // Log the data entered by the user
      console.log('Data entered by the user:', this.team);
    },
    async submitForm() {
      try {
        if (this.teamId !== null) {
          // If teamId is not null, it's an update operation, send a PUT request
          await axios.put(`http://localhost:8000/api/teams/${this.teamId}`, this.team);
          // Handle success for update
          this.$router.push('/teams'); // Redirect to the team list after update
          this.$emit('success', 'Team updated successfully');
        } else {
          // If teamId is null, it's a new team creation, send a POST request
          const response = await axios.post('http://localhost:8000/api/team/add', this.team);
          // Handle success for creation
          this.$emit('success', 'Team created successfully');
        }
      } catch (error) {
        // Handle error responses
        console.error('Error:', error);
        this.$emit('error', 'Failed to save team');
      }
    },
  },
};
</script>
