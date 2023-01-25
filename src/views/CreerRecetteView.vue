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
            nbPerson:"4",
            allIngredient: []
        }
    },
    components: {
        IngredientItem
    },
    methods:{  
        AddElement(){

            this.allIngredient.push({
                name: "",
                quantity:"",
            })
        }
    }
}
</script>

<template>
    <h1>page creer recettes</h1>

    <input type="text" v-model="recetteName" placeholder="name">
    
    <input type="text" v-model="nbPerson" class="nbPersonne" pattern="[0-9]{2}">
    {{ nbPerson }} personnes

    <IngredientItem v-for="item in allIngredient" :toto="item"/>


    <button @click="AddElement()">Add ingredient</button>

    <button @click="createRecette()">OK !</button>
    {{ allIngredient }}


</template>



<style scoped>

.nbPersonne{
    width: 50px;
    text-align: center;
    border-radius: 50px;

    border: 1px solid var(--third-color);

    background-color: var(--color-background);
    color: var(--color-text);

    font-family: 'myFirstFont', serif;
}


</style>