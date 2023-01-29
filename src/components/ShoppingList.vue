<template>
    {{ listRecette.date }}
    <li v-for="i in listRecette.list">nom : {{ getName(i.id) }} | X {{ i.qts }}</li>
</template>

<script>
import { Store } from '@/stores/store.js'

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
            Name: ""
        }
    },
    methods:{
        getName(id){
            // this.Name = this.store.convertIdToNameIngredient(id);
            console.log(this.store.convertIdToNameIngredient(25601))

            return this.store.convertIdToNameIngredient(id)
        }
    },
    props:['listRecette'],
    emits:['update:fullid', 'update:name']
}

</script>
