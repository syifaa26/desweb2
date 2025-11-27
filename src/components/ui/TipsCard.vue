<script setup>
import { computed } from 'vue'

const props = defineProps({
  level: { type: String, required: true }, // Pemula, Menengah, Lanjutan
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  tips: { type: Array, required: true }, // Array of tip strings
  color: { type: String, default: 'teal' }
})

const colorClasses = computed(() => {
  const map = {
    teal: { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-200' },
    cyan: { bg: 'bg-cyan-100', icon: 'text-cyan-600', border: 'border-cyan-200' },
    blue: { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-200' }
  }
  return map[props.color] || map.teal
})
</script>

<template>
  <div :class="['bg-white rounded-xl border-2 p-6 hover:shadow-lg transition-shadow', colorClasses.border]">
    <!-- Icon -->
    <div :class="['w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto', colorClasses.bg]">
      <component :is="icon" :class="['w-8 h-8', colorClasses.icon]" />
    </div>

    <!-- Title -->
    <h3 class="text-xl font-semibold text-center mb-2">{{ title }}</h3>

    <!-- Description -->
    <p class="text-gray-600 text-center mb-4">{{ description }}</p>

    <!-- Tips List -->
    <ul class="space-y-2">
      <li v-for="(tip, index) in tips" :key="index" class="flex items-start gap-2 text-sm text-gray-700">
        <span class="text-teal-600 mt-1">•</span>
        <span>{{ tip }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
