
<script setup>
import ImageWithFallback from '../components/ui/ImageWithFallback.vue';
import { ref } from 'vue'
import TipsCard from '../components/ui/TipsCard.vue'
import { Zap, Target, TrendingUp, Activity} from 'lucide-vue-next'
import profilImage from '../assets/profil.jpg'

const levelTips = ref([
  {
    level: 'Pemula',
    icon: Target,
    title: 'skill',
    color: 'teal'
  },
  {
    level: 'Menengah',
    icon: Activity,
    title: 'skill',
    color: 'cyan'
  },
  {
    level: 'Lanjutan',
    icon: TrendingUp,
    title: 'skill ',
    color: 'blue'
  }
])

</script>


<template>
  <div class="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-12 sm:py-14 md:py-16 px-4 relative overflow-hidden">
      <!-- Decorative circles -->
      <div class="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      <div class="absolute bottom-10 right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
      <div class="absolute top-1/2 right-1/4 w-24 h-24 bg-cyan-400/20 rounded-full blur-lg"></div>
      
      <div class="max-w-7xl mx-auto text-center relative z-10">

      </div>
    </div>
    <div class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div class="space-y-4 sm:space-y-6">
        <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-center md:text-left">
        Nurul Assyifah
        </h1>
        <h2 class="text-muted-foreground text-sm sm:text-base md:text-lg font-bold leading-relaxed text-center md:text-left">
        11231075 - Informatika - Institut Teknologi Kalimantan
        </h2>
         <p class="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
        Saya merupakan mahasiswa semester 5 Program Studi Informatika, Institut Teknologi Kalimantan. Website FitLife ini dibangun sebagai bagian dari pemenuhan tugas mata kuliah Desain Web, dengan tujuan untuk mengimplementasikan konsep perancangan antarmuka dan pengalaman pengguna (UI/UX) yang baik. Melalui website ini, saya mengaplikasikan penggunaan teknologi web modern serta prinsip desain responsif agar tampilan dapat diakses dengan optimal pada berbagai perangkat. Selain itu, pengembangan website ini diharapkan dapat menjadi sarana pembelajaran dalam mengintegrasikan aspek fungsionalitas, estetika, dan kenyamanan pengguna dalam sebuah produk digital.
        </p>
        <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
        </div>
    </div>
    <div class="relative hidden md:block">
        <div class="absolute -inset-4 bg-linear-to-tr from-primary/20 via-chart-2/20 to-transparent rounded-3xl blur-2xl" />
        <div class="relative w-full max-w-md mx-auto">
        <ImageWithFallback
            :src="profilImage"
            alt="Nurul Assyifah"
            class="w-full h-80 object-cover rounded-2xl shadow-2xl border border-border/50"/>
        </div>
      </div>
    </div>
    </section>

    <section class="py-8 sm:py-12 md:py-16 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-8 sm:mb-10">
          <h2 class="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">Skill</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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

    
    </div>
</template>