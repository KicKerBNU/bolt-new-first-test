<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../application/stores/authStore'

const router = useRouter()
const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  router.push('/login')
}
</script>

<template>
  <nav class="left">
    <img src="/vite.svg" alt="Logo" class="logo">
    <a href="/" class="row">
      <i>home</i>
      <div>Home</div>
    </a>
    <a href="/database" class="row">
      <i>storage</i>
      <div>Database</div>
    </a>
    <a @click="logout" class="row">
      <i>logout</i>
      <div>Logout</div>
    </a>
  </nav>
</template>

<style scoped>
.logo {
  width: 50px;
  height: 50px;
  margin: 20px auto;
  display: block;
}
</style>