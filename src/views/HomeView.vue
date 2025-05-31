<template>
  <div>
    <!-- Hero Banner -->
    <section
      class="relative h-[100vh] min-h-[600px] bg-cover bg-center bg-no-repeat"
      style="background-image: url('/home-banner.webp')"
    >
      <div class="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-primary-800/90"></div>
      <!-- <div class="container mx-auto px-4 h-full flex items-center relative z-10">
        <div class="max-w-2xl text-white">
          <h1 class="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Transforming Digital Engagement
          </h1>
          <p class="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Creating cutting-edge digital experiences that connect businesses with their audience
          </p>
          <router-link
            to="/contact"
            class="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors animate-fade-in-delay-2"
          >
            Get Started
          </router-link>
        </div>
      </div> -->
    </section>

    <!-- Intro Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto text-center">
          <p class="text-lg md:text-xl text-gray-700 leading-relaxed">
            Texperia is dedicated to creating cutting-edge digital engagement and experiential
            products that transform how businesses connect with audiences. With a focus on
            innovation and impact, we bridge the gap between technology and meaningful engagement.
          </p>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
          At the core of Texperia lies two things:
        </h2>
        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="text-primary-600 text-4xl font-bold mb-4">1</div>
            <p class="text-gray-700">
              Understanding the employee journey from recruitment to retirement, we identify key
              moments that matter and create meaningful experiences.
            </p>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div class="text-primary-600 text-4xl font-bold mb-4">2</div>
            <p class="text-gray-700">
              Leveraging the best in interactive and immersive technologies to create consumer grade
              digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Vision Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-8">Company Vision</h2>
          <p class="text-lg text-gray-700 leading-relaxed">
            At Texperia, we believe in a future where digital experiences foster stronger, lasting
            connections. Founded with the vision of transforming traditional engagement into
            interactive, enjoyable experiences, we specialize in creating platforms that keep
            audiences actively involved. From gamified solutions to immersive engagement tools,
            we're pushing boundaries to redefine digital interaction.
          </p>
        </div>
      </div>
    </section>

    <!-- Supported By Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Supported By</h2>
        <div class="flex justify-between mx-50 items-center">
          <div
            v-for="(logo, index) in supporterLogos"
            :key="logo.name"
            class="supporter-logo-container w-35"
            :style="{ '--delay': `${index * 0.2}s` }"
          >
            <div class="supporter-logo">
              <img
                :src="logo.image"
                :alt="logo.name"
                class="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12">Meet the Team</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div v-for="member in teamMembers" :key="member.name" class="text-center">
            <div
              class="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden"
            >
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ member.name }}</h3>
            <p class="text-gray-600 mb-4">{{ member.role }}</p>
            <a
              :href="member.linkedin"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-block text-primary-600 hover:text-primary-700 transition-colors"
            >
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

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

const teamMembers = [
  {
    name: 'Anirudh Goutham',
    role: 'Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/anirudh-goutham',
    photo: '/about-anirudh-goutham.webp',
  },
  {
    name: 'Giridhar J',
    role: 'Founder & COO',
    linkedin: 'https://www.linkedin.com/in/giridhar-jayakumar',
    photo: '/about-giridhar-j.webp',
  },
  {
    name: 'Rohit Iyer',
    role: 'CoFounder & CTO',
    linkedin: 'https://www.linkedin.com/in/iyerrohit',
    photo: '/about-rohit-iyer.webp',
  },
]

useHead({
  title: 'Texperia Techsolutions - Digital Engagement & Experiential Products',
  meta: [
    {
      name: 'description',
      content:
        'Texperia creates cutting-edge digital engagement and experiential products that transform how businesses connect with audiences.',
    },
  ],
})
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s both;
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
