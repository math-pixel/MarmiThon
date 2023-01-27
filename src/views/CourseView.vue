<template>
    <h1>page course</h1>

    <li v-for="item in this.store.shoppingListHistory" class="recette_pages"><li v-for="i in item">{{ temp }} quantité(s): {{ i.qts }}</li></li> // faire un component

</template>


<script>
import { Store } from '@/stores/store.js'


export default{
    setup(){
    const store = Store()
    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
  data(){
    return {
        temp: this.store.convertIdToNameIngredient(i.id),
    }
    
  }
}
</script>

<style>
.recette_pages{

    list-style-type: none;

    background-color: var(--seconde-color);

    padding: 20px;
    margin: 10px;

    border-radius: 50px;

    color: var(--seconde-color-dark);
}

li{
    list-style-type: none;
}
</style>