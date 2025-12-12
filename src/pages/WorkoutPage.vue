<script setup>
import { ref, computed } from 'vue'
import PageHeader from '../components/ui/PageHeader.vue'
import WorkoutProgramCard from '../components/ui/WorkoutProgramCard.vue'
import TipsCard from '../components/ui/TipsCard.vue'
import { Zap, Target, TrendingUp, Award, Dumbbell, Activity, ChevronDown, ChevronUp, ExternalLink, PlayCircle } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

// router untuk CTA navigasi ke chat
const router = useRouter()
const goToChat = () => {
  router.push({ name: 'Chat' }) 
}

// DATA LENGKAP UNTUK TABEL + KARTU 
const categories = ref([
  {
    level: 'Pemula (Beginner)',
    levelColor: 'from-teal-500 to-cyan-500',
    focus: 'Membangun dasar kekuatan, daya tahan, dan kebiasaan berolahraga',
    workoutTypes: 'Cardio ringan + Bodyweight',
    frequency: '3-4x/minggu',
    icon: Target,
    exercises: [
      {
        name: 'Walking atau Jogging Ringan',
        duration: '20-30 menit',
        description: 'Cardio ringan untuk meningkatkan daya tahan kardiovaskular'
      },
      {
        name: 'Bodyweight Squats',
        duration: '3 set x 10-15 reps',
        description: 'Melatih otot kaki dan glutes tanpa beban tambahan'
      },
      {
        name: 'Push-ups (Modified)',
        duration: '3 set x 5-10 reps',
        description: 'Melatih dada, bahu, dan triceps dengan modifikasi di lutut jika perlu'
      },
      {
        name: 'Plank',
        duration: '3 set x 20-30 detik',
        description: 'Menguatkan core dan stabilitas tubuh'
      }
    ],
    resources: [
      {
        title: 'Panduan Workout Pemula - 30 Hari',
        url: 'https://www.youtube.com/results?search_query=beginner+workout+30+days',
        type: 'video'
      },
      {
        title: 'Teknik Dasar Bodyweight Training',
        url: 'https://www.youtube.com/results?search_query=basic+bodyweight+training+technique',
        type: 'video'
      },
      {
        title: 'Program Cardio untuk Pemula',
        url: 'https://www.healthline.com/health/fitness-exercise/cardio-exercises-list',
        type: 'article'
      }
    ]
  },
  {
    level: 'Menengah (Intermediate)',
    levelColor: 'from-cyan-500 to-teal-600',
    focus: 'Meningkatkan kekuatan, membentuk otot, dan menambah intensitas latihan',
    workoutTypes: 'Strength + HIIT sedang',
    frequency: '4-5x/minggu',
    icon: Activity,
    exercises: [
      {
        name: 'HIIT Circuit Training',
        duration: '30-40 menit',
        description: 'Kombinasi latihan intensitas tinggi dengan interval istirahat singkat'
      },
      {
        name: 'Dumbbell Compound Movements',
        duration: '4 set x 8-12 reps',
        description: 'Latihan dengan dumbbell seperti goblet squats, lunges, shoulder press'
      },
      {
        name: 'Pull-ups atau Assisted Pull-ups',
        duration: '3-4 set x 6-10 reps',
        description: 'Melatih punggung dan biceps dengan body weight atau bantuan'
      },
      {
        name: 'Burpees',
        duration: '4 set x 10-15 reps',
        description: 'Full body exercise untuk kekuatan dan kardio'
      }
    ],
    resources: [
      {
        title: 'HIIT Workout 30 Menit - Level Menengah',
        url: 'https://www.youtube.com/results?search_query=intermediate+hiit+workout+30+minutes',
        type: 'video'
      },
      {
        title: 'Strength Training Program',
        url: 'https://www.youtube.com/results?search_query=intermediate+strength+training+program',
        type: 'video'
      },
      {
        title: 'Panduan Nutrisi untuk Muscle Building',
        url: 'https://www.bodybuilding.com/content/the-muscle-building-diet.html',
        type: 'article'
      }
    ]
  },
  {
    level: 'Lanjutan (Advanced)',
    levelColor: 'from-teal-600 to-cyan-700',
    focus: 'Performa, massa otot, dan ketahanan tinggi',
    workoutTypes: 'Weight training + HIIT intens',
    frequency: '5-6x/minggu',
    icon: TrendingUp,
    exercises: [
      {
        name: 'Heavy Compound Lifts',
        duration: '5 set x 3-6 reps',
        description: 'Squat, Deadlift, Bench Press dengan beban maksimal'
      },
      {
        name: 'Olympic Lifts',
        duration: '4 set x 3-5 reps',
        description: 'Clean & Jerk, Snatch untuk power dan explosiveness'
      },
      {
        name: 'Advanced HIIT Tabata',
        duration: '20-30 menit',
        description: 'High-intensity interval dengan rasio 20 detik work : 10 detik rest'
      },
      {
        name: 'Muscle Isolation Exercises',
        duration: '4 set x 10-15 reps',
        description: 'Latihan isolasi untuk hypertrophy otot spesifik'
      }
    ],
    resources: [
      {
        title: 'Advanced Strength Training Program',
        url: 'https://www.youtube.com/results?search_query=advanced+strength+training+program',
        type: 'video'
      },
      {
        title: 'Olympic Weightlifting Technique',
        url: 'https://www.youtube.com/results?search_query=olympic+weightlifting+technique',
        type: 'video'
      },
      {
        title: 'Periodization Training Guide',
        url: 'https://www.strongerbyscience.com/periodization/',
        type: 'article'
      }
    ]
  }
])

// tips section (mirip TSX bagian "Panduan Memilih Level")
const levelTips = ref([
  {
    level: 'Pemula',
    icon: Target,
    title: 'Level Pemula',
    description: 'Cocok untuk kamu yang baru memulai atau tidak aktif lebih dari 6 bulan:',
    tips: [
      'Fokus pada teknik dasar',
      'Intensitas rendah-sedang',
      'Recovery lebih lama'
    ],
    color: 'teal'
  },
  {
    level: 'Menengah',
    icon: Activity,
    title: 'Level Menengah',
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
    title: 'Level Lanjutan',
    description: 'Untuk atlet berpengalaman yang sudah latihan konsisten lebih dari 1 tahun:',
    tips: [
      'Teknik sempurna & advanced',
      'Intensitas sangat tinggi',
      'Periodisasi kompleks'
    ],
    color: 'blue'
  }
])

// state untuk expand/collapse level (desktop + mobile)
const selectedLevel = ref(null)
const toggleLevel = (index) => {
  selectedLevel.value = selectedLevel.value === index ? null : index
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header (gunakan PageHeader + icon Zap seperti TSX) -->
    <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <Zap class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-semibold mb-4">Program Latihan</h1>
        <p class="text-teal-50 max-w-2xl mx-auto">
          Pilih kategori program latihan yang sesuai dengan level dan tujuan kebugaranmu
        </p>
      </div>
    </div>

    <!-- Section kartu program sederhana (menggunakan WorkoutProgramCard seperti sebelumnya) -->
    <section class="py-12 px-4">
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

    <!-- Categories Table - Desktop (FITUR BARU) -->
    <section class="py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="bg-white rounded-xl shadow-lg overflow-hidden hidden md:block">
          <table class="w-full">
            <thead>
              <tr class="bg-gradient-to-r from-teal-50 to-cyan-50 border-b-2 border-teal-200">
                <th class="px-6 py-4 text-left text-gray-700">Level</th>
                <th class="px-6 py-4 text-left text-gray-700">Fokus Utama</th>
                <th class="px-6 py-4 text-left text-gray-700">Jenis Latihan Utama</th>
                <th class="px-6 py-4 text-left text-gray-700">Frekuensi</th>
                <th class="px-6 py-4 text-center text-gray-700">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <template v-for="(category, index) in categories" :key="index">
                <tr
                  class="border-b border-gray-200 hover:bg-gradient-to-r hover:from-teal-50/50 hover:to-cyan-50/50 transition-colors cursor-pointer"
                  @click="toggleLevel(index)"
                >
                  <td class="px-6 py-6">
                    <div class="flex items-center gap-3">
                      <div
                        class="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br"
                        :class="category.levelColor"
                      >
                        <component :is="category.icon" class="w-5 h-5 text-white" />
                      </div>
                      <span class="text-gray-800">{{ category.level }}</span>
                    </div>
                  </td>
                  <td class="px-6 py-6 text-gray-700">
                    {{ category.focus }}
                  </td>
                  <td class="px-6 py-6 text-gray-700">
                    {{ category.workoutTypes }}
                  </td>
                  <td class="px-6 py-6">
                    <span
                      class="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm"
                    >
                      {{ category.frequency }}
                    </span>
                  </td>
                  <td class="px-6 py-6 text-center">
                    <button class="text-teal-600 hover:text-teal-700 transition-colors" type="button">
                      <ChevronUp v-if="selectedLevel === index" class="w-5 h-5" />
                      <ChevronDown v-else class="w-5 h-5" />
                    </button>
                  </td>
                </tr>

                <!-- Detail Section -->
                <tr v-if="selectedLevel === index">
                  <td colspan="5" class="px-6 py-6 bg-gradient-to-br from-teal-50/30 to-cyan-50/30">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <!-- Exercise Examples -->
                      <div>
                        <h3 class="mb-4 text-gray-800 flex items-center gap-2">
                          <Dumbbell class="w-5 h-5 text-teal-600" />
                          Contoh Latihan
                        </h3>
                        <div class="space-y-3">
                          <div
                            v-for="(exercise, exIndex) in category.exercises"
                            :key="exIndex"
                            class="bg-white p-4 rounded-lg border border-teal-100 shadow-sm"
                          >
                            <div class="flex justify-between items-start mb-2">
                              <h4 class="text-gray-800">
                                {{ exercise.name }}
                              </h4>
                              <span
                                class="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full whitespace-nowrap ml-2"
                              >
                                {{ exercise.duration }}
                              </span>
                            </div>
                            <p class="text-sm text-gray-600">
                              {{ exercise.description }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <!-- Resources -->
                      <div>
                        <h3 class="mb-4 text-gray-800 flex items-center gap-2">
                          <ExternalLink class="w-5 h-5 text-teal-600" />
                          Sumber Pembelajaran
                        </h3>
                        <div class="space-y-3">
                          <a
                            v-for="(resource, resIndex) in category.resources"
                            :key="resIndex"
                            :href="resource.url"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="block bg-white p-4 rounded-lg border border-cyan-100 shadow-sm hover:shadow-md hover:border-cyan-300 transition-all group"
                          >
                            <div class="flex items-start gap-3">
                              <div class="flex-shrink-0">
                                <PlayCircle
                                  v-if="resource.type === 'video'"
                                  class="w-5 h-5 text-cyan-600"
                                />
                                <ExternalLink
                                  v-else
                                  class="w-5 h-5 text-cyan-600"
                                />
                              </div>
                              <div class="flex-1">
                                <h4 class="text-gray-800 group-hover:text-teal-600 transition-colors">
                                  {{ resource.title }}
                                </h4>
                                <p class="text-xs text-gray-500 mt-1 capitalize">
                                  <span v-if="resource.type === 'video'">🎥 Video Tutorial</span>
                                  <span v-else>📄 Artikel</span>
                                </p>
                              </div>
                              <ExternalLink
                                class="w-4 h-4 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0"
                              />
                            </div>
                          </a>
                        </div>

                        <div class="mt-4 p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
                          <p class="text-sm text-gray-700">
                            💡 <span class="font-medium">Tips:</span> Konsultasikan dengan pelatih profesional sebelum
                            memulai program latihan baru, terutama jika kamu memiliki kondisi kesehatan tertentu.
                          </p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>

        <!-- Categories Cards - Mobile (FITUR BARU) -->
        <div class="md:hidden space-y-4">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="bg-white rounded-xl shadow-md overflow-hidden border-l-4 border-teal-500"
          >
            <div class="p-6">
              <div class="flex items-center gap-3 mb-4">
                <div
                  class="w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br"
                  :class="category.levelColor"
                >
                  <component :is="category.icon" class="w-6 h-6 text-white" />
                </div>
                <h3 class="text-gray-800 flex-1">
                  {{ category.level }}
                </h3>
              </div>

              <div class="space-y-3 mb-4">
                <div>
                  <p class="text-sm text-gray-500 mb-1">Fokus Utama</p>
                  <p class="text-gray-700">
                    {{ category.focus }}
                  </p>
                </div>

                <div>
                  <p class="text-sm text-gray-500 mb-1">Jenis Latihan Utama</p>
                  <p class="text-gray-700">
                    {{ category.workoutTypes }}
                  </p>
                </div>

                <div>
                  <p class="text-sm text-gray-500 mb-1">Frekuensi</p>
                  <span
                    class="inline-block px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-700 rounded-full text-sm"
                  >
                    {{ category.frequency }}
                  </span>
                </div>
              </div>

              <button
                type="button"
                @click="toggleLevel(index)"
                class="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <template v-if="selectedLevel === index">
                  <span>Tutup Detail</span>
                  <ChevronUp class="w-5 h-5" />
                </template>
                <template v-else>
                  <span>Lihat Detail Latihan</span>
                  <ChevronDown class="w-5 h-5" />
                </template>
              </button>
            </div>

            <!-- Detail Section - Mobile -->
            <div
              v-if="selectedLevel === index"
              class="px-6 pb-6 pt-2 bg-gradient-to-br from-teal-50/30 to-cyan-50/30 border-t border-teal-100"
            >
              <!-- Exercise Examples -->
              <div class="mb-6">
                <h3 class="mb-3 text-gray-800 flex items-center gap-2">
                  <Dumbbell class="w-5 h-5 text-teal-600" />
                  Contoh Latihan
                </h3>
                <div class="space-y-3">
                  <div
                    v-for="(exercise, exIndex) in category.exercises"
                    :key="exIndex"
                    class="bg-white p-4 rounded-lg border border-teal-100 shadow-sm"
                  >
                    <div class="mb-2">
                      <h4 class="text-gray-800 mb-1">
                        {{ exercise.name }}
                      </h4>
                      <span class="text-xs bg-teal-100 text-teal-700 px-2 py-1 rounded-full">
                        {{ exercise.duration }}
                      </span>
                    </div>
                    <p class="text-sm text-gray-600">
                      {{ exercise.description }}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Resources -->
              <div>
                <h3 class="mb-3 text-gray-800 flex items-center gap-2">
                  <ExternalLink class="w-5 h-5 text-teal-600" />
                  Sumber Pembelajaran
                </h3>
                <div class="space-y-3">
                  <a
                    v-for="(resource, resIndex) in category.resources"
                    :key="resIndex"
                    :href="resource.url"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="block bg-white p-4 rounded-lg border border-cyan-100 shadow-sm active:shadow-md active:border-cyan-300 transition-all"
                  >
                    <div class="flex items-start gap-3">
                      <div class="flex-shrink-0">
                        <PlayCircle
                          v-if="resource.type === 'video'"
                          class="w-5 h-5 text-cyan-600"
                        />
                        <ExternalLink
                          v-else
                          class="w-5 h-5 text-cyan-600"
                        />
                      </div>
                      <div class="flex-1">
                        <h4 class="text-gray-800">
                          {{ resource.title }}
                        </h4>
                        <p class="text-xs text-gray-500 mt-1 capitalize">
                          <span v-if="resource.type === 'video'">🎥 Video Tutorial</span>
                          <span v-else>📄 Artikel</span>
                        </p>
                      </div>
                      <ExternalLink class="w-4 h-4 text-gray-400 flex-shrink-0" />
                    </div>
                  </a>
                </div>

                <div class="mt-4 p-4 bg-cyan-50 border border-cyan-100 rounded-lg">
                  <p class="text-sm text-gray-700">
                    💡 <span class="font-medium">Tips:</span> Konsultasikan dengan pelatih profesional sebelum memulai
                    program latihan baru.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Info Section / Tips (pakai TipsCard) -->
    <section class="py-12 px-4 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-10">
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

    <!-- CTA Section (navigasi ke chat seperti TSX onNavigate('chat')) -->
    <section class="py-12 px-4 bg-gradient-to-br from-teal-50 to-cyan-50">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="mb-4 text-gray-800 text-2xl md:text-3xl font-semibold">Siap Memulai Program Latihan?</h2>
        <p class="text-gray-600 mb-8 max-w-2xl mx-auto">
          Konsultasikan dengan trainer profesional untuk mendapatkan program yang disesuaikan dengan kondisi tubuhmu
        </p>
        <button
          type="button"
          @click="goToChat"
          class="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
        >
          Konsultasi Sekarang
        </button>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
