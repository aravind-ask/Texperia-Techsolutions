<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="text-center">
        <h2 class="text-3xl md:text-5xl font-bold text-[#07003B] mb-4 texperia-underline">Supported By</h2>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div v-for="logo in supporterLogos" :key="logo.name" class="aspect-square p-4">
          <img :src="logo.image" :alt="logo.name" class="w-full h-full object-contain" />
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
