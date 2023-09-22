<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" style="background-color:;">
            <div class="py-3" id="drawer-logo" @click="goHome">
                <v-img alt="Logo" src="@/assets/fevicon.png" />
            </div>
            <v-divider></v-divider>
            <div class="py-3">
                <!-- <div class="pl-3 pb-3">
                     <v-row>
                        <v-col cols="6">
                            <v-avatar>
                                <v-img alt="Avatar" src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460" />
                            </v-avatar>
                        </v-col>
                        <v-col cols="6">
                            <v-title>User</v-title>
                            <p>Hello User!</p>
                        </v-col>
                    </v-row> 
                </div>
                <v-divider></v-divider> -->
                <h4 class="pl-3 py-3"><u>Menu Items:</u></h4>
                <v-list id="side-nav">
                    <v-list-item-group>
                        <v-list-item v-for="(item, index) in filteredNavbarItems" :key="index" class="pl-3">
                            <router-link :to="item.attrs.to" :class="getNavItemClasses(item)">
                                <v-icon>{{ item.icon }}</v-icon> <span class="pl-2">{{ item.title }} </span>
                            </router-link>
                            <v-divider class="py-3"></v-divider>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>

            </div>
        </v-navigation-drawer>
        <v-app-bar style="color: #fff;" color="#6A25FF ">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Menu</v-app-bar-title>
            <v-spacer></v-spacer>
            <div style="cursor: pointer;" @click="logout">
                <v-btn>
                    <v-icon>mdi-wrench</v-icon>
                    <span class="pl-2">Logout</span>
                </v-btn>
            </div>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>
 
<script>
import { navbarItems } from '@/constant/Routes&Permissions.js';

export default {
    name: 'Sidebar',
    data() {
        return {
            drawer: null,
            navbarItems: navbarItems,
        };
    },
    computed: {
        userPermission() {
            const userPermission = localStorage.getItem('userPermission');
            console.log('User Permission:', userPermission); // Add this line for debugging
            return userPermission;

        },

        filteredNavbarItems() {
            // Filter the navbar items based on the user's permission and the presence of useroption
            if (this.userPermission.includes('can-grant-permission')) {
                return navbarItems.filter((item) => item.useroption === true);
            } else {
                return navbarItems.filter((item) => item.useroption === false || item.useroption === undefined);
            }
        },
    },
    methods: {
        goHome() {
            this.$router.push("/user-managment");
        },
        logout() {
            localStorage.removeItem('authToken');
            localStorage.removeItem('userPermission');

            // Redirect the user to the login page
            this.$router.push({ name: 'Login' });
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
#side-nav a {
    text-decoration: none;
    color: #292b30
}

#side-nav a.active-class {
    border-right: 1px solid var(--v-primary-base);
    max-width: 202px;
    background: rgba(36, 157, 168, 0.3);
    border-radius: 8px 0px 0px 8px;
    padding: 8px;
}

div#drawer-logo {
    width: 40%;
    margin: auto;

    cursor: pointer;
}
</style>