import { defineStore } from 'pinia'

export const Store = defineStore('store', {
  state: () => (
    { 
      isAuthenticated: false,
      ingredientList: null,
      ingredientId: 1,

      allRecette: [],

      shoppingList:[],

      shoppingListHistory:[],
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
      // console.log("a", this.ingredientList)
      let a = this.ingredientList.filter((e) => {
          return id===e.alim_code ;
      })
      return a[0].alim_nom_fr;
    }
  },
})
