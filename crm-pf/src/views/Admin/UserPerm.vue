<template>
    <div>
      <!-- Pass dynamic tabData to Tab.vue -->
      <tab :tabData="tabData"></tab>
    </div>
  </template>
  
  <script>
  import Tab from '../../components/common/Tabs.vue'; // Adjust the import path as needed
  
  export default {
    components: {
      Tab,
    },
    data() {
      return {
        tabData: [
          {
            heading: 'Landscape',
          },
        ],
      };
    },
  };
  </script>
  