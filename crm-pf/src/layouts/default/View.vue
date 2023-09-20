<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <!-- Your sidebar content -->
    </v-navigation-drawer>

    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application</v-app-bar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view> <!-- This is where your views will be rendered -->
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: null,
    };
  },
};
</script>
