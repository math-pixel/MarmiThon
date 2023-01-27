<script>
import { RouterLink, RouterView } from 'vue-router'
import { Store } from '@/stores/store.js'

import HomeItem from './components/HomeItem.vue'

export default{
  components:{
    RouterView,
    HomeItem
  },
  setup(){
    const store = Store()
    return {
      // you can return the whole store instance to use it in the template
      store,
    }
  },
  created(){
    this.store.initIngredient()
  }
}
</script>

<template>

  <home-item></home-item>
  

  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->



  <RouterView />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
