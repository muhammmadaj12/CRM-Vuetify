<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer">
            <div class="pb-2 pt-5">
                <v-list id="side-nav">
                    <v-list-item-group>
                        <v-list-item class="pl-3" v-for="(item, index) in navbarItems" :key="index">
                            <router-link :to="item.attrs.to" :class="getNavItemClasses(item)">
                                <v-icon>{{ item.icon }}</v-icon> <span class="pl-2">{{ item.title }} </span>
                            </router-link>
                            <v-divider class="py-3"></v-divider>
                        </v-list-item>
                    </v-list-item-group>
                    <!-- <li>
                        <router-link :to="item.attrs.to" :class="getNavItemClasses(item)">
                            <img :src="item.img" alt="icon" /> {{ item.title }}
                        </router-link>
                    </li> -->
                    <v-spacer></v-spacer>
                    <v-list-item>
                       <div style="cursor: pointer;" @click="logout">
                        <v-btn>
                            <v-icon>mdi-wrench</v-icon>
                            <span class="pl-2">Logout</span>
                        </v-btn>
                    </div>
                    </v-list-item>
                </v-list>
            </div>
        </v-navigation-drawer>
<!-- <div class="pa-3 pb-2 pt-2">
        <v-list flat dense>
          <v-list-item-group>
            <v-list-item class="ml-3" link @click="value = true">
              <v-list-item-icon class="mr-3">
                <v-img
                  class="mt-1"
                  max-width="14"
                  max-height="14"
                  src="@/assets/icons/Group.svg"
                ></v-img>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title
                  class="text-transform-none letter-space font-12 fw-500"
                  >Logout</v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>

      </div> -->

        <v-app-bar>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Application</v-app-bar-title>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>
  
<script>
import {navbarItems} from '@/constant/Routes&Permissions.js';
export default {
    name: 'Sidebar',
    data() {
        return {
            drawer: null,
            navbarItems: navbarItems,
        };
    },
    methods: {
        logout(){
            
        },
    getNavItemClasses(item) {
      const classes = {
        'nav-item': true, // Always apply this class
      };

      // Add classes conditionally based on your criteria
      if (window.innerWidth < 768) {
        classes['responsive-class'] = true;
      } else {
        classes['non-responsive-class'] = true;
      }

      // You can add more conditions here as needed
      // For example, you can check if the item is active and add a class accordingly
      if (item.attrs.to === this.$route.path) {
        classes['active-class'] = true;
      }

      return classes;
    },
  },

};
</script>
<style scoped>
#side-nav a{
    text-decoration: none;

}
/* a.active {
  border-right: 1px solid var(--v-primary-base) !important;
  max-width: 202px !important;
  background: rgba(36, 157, 168, 0.06) !important;
  border-radius: 8px 0px 0px 8px !important;
} */
</style>