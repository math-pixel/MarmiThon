import { defineStore } from 'pinia'


export const Store = defineStore('store', {
  state: () => {
    return { 
      count: 0,
      isAuthenticated: false
    }
  },

  // could also be defined as
  // state: () => ({ count: 0 })

  actions: {
    increment() {
      this.count++
    },
    clickme() {
      alert("ptdr")
    }
  },
})
