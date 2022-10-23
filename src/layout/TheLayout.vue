<template>
    <header />
    <main>
        <home-page />
    </main>
    <footer />
</template>

<script setup lang="ts">
import HomePage from "../pages/Home/HomePage.vue";
</script>

<style scoped lang="scss">
main {
    background: $dark;
    width: 100%;
    min-height: 100vh;
}
</style>
