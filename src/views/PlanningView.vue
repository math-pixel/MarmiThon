<template>
    <h1>page planning</h1>

    <select name="recetteSelection" id="recetteSelection" v-for="(nbRecette, index) in nbRecettes" >
        <option v-for="recetteName in this.store.allRecette" @click="selectRecette(recetteName,index)">{{ recetteName.name }}</option>
    </select>

    <button @click="addRecetteToCourse()">ajouter un repas pour la semaine</button>
    <button @click="getShoppingList()">prendre la liste de course</button>
    <button @click="clearShopping()">clear Shopping list</button>
</template>

<script>

import { Store } from '@/stores/store.js'

export default{

    setup(){
        const store = Store()
        return {
            store
        }
    },
    data(){
        return {
            nbRecettes:0,
        }
    },
    methods:{
        addRecetteToCourse(){
            this.nbRecettes++;
            this.store.shoppingList.push(this.store.allRecette[0]);
        },
        clearShopping(){
            this.nbRecettes = 0;
            this.store.shoppingList = [];
        },
        selectRecette(recette,index){
            this.store.shoppingList[index] = recette;
            console.log(this.store.shoppingList)
        },
        getShoppingList(){
            this.store.shoppingList.forEach(RecetteItem => {
                console.log(RecetteItem)
                // RecetteItem.ingredients.forEach(ingredientItem => {
                //     console.log(ingredientItem.id)
                // });
            });
        }
    }


}



</script>