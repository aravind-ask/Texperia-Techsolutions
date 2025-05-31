<template>
  <div>
    <!-- Hero Section -->
    <section class="relative py-20 bg-gradient-to-r from-primary-600 to-primary-800">
      <div class="container mx-auto px-4">
        <div
          class="max-w-3xl mx-auto text-center text-black flex flex-col items-center justify-center"
        >
          <img
            src="/playda-tagline-logo-dark.webp"
            alt="Playda-logo"
            class="w-40 animate-fade-in mb-5"
          />
          <p class="text-xl md:text-2xl mb-8 animate-fade-in-delay">
            Elevating engagement through gamification.
          </p>
        </div>
      </div>
    </section>

    <!-- Product Preview Section -->
    <section class="py-12 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <!-- Desktop Monitor (hidden on mobile and tablet) -->
          <div class="monitor-frame group hidden lg:block">
            <div class="monitor-screen">
              <iframe
                src="https://playda.io/"
                class="w-full h-full border-0 pointer-events-none"
                title="Texperia Live Preview"
                loading="lazy"
                width="960"
                height="540"
              ></iframe>
              <div class="monitor-overlay">
                <a
                  href="https://playda.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="explore-button"
                >
                  Explore Playda
                </a>
              </div>
            </div>
          </div>

          <!-- Tablet Frame (hidden on mobile and desktop) -->
          <div class="tablet-frame group hidden md:block lg:hidden">
            <div class="tablet-screen">
              <iframe
                src="https://playda.io/"
                class="w-full h-full border-0 pointer-events-none"
                title="Texperia Live Preview"
                loading="lazy"
                width="768"
                height="576"
              ></iframe>
              <div class="monitor-overlay">
                <a
                  href="https://playda.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="explore-button"
                >
                  Explore Playda
                </a>
              </div>
            </div>
          </div>

          <!-- Mobile Frame (hidden on tablet and desktop) -->
          <div class="mobile-frame group block md:hidden">
            <div class="mobile-screen">
              <iframe
                src="https://playda.io/"
                class="w-full h-full border-0 pointer-events-none"
                title="Texperia Live Preview"
                loading="lazy"
                width="320"
                height="568"
              ></iframe>
              <div class="monitor-overlay">
                <a
                  href="https://playda.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="explore-button"
                >
                  Explore Playda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Description -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          <div class="prose prose-lg mx-auto">
            <p class="text-gray-700 leading-relaxed mb-8">
              Playda is our flagship product designed to elevate engagement through gamification.
              Whether for customer loyalty, employee engagement, or real-time interactions, Playda
              offers customizable solutions that turn ordinary moments into interactive experiences.
            </p>

            <div class="bg-gray-50 p-8 rounded-xl mb-8">
              <h2 class="text-2xl font-bold mb-4">Key Features</h2>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable gamification solutions for any use case</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Real-time engagement tracking and analytics</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Seamless integration with existing platforms</span>
                </li>
                <li class="flex items-start">
                  <svg
                    class="w-6 h-6 text-primary-600 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Mobile-first design for maximum accessibility</span>
                </li>
              </ul>
            </div>

            <div class="text-center">
              <a
                href="https://playda.io"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Learn more at Playda.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: "Playda - Texperia's Flagship Product",
  meta: [
    {
      name: 'description',
      content:
        'Playda is our flagship product designed to elevate engagement through gamification for customer loyalty and employee engagement.',
    },
  ],
})
</script>

<style scoped>
/* Desktop Monitor Styles */
.monitor-frame {
  background: #2d3748;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.monitor-frame:hover {
  transform: scale(1);
}

.monitor-frame::before {
  content: '';
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 20px;
  background: #1a202c;
  border-radius: 0 0 10px 10px;
}

.monitor-frame::after {
  content: '';
  position: absolute;
  bottom: -40px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 10px;
  background: #2d3748;
  border-radius: 0 0 5px 5px;
}

.monitor-screen {
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16/9;
  position: relative;
}

.monitor-screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: #1a202c;
  border-radius: 10px 10px 0 0;
  z-index: 1;
}

.monitor-screen::after {
  content: '';
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 10px;
  height: 10px;
  background: #4a5568;
  border-radius: 50%;
  z-index: 2;
}

/* Tablet Frame Styles */
.tablet-frame {
  background: #2d3748;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  max-width: 768px;
  margin: 0 auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.tablet-frame:hover {
  transform: scale(1);
}

.tablet-screen {
  background: #000;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 4/3;
  position: relative;
}

.tablet-screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 6px;
  background: #4a5568;
  border-radius: 0 0 3px 3px;
  z-index: 2;
}

/* Mobile Frame Styles */
.mobile-frame {
  background: #2d3748;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  position: relative;
  max-width: 320px;
  margin: 0 auto;
  transform: scale(0.95);
  transition: transform 0.3s ease;
}

.mobile-frame:hover {
  transform: scale(1);
}

.mobile-screen {
  background: #000;
  border-radius: 20px;
  overflow: hidden;
  aspect-ratio: 9/16;
  position: relative;
}

.mobile-screen::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 20px;
  background: #1a202c;
  border-radius: 0 0 10px 10px;
  z-index: 2;
}

.mobile-screen::after {
  content: '';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  background: #1a202c;
  border: 2px solid #4a5568;
  border-radius: 50%;
  z-index: 2;
}

/* Common Overlay Styles */
.monitor-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.group:hover .monitor-overlay {
  opacity: 1;
}

.explore-button {
  background: rgba(255, 255, 255, 0.9);
  color: #1a202c;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.explore-button:hover {
  background: white;
  transform: scale(1.05);
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
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
