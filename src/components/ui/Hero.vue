<script setup>
import { ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import ImageWithFallback from './ImageWithFallback.vue'

const router = useRouter()

const goToWorkout = () => {
  router.push('/workout')
}
</script>

<template>
  <div class="relative h-[500px] md:h-[600px] overflow-hidden">
    <ImageWithFallback
      src="https://images.unsplash.com/photo-1756115484694-009466dbaa67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29ya291dCUyMGd5bXxlbnwxfHx8fDE3NjAzNDcwOTF8MA&ixlib=rb-4.1.0&q=80&w=1080"
      alt="Fitness Hero"
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black/50" />

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center text-white px-4 max-w-3xl">
        <h1 class="text-4xl md:text-6xl mb-4">Mulai Hidup Sehat Hari Ini</h1>
        <p class="text-lg md:text-xl mb-8 text-gray-200">
          Panduan lengkap olahraga dan gaya hidup sehat untuk mencapai tubuh impianmu
        </p>
        <button
          @click="goToWorkout"
          class="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg inline-flex items-center gap-2 transition-all"
        >
          Mulai Sekarang
          <ArrowRight class="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
