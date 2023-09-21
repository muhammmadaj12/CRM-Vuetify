<template>
  <div>
    <h1>Department Management</h1>
    <v-card>
      <v-card-title>Create Department</v-card-title>
      <v-card-text>
        <v-form @submit.prevent="createDepartment">
          <v-text-field
            v-model="newDepartment.name"
            label="Department Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="newDepartment.description"
            label="Description"
            required
          ></v-text-field>
          <v-btn type="submit" color="primary">Create</v-btn>
        </v-form>
      </v-card-text>
    </v-card>

    <v-divider></v-divider>

    <v-card>
      <v-card-title>Departments</v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(department, index) in departments" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ department.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ department.description }}</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn @click="editDepartment(index)" color="primary">Edit</v-btn>
              <v-btn @click="deleteDepartment(index)" color="error">Delete</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>

    <!-- Edit Department Dialog -->
    <v-dialog v-model="editDialog" max-width="500px">
      <v-card>
        <v-card-title>Edit Department</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="saveEditedDepartment">
            <v-text-field
              v-model="editedDepartment.name"
              label="Department Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="editedDepartment.description"
              label="Description"
              required
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="cancelEdit">Cancel</v-btn>
          <v-btn @click="saveEditedDepartment" color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newDepartment: {
        name: "",
        description: "",
      },
      departments: [], // An array to store department data
      editDialog: false,
      editedDepartment: {
        name: "",
        description: "",
      },
      editedDepartmentIndex: null,
    };
  },
  methods: {
    createDepartment() {
      // Handle department creation logic
      this.departments.push({ ...this.newDepartment });
      this.newDepartment.name = "";
      this.newDepartment.description = "";
    },
    editDepartment(index) {
      // Open the edit dialog and populate the editedDepartment data
      this.editedDepartmentIndex = index;
      this.editedDepartment = { ...this.departments[index] };
      this.editDialog = true;
    },
    cancelEdit() {
      // Close the edit dialog
      this.editDialog = false;
    },
    saveEditedDepartment() {
      // Save the edited department and close the edit dialog
      this.departments[this.editedDepartmentIndex] = { ...this.editedDepartment };
      this.editDialog = false;
    },
    deleteDepartment(index) {
      // Handle department deletion logic
      this.departments.splice(index, 1);
    },
  },
};
</script>
