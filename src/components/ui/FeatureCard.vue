<script setup>
import { computed } from 'vue'

const props = defineProps({
  // Pass a Vue component (e.g., from lucide-vue-next)
  icon: { type: [Object, Function], required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  color: { type: String, default: 'teal' },
})

const colorClasses = computed(() => {
  const map = {
    teal: { bg: 'bg-teal-100', text: 'text-teal-600' },
    cyan: { bg: 'bg-cyan-100', text: 'text-cyan-600' },
    blue: { bg: 'bg-blue-100', text: 'text-blue-600' },
    emerald: { bg: 'bg-emerald-100', text: 'text-emerald-600' },
    purple: { bg: 'bg-purple-100', text: 'text-purple-600' },
    pink: { bg: 'bg-pink-100', text: 'text-pink-600' },
    orange: { bg: 'bg-orange-100', text: 'text-orange-600' },
    red: { bg: 'bg-red-100', text: 'text-red-600' },
    gray: { bg: 'bg-gray-100', text: 'text-gray-600' },
  }
  return map[props.color] ?? map.teal
})
</script>

<template>
  <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
    <div :class="['w-12 h-12 rounded-lg flex items-center justify-center mb-4', colorClasses.bg]">
      <component :is="icon" :class="['w-6 h-6', colorClasses.text]" />
    </div>
    <h3 class="mb-2">{{ title }}</h3>
    <p class="text-gray-600">{{ description }}</p>
  </div>
</template>

<style scoped>
</style>
