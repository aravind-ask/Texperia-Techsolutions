<template>
  <section class="py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
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
        <h2 class="text-3xl md:text-5xl font-bold text-[#07003B] mb-10 texperia-underline">Our Prestigious Product</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the future of digital engagement with our flagship product
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <div class="flex items-center justify-center md:justify-start space-x-4">
            <img
              src="/playda-tagline-logo-dark.webp"
              alt="Playda Logo"
              class="h-20 w-auto filter drop-shadow-[0_0_15px_rgba(255,202,11,0.3)] hover:drop-shadow-[0_0_20px_rgba(255,202,11,0.5)] transition-all duration-300 transform hover:scale-105"
            />
          </div>
          <p class="text-lg text-gray-600 leading-relaxed text-center md:text-left">
            Transform your business with our cutting-edge digital engagement platform. Playda
            combines innovative technology with seamless user experience to create unforgettable
            digital interactions.
          </p>
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <svg
                class="h-6 w-6 text-[#F53028]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-700">Advanced Analytics & Insights</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="h-6 w-6 text-[#F53028]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-700">Real-time Engagement Tools</span>
            </div>
            <div class="flex items-center space-x-3">
              <svg
                class="h-6 w-6 text-[#F53028]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span class="text-gray-700">Seamless Integration Capabilities</span>
            </div>
          </div>
          <div class="flex justify-center md:justify-start">
            <router-link
              to="/product"
              class="inline-block bg-[#FFCA0B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#FFCA0B] transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore More
            </router-link>
          </div>
        </div>
        <div class="relative">
          <div
            class="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl transform rotate-3"
          ></div>
          <img
            src="/playda.webp"
            alt="Playda Platform"
            class="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Component logic can be added here if needed
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
