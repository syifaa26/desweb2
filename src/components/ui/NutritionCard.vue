<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, required: true },
  badge: { type: String, required: true },
  badgeColor: { type: String, default: 'teal' },
  nutritionItems: { 
    type: Array, 
    required: true,
    // Array of { icon: Component, label: String, value: String }
  }
})

const badgeColorClass = computed(() => {
  const map = {
    teal: 'bg-teal-100 text-teal-600',
    cyan: 'bg-cyan-100 text-cyan-600',
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
  }
  return map[props.badgeColor] ?? map.teal
})
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all overflow-hidden">
    <div class="p-6">
      <!-- Header with Badge -->
      <div class="flex items-start justify-between mb-4">
        <h3 class="text-lg font-semibold text-gray-800 flex-1">{{ title }}</h3>
        <span 
          :class="['px-3 py-1 rounded-full text-sm font-medium ml-2', badgeColorClass]"
        >
          {{ badge }}
        </span>
      </div>

      <!-- Nutrition Items -->
      <div class="space-y-3">
        <div 
          v-for="(item, index) in nutritionItems" 
          :key="index"
          class="flex items-center gap-3 text-gray-600"
        >
          <component 
            :is="item.icon" 
            class="w-5 h-5 text-gray-400"
          />
          <span class="text-sm">{{ item.label }}</span>
          <span class="ml-auto text-sm font-medium text-gray-800">{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
