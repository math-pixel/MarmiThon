<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Store } from '@/stores/store.js'

const store = Store()
</script>

<template>


  <RouterLink class="recettes" to="/recette">Mes Recettes</RouterLink>
  <RouterLink class="Famille disable" to="/">Famille</RouterLink><!-- to="/famille" -->
  <RouterLink class="Planning" to="/planning">Planning</RouterLink>
  <RouterLink class="Infos disable" to="/">Infos</RouterLink> <!-- to="/info" -->
  <RouterLink class="Courses" to="/course">Liste De Courses</RouterLink>
  

</template>
