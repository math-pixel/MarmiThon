<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Store } from '@/stores/store.js'

const store = Store()
</script>

<template>


  <RouterLink class="recettes" to="/recette">Mes Recettes</RouterLink>
  <RouterLink class="Famille" to="/famille">Famille</RouterLink>
  <RouterLink class="Planning" to="/planning">Planning</RouterLink>
  <RouterLink class="Infos" to="/info">Infos</RouterLink>
  <RouterLink class="Courses" to="/course">Liste De Courses</RouterLink>

</template>
