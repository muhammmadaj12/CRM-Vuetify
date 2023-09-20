<template>
  <Sidebar>
    <router-view />
  </Sidebar>
</template>

<script>
import Sidebar from '@/components/common/Sidebar.vue';

export default {
    name: 'DefaultLayout',
    data() {
        return {
            drawer: null,
        };
    },
    components: { Sidebar }
};
</script>
