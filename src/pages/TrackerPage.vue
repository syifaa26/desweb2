<script setup>
import { ref, computed } from 'vue'
import { LineChart, Calendar, Plus, Scale, FileText } from 'lucide-vue-next'

// Progress entries data
const entries = ref([])

// Form state
const formData = ref({
  date: new Date().toISOString().split('T')[0],
  weight: '',
  notes: ''
})

// Computed stats
const latestWeight = computed(() => {
  if (entries.value.length === 0) return 0
  return entries.value[0].weight
})

const weightChange = computed(() => {
  if (entries.value.length < 2) return 0
  return (entries.value[entries.value.length - 1].weight - entries.value[0].weight).toFixed(1)
})

// Handle form submit
const handleSubmit = () => {
  if (!formData.value.weight || !formData.value.date) return

  const newEntry = {
    date: formData.value.date,
    weight: parseFloat(formData.value.weight),
    notes: formData.value.notes
  }

  entries.value.unshift(newEntry)

  // Reset form
  formData.value = {
    date: new Date().toISOString().split('T')[0],
    weight: '',
    notes: ''
  }
}

// Format date to Indonesian locale
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <div class="bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-16 px-4">
      <div class="max-w-7xl mx-auto text-center">
        <LineChart class="w-16 h-16 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-semibold mb-4">Tracker Progres</h1>
        <p class="text-cyan-50 max-w-2xl mx-auto">
          Pantau perkembangan berat badan dan catat perjalanan kesehatanmu
        </p>
      </div>
    </div>

    <section class="py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Form -->
          <div>
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-gradient-to-br from-cyan-100 to-teal-100 rounded-lg flex items-center justify-center">
                  <Plus class="w-6 h-6 text-cyan-600" />
                </div>
                <h2 class="text-xl font-semibold">Catat Progres Baru</h2>
              </div>

              <form @submit.prevent="handleSubmit" class="space-y-4">
                <!-- Date Input -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal
                  </label>
                  <input
                    type="date"
                    v-model="formData.date"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <!-- Weight Input -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <div class="flex items-center gap-2">
                      <Scale class="w-4 h-4" />
                      Berat Badan (kg)
                    </div>
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    v-model="formData.weight"
                    placeholder="Contoh: 70.5"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <!-- Notes Input -->
                <div>
                  <label class="block text-sm font-medium text-gray-700 mb-2">
                    <div class="flex items-center gap-2">
                      <FileText class="w-4 h-4" />
                      Catatan (opsional)
                    </div>
                  </label>
                  <textarea
                    v-model="formData.notes"
                    rows="3"
                    placeholder="Bagaimana perasaanmu hari ini?"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white py-3 px-6 rounded-lg font-medium transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Plus class="w-5 h-5" />
                  Simpan Progres
                </button>
              </form>
            </div>
          </div>

          <!-- Progress History -->
          <div>
            <div class="bg-white p-6 rounded-xl shadow-md">
              <div class="flex items-center gap-3 mb-6">
                <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar class="w-6 h-6 text-blue-600" />
                </div>
                <h2 class="text-xl font-semibold">Riwayat Progres</h2>
              </div>

              <div v-if="entries.length === 0" class="text-gray-500 text-center py-8">
                Belum ada data progres. Mulai catat progresmu sekarang!
              </div>

              <div v-else class="space-y-4 max-h-[400px] overflow-y-auto">
                <div
                  v-for="(entry, index) in entries"
                  :key="index"
                  class="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-cyan-200 transition-colors"
                >
                  <div class="flex justify-between items-start mb-2">
                    <span class="text-gray-600">
                      {{ formatDate(entry.date) }}
                    </span>
                    <span class="font-semibold bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                      {{ entry.weight }} kg
                    </span>
                  </div>
                  <p v-if="entry.notes" class="text-sm text-gray-600">
                    {{ entry.notes }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Stats Summary -->
            <div v-if="entries.length > 0" class="mt-6 bg-white p-6 rounded-xl shadow-md">
              <h3 class="text-lg font-semibold mb-4">Ringkasan</h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="text-center p-4 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-lg border border-cyan-100">
                  <div class="text-2xl font-bold text-cyan-600 mb-1">
                    {{ latestWeight }}
                  </div>
                  <p class="text-sm text-gray-600">Berat Terakhir (kg)</p>
                </div>
                <div class="text-center p-4 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
                  <div 
                    class="text-2xl font-bold mb-1"
                    :class="weightChange < 0 ? 'text-green-600' : weightChange > 0 ? 'text-red-500' : 'text-teal-600'"
                  >
                    {{ weightChange > 0 ? '+' : '' }}{{ weightChange }}
                  </div>
                  <p class="text-sm text-gray-600">Perubahan (kg)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Custom scrollbar for progress list */
.max-h-\[400px\]::-webkit-scrollbar {
  width: 6px;
}

.max-h-\[400px\]::-webkit-scrollbar-track {
  background: transparent;
}

.max-h-\[400px\]::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.max-h-\[400px\]::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
