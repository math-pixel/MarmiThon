<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { Store } from '@/stores/store.js'

const store = Store()
</script>

<template>


  <RouterLink class="recettes" to="/recette">Mes Recettes</RouterLink>
  <RouterLink class="Famille" to="/auth">Famille</RouterLink>
  <RouterLink class="Planning" to="/auth">Planning</RouterLink>
  <RouterLink class="Infos" to="/auth">Infos</RouterLink>
  <RouterLink class="Courses" to="/auth">Liste De Courses</RouterLink>

<RouterView></RouterView>
</template>
