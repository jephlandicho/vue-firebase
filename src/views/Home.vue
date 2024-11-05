<template>
        <Hero v-if="isHome" />
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Hero from '../components/Hero.vue';

const route = useRoute(); // Access the current route
const isHome = computed(() => route.path === '/');
</script>