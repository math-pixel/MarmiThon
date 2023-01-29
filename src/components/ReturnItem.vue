<template>
    <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" class="logo" @click="this.$router.go(-1)">
</template>

<style scoped>
.logo{
    position: absolute;
    top: 40px;
    left: 10px;

    height: 40px;
    width: 40px;

    filter: invert(1);
}
</style>