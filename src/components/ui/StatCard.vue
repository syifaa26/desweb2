<script setup>
import { computed } from 'vue'

const props = defineProps({
  value: { type: [String, Number], required: true },
  label: { type: String, required: true },
  suffix: { type: String, default: '' },
  color: { type: String, default: 'teal' }
})

const colorClasses = computed(() => {
  const map = {
    teal: 'from-teal-600 to-cyan-600',
    blue: 'from-blue-600 to-cyan-600',
    orange: 'from-orange-600 to-red-600',
    purple: 'from-purple-600 to-pink-600',
    green: 'from-green-600 to-emerald-600',
  }
  return map[props.color] ?? map.teal
})

const displayValue = computed(() => {
  return props.suffix ? `${props.value}${props.suffix}` : props.value
})
</script>

<template>
  <div class="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <div 
      :class="['text-4xl font-bold mb-2 bg-gradient-to-r bg-clip-text text-transparent', colorClasses]"
    >
      {{ displayValue }}
    </div>
    <p class="text-gray-600 text-sm">{{ label }}</p>
  </div>
</template>

<style scoped>
</style>
