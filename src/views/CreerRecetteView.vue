<script>

import { Store } from '@/stores/store.js'
import IngredientItem from "../components/IngredientItem.vue";


export default{
    setup(){
        const store = Store()
        return {
            store
        }
    },
    data(){
        return {
            recetteName: "",
            textSearch:"",
            ingredientMatch: [],
        }
    },
    components: {
        IngredientItem
    },
    methods:{
        displayIngredient(){
            
            this.ingredientMatch = this.store.ingredientList.filter((e) => e.alim_nom_fr.toUpperCase().includes(this.textSearch.toUpperCase()) )
            console.log(this.ingredientMatch)
        },
        test(a){
            console.log(a.alim_nom_fr)
        }
    }
}
</script>

<template>
    <h1>page creer recettes</h1>

    <input type="text" v-model="recetteName" placeholder="name">
    {{ recetteName }}

    


    <input type="text" class="searchBar" placeholder="search bar" @keyup="displayIngredient()" v-model="textSearch">
    {{ textSearch }}

</template>

<style scoped>

.proposition{
    max-height: 156px;
    overflow: scroll;
}

</style>