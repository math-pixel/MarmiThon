import { defineStore } from 'pinia'

export const Store = defineStore('store', {
  state: () => (
    { 
      count: 0,
      isAuthenticated: false,
      ingredientList: null,
    }
  ),

  // could also be defined as
  // state: () => ({ count: 0 })

  actions: {
    increment() {
      this.count++
    },
    clickme() {
      alert("ptdr")
    },
    async initIngredient(){
      const res = await fetch('/aliment.json')
      this.ingredientList = await res.json()
    }
  },
})
