<template>
        <div class="IngredientCarrousel">
            <input type="text" class="searchBar" placeholder="search bar" @keyup="displayIngredient()" v-model="textSearch">
            <div class="proposition">
                <li v-for="item in ingredientMatch" @click="setIngredient(item)" :itemName="item">{{ item.alim_nom_fr }}</li>
            </div>
            <input type="text" placeholder="Qts" v-model="toto.quantity">
            <p>g</p>
            <input type="button" value="delete" >
            </div>

            <!-- {{ toto }} -->
        
</template>

<script>
import { Store } from '@/stores/store.js'



export default {

    setup(){
        const store = Store()
        return {
            store
        }
    },
    data(){
        return {
            textSearch:"",
            ingredientMatch: [],
        }
    },
    methods:{
        displayIngredient(){
            this.ingredientMatch = this.store.ingredientList.filter((e) => e.alim_nom_fr.toUpperCase().includes(this.textSearch.toUpperCase()) )
            console.log(this.ingredientMatch)
        },
        setIngredient(item){
            this.textSearch = item.alim_nom_fr
            this.ingredientMatch = []
        }
    },

    props:['toto'],
    emits:['deletedId']
}
</script>

<style scoped>
.proposition{
    position: absolute;
    top: 100%;
    left: 0;
    max-height: 156px;
    overflow-y: scroll;
    overflow-x: hidden;
}

.IngredientCarrousel{
    position: relative;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row;
}
</style>