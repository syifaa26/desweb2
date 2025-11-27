<script setup>
import { computed } from 'vue'

const props = defineProps({
  icon: { type: [Object, Function], required: false, default: null },
  title: { type: String, required: true },
  description: { type: String, required: false, default: '' },
  bgGradient: { 
    type: String, 
    default: 'from-teal-600 via-teal-500 to-cyan-600' 
  }
})

const gradientClass = computed(() => `bg-gradient-to-br ${props.bgGradient}`)
</script>

<template>
  <section :class="[gradientClass, 'relative py-20 px-4 text-white overflow-hidden']">
    <!-- Wave Pattern Background -->
    <div class="absolute inset-0 opacity-10">
      <svg class="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path 
          fill="currentColor" 
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>

    <div class="max-w-7xl mx-auto text-center relative z-10">
      <component 
        v-if="icon" 
        :is="icon" 
        class="w-16 h-16 mx-auto mb-4"
      />
      <h1 class="text-3xl md:text-4xl font-bold mb-4">{{ title }}</h1>
      <p v-if="description" class="text-teal-50 text-lg max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>
  </section>
</template>

<style scoped>
</style>
