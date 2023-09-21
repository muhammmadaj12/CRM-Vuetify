<template>
    <v-app>
      <v-navigation-drawer
        app
        v-model="leftDrawerOpen"
        :clipped="$vuetify.breakpoint.lgAndUp"
        border
      >
        <v-toolbar dense flat class="bg-grey-3">
          <v-avatar class="cursor-pointer">
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" alt="Logo" />
          </v-avatar>
  
          <v-spacer></v-spacer>
  
          <v-btn icon @click="leftDrawerOpen = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
  
        <v-divider></v-divider>
  
        <v-toolbar class="bg-grey-2">
          <v-text-field
            v-model="search"
            rounded
            outlined
            dense
            class="full-width"
            bg-color="white"
            placeholder="Search or start a new conversation"
          >
            <template v-slot:prepend>
              <v-icon>mdi-magnify</v-icon>
            </template>
          </v-text-field>
        </v-toolbar>
  
        <v-scroll-area style="height: calc(100% - 100px)">
          <v-list>
            <v-list-item
              v-for="(conversation, index) in conversations"
              :key="conversation.id"
              clickable
              @click="setCurrentConversation(index)"
            >
              <v-list-item-avatar>
                <v-avatar>
                  <img :src="conversation.avatar" alt="Avatar" />
                </v-avatar>
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title class="conversation__person">
                  {{ conversation.person }}
                </v-list-item-title>
                <v-list-item-subtitle class="conversation__summary">
                  <v-icon v-if="conversation.sent">mdi-check</v-icon>
                  <v-icon v-if="conversation.deleted">mdi-cancel</v-icon>
                  {{ conversation.caption }}
                </v-list-item-subtitle>
              </v-list-item-content>
  
              <v-list-item-action>
                <v-list-item-subtitle class="conversation__time">
                  {{ conversation.time }}
                </v-list-item-subtitle>
                <v-icon>mdi-chevron-down</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list>
        </v-scroll-area>
      </v-navigation-drawer>
  
      <v-app-bar app elevated class="bg-grey-3 text-black">
        <v-app-bar-nav-icon @click="toggleLeftDrawer"></v-app-bar-nav-icon>
  
        <v-avatar>
          <img :src="currentConversation.avatar" alt="Avatar" />
        </v-avatar>
  
        <v-subtitle-1 class="pl-4">{{ currentConversation.person }}</v-subtitle-1>
  
        <v-spacer></v-spacer>
  
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-attachment</v-icon>
        </v-btn>
  
        <v-menu offset="[110, 0]">
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
          <v-list style="min-width: 150px">
            <v-list-item clickable>
              <v-list-item-content>Contact data</v-list-item-content>
            </v-list-item>
            <v-list-item clickable>
              <v-list-item-content>Block</v-list-item-content>
            </v-list-item>
            <v-list-item clickable>
              <v-list-item-content>Select messages</v-list-item-content>
            </v-list-item>
            <v-list-item clickable>
              <v-list-item-content>Silence</v-list-item-content>
            </v-list-item>
            <v-list-item clickable>
              <v-list-item-content>Clear messages</v-list-item-content>
            </v-list-item>
            <v-list-item clickable>
              <v-list-item-content>Erase messages</v-list-item-content>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
  
      <v-main>
        <router-view />
      </v-main>
  
      <v-footer app>
        <v-app-bar dense class="bg-grey-3 text-black row">
          <v-btn icon>
            <v-icon>mdi-emoticon</v-icon>
          </v-btn>
          <v-text-field
            v-model="message"
            rounded
            outlined
            dense
            class="col-grow"
            bg-color="white"
            placeholder="Type a message"
          ></v-text-field>
          <v-btn icon>
            <v-icon>mdi-microphone</v-icon>
          </v-btn>
        </v-app-bar>
      </v-footer>
    </v-app>
  </template>
  
  <script>
  import { ref, computed } from 'vue';
  
  const conversations = [
    {
      id: 1,
      person: 'Razvan Stoenescu',
      avatar: 'https://cdn.quasar.dev/team/razvan_stoenescu.jpeg',
      caption: "I'm working on Quasar!",
      time: '15:00',
      sent: true,
    },
    {
      id: 2,
      person: 'Dan Popescu',
      avatar: 'https://cdn.quasar.dev/team/dan_popescu.jpg',
      caption: "I'm working on Quasar!",
      time: '16:00',
      sent: true,
    },
    {
      id: 3,
      person: 'Jeff Galbraith',
      avatar: 'https://cdn.quasar.dev/team/jeff_galbraith.jpg',
      caption: "I'm working on Quasar!",
      time: '18:00',
      sent: true,
    },
    {
      id: 4,
      person: 'Allan Gaunt',
      avatar: 'https://cdn.quasar.dev/team/allan_gaunt.png',
      caption: "I'm working on Quasar!",
      time: '17:00',
      sent: true,
    },
  ];
  
  export default {
    name: 'WhatsappLayout',
  
    setup() {
      const leftDrawerOpen = ref(false);
      const search = ref('');
      const message = ref('');
      const currentConversationIndex = ref(0);
  
      const currentConversation = computed(() => {
        return conversations[currentConversationIndex.value];
      });
  
      function toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      }
  
      function setCurrentConversation(index) {
        currentConversationIndex.value = index;
      }
  
      return {
        leftDrawerOpen,
        search,
        message,
        currentConversationIndex,
        conversations,
        currentConversation,
        setCurrentConversation,
        toggleLeftDrawer,
      };
    },
  };
  </script>
  
  <style scoped>
  .WAL {
    width: 100%;
    height: 100%;
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
  