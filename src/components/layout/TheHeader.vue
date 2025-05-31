<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <nav class="container mx-auto px-4 py-3 sm:py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="w-24 sm:w-30">
          <img src="/texperia-logo.webp" alt="Texperia Logo" class="h-8 sm:h-10 w-auto" />
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center justify-end flex-1 sm:space-x-8 space-x-4">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-sm sm:text-base py-2 transition-colors duration-300"
            :class="[
              $route.path === item.path
                ? 'text-primary-600 font-bold'
                : 'text-gray-600 hover:text-primary-600 font-medium',
            ]"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Playda', path: '/product' },
  { name: 'Contact', path: '/contact' },
]
</script>
