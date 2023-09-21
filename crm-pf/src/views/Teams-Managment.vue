<template>
  <div>
    <h1>Team Management</h1>
    
    <!-- Form for Adding/Updating Teams -->
    <v-card>
      <v-card-title>{{ isEditing ? 'Update Team' : 'Add Team' }}</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="isEditing ? updateTeam() : addTeam()">
          <v-text-field
            v-model="team.name"
            label="Full Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="team.description"
            label="Description"
            required
          ></v-text-field>
          <v-select
            v-model="team.department"
            :items="departments"
            label="Department"
            required
          ></v-select>
          
          <!-- Select team members -->
          <v-select
            v-model="team.members"
            :items="teamMembers"
            label="Team Members"
            multiple
          ></v-select>
          
          <v-btn type="submit" color="primary">{{ isEditing ? 'Update' : 'Add' }}</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <!-- List of Teams -->
    <v-card>
      <v-card-title>Teams</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(team, index) in teams" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ team.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ team.description }}</v-list-item-subtitle>
              <v-list-item-subtitle>Department: {{ team.department }}</v-list-item-subtitle>
              <v-list-item-subtitle>Members: {{ team.members.join(', ') }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="editTeam(index)" color="primary">Edit</v-btn>
              <v-btn @click="deleteTeam(index)" color="error">Delete</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      team: {
        name: "",
        description: "",
        department: null,
        members: [], // Array to store team members
      },
      teams: [], // An array to store team data
      teamMembers: ["Member 1", "Member 2", "Member 3"], // An array of team member options
      departments: ["Department A", "Department B", "Department C"], // An array of department options
      isEditing: false, // Indicates whether we are editing an existing team
      editIndex: null, // Index of the team being edited
    };
  },
  methods: {
    addTeam() {
      // Handle team addition logic
      this.teams.push({ ...this.team });
      this.clearForm();
    },
    editTeam(index) {
      // Handle team editing logic
      this.isEditing = true;
      this.editIndex = index;
      this.team = { ...this.teams[index] };
    },
    updateTeam() {
      // Handle team update logic
      this.teams.splice(this.editIndex, 1, { ...this.team });
      this.clearForm();
    },
    deleteTeam(index) {
      // Handle team deletion logic
      this.teams.splice(index, 1);
    },
    clearForm() {
      // Clear the form and reset editing mode
      this.team = { name: "", description: "", department: null, members: [] };
      this.isEditing = false;
      this.editIndex = null;
    },
  },
};
</script>
