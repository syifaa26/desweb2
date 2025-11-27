<script setup>
import { ref } from 'vue'
import PageHeader from '../components/ui/PageHeader.vue'
import WorkoutProgramCard from '../components/ui/WorkoutProgramCard.vue'
import TipsCard from '../components/ui/TipsCard.vue'
import { Zap, Target, TrendingUp, Award } from 'lucide-vue-next'

// Workout Programs Data
const workoutPrograms = ref([
  {
    level: 'Pemula (Beginner)',
    levelNumber: 1,
    fokusUtama: 'Membangun fondasi kekuatan dasar, teknik yang benar, dan kebiasaan berolahraga',
    jenisLatihan: 'Bodyweight + Cardio Ringan',
    frekuensi: '3-4x/minggu',
    levelColor: 'teal'
  },
  {
    level: 'Menengah (Intermediate)',
    levelNumber: 2,
    fokusUtama: 'Mengembangkan kekuatan, meningkatkan daya tahan tubuh, dan variasi latihan',
    jenisLatihan: 'Strength + HIIT',
    frekuensi: '4-5x/minggu',
    levelColor: 'cyan'
  },
  {
    level: 'Lanjutan (Advanced)',
    levelNumber: 3,
    fokusUtama: 'Pembentukan massa otot, dan kompetisi tinggi intensitas',
    jenisLatihan: 'Weight Training + HIIT',
    frekuensi: '5-6x/minggu',
    levelColor: 'blue'
  }
])

// Tips Data
const levelTips = ref([
  {
    level: 'Pemula',
    icon: Target,
    title: 'Level Pemula',
    description: 'Cocok untuk yang baru memulai atau ingin kembali aktif:',
    tips: [
      'Fokus pada teknik dasar',
      'Intensitas latihan ringan',
     'Membangun habit olahraga',
      'Recovery lebih lama'
    ],
    color: 'teal'
  },
  {
    level: 'Menengah',
    icon: TrendingUp,
    title: 'Level Menengah',
    description: 'Untuk yang sudah terbiasa lebih dari 2-6 bulan dengan latihan rutin:',
    tips: [
      'Variasi latihan lebih banyak',
      'Intensitas sedang-tinggi',
      'Mulai periodisasi training',
      'Kombinasi strength dan kardio'
    ],
    color: 'cyan'
  },
  {
    level: 'Lanjutan',
    icon: Award,
    title: 'Level Lanjutan',
    description: 'Untuk yang sudah berlatih lebih dari 1 tahun secara teratur:',
    tips: [
      'Susunan antiprogram advanced',
      'Intensitas sangat tinggi',
      'Periodisasi kompleks',
      'Recovery management'
    ],
    color: 'blue'
  }
])
</script>

<template>
  <div>
    <!-- Page Header -->
    <PageHeader
      :icon="Zap"
      title="Program Latihan"
      description="Pilih kategori program latihan yang sesuai dengan level dan tujuan kebugaranmu"
    />

    <!-- Workout Programs Section -->
    <section class="py-16 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="space-y-4">
          <WorkoutProgramCard
            v-for="(program, index) in workoutPrograms"
            :key="index"
            :level="program.level"
            :level-number="program.levelNumber"
            :fokus-utama="program.fokusUtama"
            :jenis-latihan="program.jenisLatihan"
            :frekuensi="program.frekuensi"
            :level-color="program.levelColor"
          />
        </div>
      </div>
    </section>

    <!-- Tips Section -->
    <section class="py-16 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12">
          <h2 class="text-2xl md:text-3xl font-semibold mb-4">Panduan Memilih Level yang Tepat</h2>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Pilih level yang sesuai dengan kondisi dan pengalaman latihanmu
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TipsCard
            v-for="(tip, index) in levelTips"
            :key="index"
            :level="tip.level"
            :icon="tip.icon"
            :title="tip.title"
            :description="tip.description"
            :tips="tip.tips"
            :color="tip.color"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 px-4">
      <div class="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
        <h2 class="mb-4 text-2xl md:text-3xl font-semibold">Siap Memulai Program Latihan?</h2>
        <p class="mb-8 text-teal-50">
          Konsultasikan dengan trainer profesional untuk mendapatkan program yang disesuaikan dengan kondisi tubuhmu
        </p>
        <button class="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors shadow-lg font-medium">
          Konsultasi Gratis
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
