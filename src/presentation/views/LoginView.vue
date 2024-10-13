<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../application/stores/authStore'

const username = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const login = () => {
  if (authStore.login(username.value, password.value)) {
    router.push('/')
  } else {
    alert('Invalid credentials')
  }
}
</script>

<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <div class="field label border">
        <input v-model="username" type="text" required>
        <label>Username</label>
      </div>
      <div class="field label border">
        <input v-model="password" type="password" required>
        <label>Password</label>
      </div>
      <button class="primary" type="submit">Login</button>
    </form>
  </div>
</template>