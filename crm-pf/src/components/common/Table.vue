<template>
    <v-table fixed-header height="300px">
      <thead>
        <tr>
          <th class="text-left">
            Name
          </th>
          <th class="text-left">
            Calories
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td>
        </tr>
      </tbody>
    </v-table>
  </template>
  
  <script>
  export default {
    props: {
      tableData: Array, // Data passed from tabs.vue
    },
  };
  </script>
  