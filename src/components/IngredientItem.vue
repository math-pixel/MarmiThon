<template>
        <div class="IngredientCarrousel" >
            <hr>
            <input type="text" class="searchBar" placeholder="search bar" @keyup="displayIngredient()" v-model="textSearch" @click="isAuthorized=true">
            <div class="proposition" v-if="isAuthorized">
                <li v-for="item in ingredientMatch" @click="setIngredient(item)" :itemName="item">{{ item.alim_nom_fr }}</li>
            </div>
            <input type="number" placeholder="Qts" v-model="aliment.quantity" pattern="[0-9]+">
            <select name="unite" id="unite">
                <option value="unite">Unite</option>
                <option value="gramme">Gramme</option>
                <option value="litre">Litre</option>
            </select>
            <input type="button" value="delete" @click="$emit('delete')">
        </div>

        
        
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
            isAuthorized: false,
        }
    },
    methods:{
        displayIngredient(){
            this.ingredientMatch = this.store.ingredientList.filter((e) => e.alim_nom_fr.toUpperCase().includes(this.textSearch.toUpperCase()) )
            console.log(this.ingredientMatch)
        },
        setIngredient(item){
            // alim_ssgrp_code
            this.textSearch = item.alim_nom_fr
            this.ingredientMatch = []
            this.$emit('update:fullid', item.alim_code )
            this.$emit('update:name', this.textSearch )
            
        }
    },
    props:{
        aliment: String,
        fullid: String,
        name:String,
    },
    emits:['update:fullid', 'update:name']
}
</script>

<style scoped>
.proposition{

    z-index: 100;

    position: relative;


    max-height: 156px;
    overflow-y: scroll;
    overflow-x: hidden;

    width: 100%;

    background-color: var(--color-background);
    padding: 5px;
    border-radius: 10px ;

    list-style-type: none;
}

.IngredientCarrousel{
    position: relative;
    /* display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: row; */

    width: 40%;
}
</style>