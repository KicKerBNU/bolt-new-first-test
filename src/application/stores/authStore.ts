import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as { username: string } | null,
  }),
  getters: {
    isLoggedIn: (state) => !!state.user,
  },
  actions: {
    login(username: string, password: string) {
      // Mock login logic
      if (username && password) {
        this.user = { username }
        localStorage.setItem('user', JSON.stringify(this.user))
        return true
      }
      return false
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
    },
    checkAuth() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
      }
    },
  },
})