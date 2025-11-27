<script setup>
import { ChevronRight } from 'lucide-vue-next'

const props = defineProps({
  level: { type: String, required: true }, // Pemula, Menengah, Lanjutan
  levelNumber: { type: Number, required: true }, // 1, 2, 3
  fokusUtama: { type: String, required: true },
  jenisLatihan: { type: String, required: true },
  frekuensi: { type: String, required: true },
  levelColor: { type: String, default: 'teal' }
})

const levelColors = {
  teal: 'bg-teal-600',
  cyan: 'bg-cyan-600',
  blue: 'bg-blue-600'
}

const getLevelColor = () => {
  return levelColors[props.levelColor] || levelColors.teal
}
</script>

<template>
  <div class="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow p-6">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
      <!-- Level Badge -->
      <div class="md:col-span-2">
        <div :class="['w-12 h-12 rounded-lg flex items-center justify-center text-white font-bold text-xl', getLevelColor()]">
          {{ levelNumber }}
        </div>
        <p class="mt-2 font-semibold text-gray-800">{{ level }}</p>
      </div>

      <!-- Fokus Utama -->
      <div class="md:col-span-4">
        <p class="text-sm text-gray-500 mb-1">Fokus Utama</p>
        <p class="text-gray-800">{{ fokusUtama }}</p>
      </div>

      <!-- Jenis Latihan -->
      <div class="md:col-span-2">
        <p class="text-sm text-gray-500 mb-1">Jenis Latihan Utama</p>
        <p class="text-gray-800">{{ jenisLatihan }}</p>
      </div>

      <!-- Frekuensi -->
      <div class="md:col-span-2">
        <p class="text-sm text-gray-500 mb-1">Frekuensi</p>
        <p class="text-gray-800">{{ frekuensi }}</p>
      </div>

      <!-- Action Button -->
      <div class="md:col-span-2 flex justify-end">
        <button class="px-4 py-2 bg-teal-100 text-teal-600 rounded-lg hover:bg-teal-200 transition-colors flex items-center gap-2 font-medium">
          Selengkapnya
          <ChevronRight class="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
