<template>
  <section class="container mx-auto px-4 py-10 bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
    <h1 class="text-3xl font-bold mb-8">Our Products</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="product in products" :key="product.id" class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h2 class="text-2xl font-bold mb-2">{{ product.product_name }}</h2>
        <p class="mb-1">Category: {{ product.product_category }}</p>
        <p class="mb-4">{{ product.product_description }}</p>
        <div class="text-lg font-semibold mb-4">${{ product.price }}</div>
        <button class="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition-colors">Buy Now</button>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { db } from '../firebaseConfig';
  import { collection, getDocs } from 'firebase/firestore';
  
  const products = ref([]);
  
  async function fetchProducts() {
    const querySnapshot = await getDocs(collection(db, "products"));
    products.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  }
  
  onMounted(() => {
    fetchProducts();
  });
  </script>
  
  <style scoped>
  /* Additional styling can go here */
  </style>
  