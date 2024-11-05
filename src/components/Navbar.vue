<template>
  <nav class="bg-white border-gray-200 px-4 py-2.5 shadow dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between mx-auto">
      <a href="/" class="flex items-center">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap"
          :class="{ 'text-white': isDarkMode, 'text-gray-900': !isDarkMode }"
        >
          YourBrand
        </span>
      </a>
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm1 4a1 1 0 100 2h12a1 1 0 100-2H4z" clip-rule="evenodd"></path>
        </svg>
      </button>
      <div :class="menuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto" id="navbar-default">
        <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <a href="/" class="block py-2 pl-3 pr-4 text-gray-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
          </li>
          <li>
            <a href="/about" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="/services" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
          </li>
          <li>
            <a href="/contact" class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
          </li>
        </ul>
      </div>
      <button @click="toggleDarkMode" class="px-4 py-2">
        <span v-if="isDarkMode">🌞</span>
        <span v-else>🌙</span>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      isDarkMode: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    toggleDarkMode() {
      console.log('Dark mode toggled:', !this.isDarkMode);
      this.isDarkMode = !this.isDarkMode;
      document.documentElement.classList.toggle('dark', this.isDarkMode);
    },
  },
};
</script>
