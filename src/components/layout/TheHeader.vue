<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <router-link to="/" class="w-30">
          <img src="/texperia-logo.webp" alt="Texperia Logo" class="h-10 w-auto" />
        </router-link>

        <!-- Navigation Links -->
        <div class="flex items-center space-x-8">
          <router-link
            v-for="item in navItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-600 hover:text-primary-600 transition-colors font-medium"
            :class="{ 'text-primary-600': $route.path === item.path }"
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
