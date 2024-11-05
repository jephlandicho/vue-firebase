<template>
  <div class="bg-white dark:bg-gray-900 min-h-screen">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style scoped>
</style>
