<template>
  <section class="py-20 bg-white">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">Meet the Team</h2>
      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div v-for="member in teamMembers" :key="member.name" class="text-center">
          <div class="relative w-48 h-48 mx-auto mb-4 rounded-lg overflow-hidden">
            <img
              :src="member.photo"
              :alt="member.name"
              class="w-full h-full object-cover"
              loading="lazy"
              width="192"
              height="192"
            />
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
</template>

<script setup lang="ts">
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
</script>
