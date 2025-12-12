
<script setup>
import ImageWithFallback from '../components/ui/ImageWithFallback.vue';
import { ref } from 'vue'
import TipsCard from '../components/ui/TipsCard.vue'
import { Zap, Target, TrendingUp, Activity} from 'lucide-vue-next'

const levelTips = ref([
  {
    level: 'Pemula',
    icon: Target,
    title: 'skill 1',
    description: 'saya bisa memasak:',
    tips: [
      'memasak makanan dengan cepat',
      'menentukan menu makanan',
      'segala menu masakan'
    ],
    color: 'teal'
  },
  {
    level: 'Menengah',
    icon: Activity,
    title: 'skill 2',
    description: 'Untuk kamu yang sudah rutin latihan 3-6 bulan dengan teknik baik:',
    tips: [
      'Variasi latihan lebih banyak',
      'Intensitas sedang-tinggi',
      'Mulai periodisasi training'
    ],
    color: 'cyan'
  },
  {
    level: 'Lanjutan',
    icon: TrendingUp,
    title: 'skill 3',
    description: 'Untuk atlet berpengalaman yang sudah latihan konsisten lebih dari 1 tahun:',
    tips: [
      'Teknik sempurna & advanced',
      'Intensitas sangat tinggi',
      'Periodisasi kompleks'
    ],
    color: 'blue'
  }
])

</script>


<template>
  <div class="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <LineChart class="w-16 h-16 mx-auto mb-4" />
      </div>
    </div>
    <div class="min-h-screen bg-background">
    <section class="container mx-auto px-4 py-10 sm:py-16 md:py-24">
    <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
    <div class="space-y-4 sm:space-y-6">
        <h1 class="text-8xl sm:text-6xl md:text-6xl lg:text-6xl font-bold text-foreground leading-tight text-center">
        Nurul Assyifah
        </h1>
        <h2 class="text-muted-foreground text-base sm:text-lg font-bold leading-relaxed text-center">
        11231075 - Informatika - Institut Teknologi Kalimantan
        </h2>
         <p class="text-muted-foreground text-base sm:text-lg leading-relaxed text-center">
        saya merupakan mahasiswa di institut teknologi kalimantan, saat ini saya sedang menjalani semester 5, bertempat tinggal di karang joang, Balikpapan Utara, Kalimantan Timur 

        </p>
        <div class="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4">
        </div>
    </div>
    <div class="relative order-first md:order-last ">
        <div class="absolute -inset-4 bg-linear-to-tr from-primary/20 via-chart-2/20 to-transparent rounded-3xl blur-2xl" />
        <div class="relative">
        <ImageWithFallback
            src="https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDQxOTk3MHww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="tracker"
            class="w-full h-auto rounded-2xl shadow-2xl border border-border/50"/>
        </div>
      </div>
    </div>
    </section>

    <section class="py-12 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10">
          <h2 class="text-2xl md:text-3xl font-semibold mb-4">skill yang saya miliki</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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