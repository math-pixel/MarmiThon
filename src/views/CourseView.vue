<template>

    <return-item></return-item>

    <h1>Mes Liste de Course</h1>

    <li v-for="item in this.store.shoppingListHistory" class="recette_pages"><shopping-list :listRecette="item"/></li>

</template>


<script>
import { Store } from '@/stores/store.js'

import ShoppingList from "../components/ShoppingList.vue";
import ReturnItem from '../components/ReturnItem.vue'

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

    }
  },  
  components: {
    ShoppingList,
    ReturnItem
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