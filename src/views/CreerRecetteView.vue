<script>

import { Store } from '@/stores/store.js'
import { routerKey } from 'vue-router';
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
            Ingredient: [{
                name: "",
                quantity:"",
                id:"0",
            }],
        }
    },
    components: {
        IngredientItem
    },
    methods:{  
        AddElement(){
            this.Ingredient.push({
                name: "",
                quantity:"",
                id:"0",
            })
        },
        deleteElement(index){
            this.Ingredient.splice(index,index)
        },
        createRecette(){
            this.store.allRecette.push({
                name: this.recetteName,
                portion: this.nbPerson,
                ingredients: this.Ingredient
            })

            this.$router.push({path: '/'});
        }
    }
}
</script>

<template>
    <h1>page creer recettes</h1>

    <input type="text" v-model="recetteName" placeholder="name">
    
    <div>
        <input type="text" v-model="nbPerson" class="nbPersonne" pattern="[0-9]{2}">
     personnes
    </div>
    

    <IngredientItem v-for="(item,index) in Ingredient" :aliment="item" v-model:fullid="item.id" v-model:name="item.name" @delete="deleteElement(index)" class="IngredientItem"/>


    <hr class="hr">
    <button @click="AddElement()">Add ingredient</button>

    <button @click="createRecette()">OK !</button>

    <!-- {{ this.store.allRecette }} -->

    {{ this.ingredient }}

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

.IngredientItem{
    width: 100vw;
}

.hr{
    width: 80%;
}


</style>