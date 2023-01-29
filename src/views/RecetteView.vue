<template>
    <h1>Recettes</h1>


    <RouterLink class="creer" to="/creer">creer recette</RouterLink>
    <RouterLink class="Courses" to="/voirtout">voir tout</RouterLink>

    <ReturnItem></ReturnItem>

</template>


<script>

import ReturnItem from '../components/ReturnItem.vue'

export default{
    components:{
        ReturnItem
    }
}

</script>