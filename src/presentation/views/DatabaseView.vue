<script setup lang="ts">
import { ref } from 'vue'
import { useDatabaseStore } from '../../application/stores/databaseStore'

const databaseStore = useDatabaseStore()
const newDatabaseName = ref('')

const addDatabase = () => {
  if (newDatabaseName.value.trim()) {
    databaseStore.addDatabase(newDatabaseName.value.trim())
    newDatabaseName.value = ''
  }
}

const editDatabase = (id: number, newName: string) => {
  databaseStore.editDatabase(id, newName)
}

const deleteDatabase = (id: number) => {
  if (confirm('Are you sure you want to delete this database?')) {
    databaseStore.deleteDatabase(id)
  }
}
</script>

<template>
  <div class="container">
    <h1>Databases</h1>
    <div class="field label border">
      <input v-model="newDatabaseName" @keyup.enter="addDatabase" type="text">
      <label>New Database Name</label>
    </div>
    <button class="primary" @click="addDatabase">Add Database</button>
    <ul class="list">
      <li v-for="db in databaseStore.databases" :key="db.id">
        <div class="row">
          <div class="col">{{ db.name }}</div>
          <div class="col">
            <button class="secondary small" @click="editDatabase(db.id, prompt('Enter new name', db.name) || db.name)">Edit</button>
            <button class="secondary small" @click="deleteDatabase(db.id)">Delete</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>