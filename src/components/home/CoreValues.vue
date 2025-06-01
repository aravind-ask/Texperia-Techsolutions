<template>
  <section class="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        class="absolute -top-24 -right-24 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"
      ></div>
      <div
        class="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-100 rounded-full opacity-20 blur-3xl"
      ></div>
    </div>

    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold text-[#07003B] mb-4 texperia-underline">
          At the core of Texperia lies two things:
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- First Core Value -->
        <div
          class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 p-5 bg-[#F53028] rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300"
            >
              1
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Employee Journey Excellence</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Understanding the employee journey from recruitment to retirement, we identify key
            moments that matter and create meaningful experiences.
          </p>
        </div>

        <!-- Second Core Value -->
        <div
          class="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
        >
          <div class="flex items-center gap-4 mb-6">
            <div
              class="w-12 h-12 bg-[#F53028] rounded-full flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300"
            >
              2
            </div>
            <h3 class="text-xl font-semibold text-gray-900">Innovative Technology</h3>
          </div>
          <p class="text-gray-600 leading-relaxed">
            Leveraging the best in interactive and immersive technologies to create consumer grade
            digital experiences.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.v-motion {
  will-change: transform, opacity;
}
</style>
