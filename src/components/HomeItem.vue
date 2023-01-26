<template>
    <img src="../assets/logo.svg" alt="" class="logo" @click="this.$router.go(-1)">
</template>

<style scoped>
.logo{
    position: absolute;
    top: 0;
    right: 0;

    height: 100px;
    width: 100px;
}
</style>