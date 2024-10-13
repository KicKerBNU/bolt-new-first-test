<script setup lang="ts">
import { ref } from 'vue'
import { useDeviceStore } from '../../application/stores/deviceStore'

const deviceStore = useDeviceStore()
const userInput = ref('')
const chatHistory = ref<{ role: 'user' | 'assistant', content: string }[]>([])

const sendMessage = () => {
  if (userInput.value.trim()) {
    chatHistory.value.push({ role: 'user', content: userInput.value })
    // Mock response (replace with actual API call in the future)
    setTimeout(() => {
      chatHistory.value.push({ role: 'assistant', content: 'This is a mock response. Implement actual API logic here.' })
    }, 1000)
    userInput.value = ''
  }
}
</script>

<template>
  <div class="container">
    <h1>Chat</h1>
    <div class="chat-container">
      <div v-for="(message, index) in chatHistory" :key="index" :class="['message', message.role]">
        {{ message.content }}
      </div>
    </div>
    <div class="input-container">
      <div class="field label border">
        <input v-model="userInput" @keyup.enter="sendMessage" type="text">
        <label>Ask a question</label>
      </div>
      <button class="primary" @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<style scoped>
.chat-container {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}
.message {
  margin-bottom: 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
.user {
  background-color: #e1f5fe;
  text-align: right;
}
.assistant {
  background-color: #f1f8e9;
}
.input-container {
  display: flex;
  gap: 10px;
}
.input-container .field {
  flex-grow: 1;
}
</style>