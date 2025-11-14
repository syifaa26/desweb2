<script setup>
import Hero from './ui/Hero.vue'
import FeatureCard from './ui/FeatureCard.vue'
import { Zap, Apple, LineChart, Calculator, MessageCircle } from 'lucide-vue-next'

const props = defineProps({
  onNavigate: { type: Function, default: null },
  onOpenBMI: { type: Function, default: null },
})

const emit = defineEmits(['navigate', 'openBMI'])

const navigate = (page) => {
  if (props.onNavigate) props.onNavigate(page)
  emit('navigate', page)
}

const openBMI = () => {
  if (props.onOpenBMI) props.onOpenBMI()
  emit('openBMI')
}
</script>

<template>
  <div>
    <Hero @navigate="navigate" />

    <!-- Features Section -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="mb-4 text-2xl md:text-3xl font-semibold">Kenapa Memilih FitLife?</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan panduan lengkap untuk membantu Anda mencapai gaya hidup sehat
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard :icon="Zap" title="Program Latihan" description="Program latihan terstruktur untuk berbagai level kebugaran" />
          <FeatureCard :icon="Apple" title="Panduan Nutrisi" description="Rekomendasi makanan sehat dan tips nutrisi harian" />
          <FeatureCard :icon="LineChart" title="Tracker Progres" description="Pantau perkembangan dan capai target kesehatanmu" />
          <FeatureCard :icon="MessageCircle" title="Konsultasi Gratis" description="Konsultasi gratis dengan trainer profesional berpengalaman" />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
        <Calculator class="w-16 h-16 mx-auto mb-4" />
        <h2 class="mb-4 text-2xl md:text-3xl font-semibold">Cek BMI Anda Sekarang</h2>
        <p class="mb-6 text-teal-50">
          Ketahui indeks massa tubuh Anda dan mulai perjalanan menuju hidup lebih sehat
        </p>
        <button
          @click="openBMI"
          class="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors shadow-lg"
        >
          Hitung BMI
        </button>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div class="text-4xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">30+</div>
            <p class="text-gray-600">Program Latihan</p>
          </div>
          <div>
            <div class="text-4xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">50+</div>
            <p class="text-gray-600">Resep Sehat</p>
          </div>
          <div>
            <div class="text-4xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">500+</div>
            <p class="text-gray-600">Kalori per Sesi</p>
          </div>
          <div>
            <div class="text-4xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-2">80%</div>
            <p class="text-gray-600">Mencapai Target</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
</template>

<style scoped>
</style>
