<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from './application/stores/authStore';
import { useDeviceStore } from './application/stores/deviceStore';

const router = useRouter();
const authStore = useAuthStore();
const deviceStore = useDeviceStore();

onMounted(() => {
  deviceStore.detectDevice();
  if (!authStore.isLoggedIn) {
    router.push('/login');
  }
});
</script>

<template>
  <router-view></router-view>
</template>