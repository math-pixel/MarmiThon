import { defineStore } from 'pinia'

export const Store = defineStore('store', {
  state: () => (
    { 
      isAuthenticated: false,
      ingredientList: null,
      ingredientId: 1,

      allRecette: [],

      shoppingList:[],
    }
  ),

  // could also be defined as
  // state: () => ({ count: 0 })

  actions: {
    incrementIngredientId() {
      this.ingredientId++
    },
    clickme() {
      alert("ptdr")
    },
    async initIngredient(){
      const res = await fetch('/aliment.json')
      this.ingredientList = await res.json()
    },
    convertIdToNameIngredient(id){
      ingredientList.filter((e) => {
        console.log(e)
      })
    }
  },
})
