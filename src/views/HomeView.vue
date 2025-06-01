<template>
  <div>
    <HeroBanner />
    <IntroSection />
    <CoreValues />
    <CompanyVision />
    <SupportedBy />
    <TeamSection />
    <PrestigiousProduct />
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import HeroBanner from '@/components/home/HeroBanner.vue'
import IntroSection from '@/components/home/IntroSection.vue'
import CoreValues from '@/components/home/CoreValues.vue'
import CompanyVision from '@/components/home/CompanyVision.vue'
import SupportedBy from '@/components/home/SupportedBy.vue'
import TeamSection from '@/components/home/TeamSection.vue'
import PrestigiousProduct from '@/components/home/PrestigiousProduct.vue'

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
