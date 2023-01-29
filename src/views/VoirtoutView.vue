<template>

    <home-item></home-item>
    <return-item></return-item>

    <h1>Mes Recettes</h1>

    <li v-for="item in this.store.allRecette" class="recette_pages">
        <!--    {{ item }} -->
        <h2>{{ item.name }}</h2>
        <h2>pour {{ item.portion }} personne(s)</h2>
        <h2>ingredient :</h2>
        <li v-for="ingredient in item.ingredients">
            <h3>{{ ingredient.name }}</h3>
            <p>X {{ ingredient.quantity }}</p>
        </li>

    </li>
</template>

<script>
import { Store } from '@/stores/store.js'

import HomeItem from '../components/HomeItem.vue'
import ReturnItem from '../components/ReturnItem.vue'


export default{
    setup(){
    const store = Store()
    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
  components:{
    HomeItem,
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