<script setup lang="ts">
import { useHead } from '@vueuse/head'
import TheHeader from './components/layout/TheHeader.vue'
import TheFooter from './components/layout/TheFooter.vue'

// Default meta tags
useHead({
  title: 'Texperia Techsolutions Pvt. Ltd.',
  meta: [
    {
      name: 'description',
      content:
        'Texperia creates cutting-edge digital engagement and experiential products that transform how businesses connect with audiences.',
    },
    {
      property: 'og:title',
      content: 'Texperia Techsolutions Pvt. Ltd.',
    },
    {
      property: 'og:description',
      content:
        'Texperia creates cutting-edge digital engagement and experiential products that transform how businesses connect with audiences.',
    },
    {
      property: 'og:type',
      content: 'website',
    },
  ],
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <TheFooter />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
