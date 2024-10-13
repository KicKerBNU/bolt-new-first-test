import { defineStore } from 'pinia'

interface Database {
  id: number
  name: string
}

export const useDatabaseStore = defineStore('database', {
  state: () => ({
    databases: [] as Database[],
  }),
  actions: {
    addDatabase(name: string) {
      const newId = this.databases.length + 1
      this.databases.push({ id: newId, name })
    },
    editDatabase(id: number, newName: string) {
      const database = this.databases.find(db => db.id === id)
      if (database) {
        database.name = newName
      }
    },
    deleteDatabase(id: number) {
      this.databases = this.databases.filter(db => db.id !== id)
    },
  },
})