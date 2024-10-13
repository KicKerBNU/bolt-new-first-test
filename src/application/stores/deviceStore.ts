import { defineStore } from 'pinia'

export const useDeviceStore = defineStore('device', {
  state: () => ({
    isDesktop: true,
    isMobile: false,
  }),
  actions: {
    detectDevice() {
      const userAgent = navigator.userAgent.toLowerCase()
      const mobileKeywords = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone']
      
      this.isMobile = mobileKeywords.some(keyword => userAgent.includes(keyword))
      this.isDesktop = !this.isMobile
    },
  },
})