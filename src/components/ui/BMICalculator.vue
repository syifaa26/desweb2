<script setup>
import { ref } from 'vue'
import { X, Calculator } from 'lucide-vue-next'

const props = defineProps({
  isOpen: { type: Boolean, default: false },
})

const emit = defineEmits(['close'])

const weight = ref('')
const height = ref('')
const bmi = ref(null)
const category = ref('')
const categoryColor = ref('')

const calculateBMI = () => {
  const weightNum = parseFloat(weight.value)
  const heightNum = parseFloat(height.value) / 100

  if (weightNum > 0 && heightNum > 0) {
    const bmiValue = weightNum / (heightNum * heightNum)
    const rounded = parseFloat(bmiValue.toFixed(1))
    bmi.value = rounded

    if (bmiValue < 18.5) {
      category.value = 'Kurus'
      categoryColor.value = 'text-yellow-600 bg-yellow-50 border-yellow-200'
    } else if (bmiValue < 25) {
      category.value = 'Normal'
      categoryColor.value = 'text-green-600 bg-green-50 border-green-200'
    } else if (bmiValue < 30) {
      category.value = 'Gemuk'
      categoryColor.value = 'text-red-500 bg-red-50 border-red-200'
    } else {
      category.value = 'Obesitas'
      categoryColor.value = 'text-gray-900 bg-gray-100 border-gray-300'
    }
  }
}

const resetCalculator = () => {
  weight.value = ''
  height.value = ''
  bmi.value = null
  category.value = ''
  categoryColor.value = ''
}
</script>

<template>
  <div v-if="props.isOpen" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
    <div class="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
      <button
        @click="emit('close')"
        class="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        aria-label="Close"
      >
        <X class="w-6 h-6" />
      </button>

      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg flex items-center justify-center">
          <Calculator class="w-6 h-6 text-teal-600" />
        </div>
        <h2 class="text-xl font-semibold">Kalkulator BMI</h2>
      </div>

      <form @submit.prevent="calculateBMI" class="space-y-4">
        <div>
          <label class="block text-gray-700 mb-2">Berat Badan (kg)</label>
          <input
            type="number"
            v-model="weight"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Masukkan berat badan"
            required
          />
        </div>

        <div>
          <label class="block text-gray-700 mb-2">Tinggi Badan (cm)</label>
          <input
            type="number"
            v-model="height"
            class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Masukkan tinggi badan"
            required
          />
        </div>

        <div v-if="bmi !== null" class="bg-gradient-to-br from-teal-50 to-cyan-50 p-4 rounded-lg border border-teal-200">
          <p class="text-center text-gray-700 mb-2">BMI Anda:</p>
          <p class="text-center text-3xl bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent mb-3">{{ bmi }}</p>
          <div 
            class="text-center py-2 px-4 rounded-lg border font-medium"
            :class="categoryColor"
          >
            Kategori: {{ category }}
          </div>
        </div>

        <div class="flex gap-3">
          <button
            type="submit"
            class="flex-1 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white py-2 rounded-lg transition-all"
          >
            Hitung
          </button>
          <button
            type="button"
            @click="resetCalculator"
            class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
</style>
