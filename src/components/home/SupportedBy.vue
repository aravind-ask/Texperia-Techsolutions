<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-8">Supported By</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div
          v-for="(logo, index) in supporterLogos"
          :key="logo.name"
          class="supporter-logo-container"
          :style="{ '--delay': `${index * 0.2}s` }"
        >
          <div class="supporter-logo aspect-square p-4">
            <img
              :src="logo.image"
              :alt="logo.name"
              class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      <h3 class="text-2xl text-center mt-8">We cannot do this alone. Thank you.</h3>
    </div>
  </section>
</template>

<script setup lang="ts">
const supporterLogos = [
  {
    name: 'IBM Udaipur Incubation Center',
    image: '/about-iim.webp',
  },
  {
    name: 'Razorpay Rize',
    image: '/about-razorpay.webp',
  },
  {
    name: '10000 StartUps',
    image: '/about-10000.webp',
  },
  {
    name: 'Startup Leadership',
    image: '/about-slp.webp',
  },
]
</script>
