<template>
    <h1>page planning</h1>

    <select name="recetteSelection" id="recetteSelection" v-for="(nbRecette, index) in this.store.shoppingList" >
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
            listquantity: [],
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
            this.listquantity = []
        },
        selectRecette(recette,index){
            this.store.shoppingList[index] = recette;
            // console.log(this.store.shoppingList)
        },
        getShoppingList(){
            
            // console.log(this.store.shoppingList)
            this.store.shoppingList.forEach(RecetteItem => { // les recette selectionné
                // console.log("recette selectioner")
                RecetteItem.ingredients.forEach(ingredientItem => { // .name / .quantity / .id dans chaque recette selectionner get ingredient list
                    
                    // console.log("ingredient item")
                    if (this.listquantity.length !== 0) {
                        
                        let shouldAddQuantity = 0;
                        let indexList = 0;
                        this.listquantity.forEach((ingredient, index) => {// pour verif dans array de tout les ingredients
        
                            if (ingredient.id == ingredientItem.id) {
                                shouldAddQuantity += 1;
                                indexList = index
                            }

                        })

                        if(shouldAddQuantity > 0){
                            // console.log("add quantity")
                            this.listquantity[indexList].qts += ingredientItem.quantity
                        }else{
                            this.listquantity.push({"id": ingredientItem.id, "qts": ingredientItem.quantity})
                            // console.log("add other ingredient")
                        }

                        shouldAddQuantity = 0

                    }else{
                        console.log("add first")
                        this.listquantity.push({"id": ingredientItem.id, "qts": ingredientItem.quantity})
                    }
                    
                });
            });
            
            console.log(this.listquantity)
            this.clearShopping()
        }
    }


}



</script>