<template>
    <li>{{itemName.alim_nom_fr}}</li>
    <div>
        <div>
            <input type="text">
            <li v-for="item in ingredientMatch" @click="test(item)" :itemName="item"></li>
        </div>
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

    props:['itemName']
}
</script>