<script setup>
import { computed, ref } from 'vue'
import NutritionCard from '../components/ui/NutritionCard.vue'
import { Apple } from 'lucide-vue-next'
import ImageWithFallback from '../components/ui/ImageWithFallback.vue'

const foods = [
  // Protein
  { name: 'Dada Ayam Rebus (100g)', calories: 165, protein: 31, carbs: 0, category: 'Protein' },
  { name: 'Telur Rebus (2 butir)', calories: 155, protein: 13, carbs: 1, category: 'Protein' },
  { name: 'Greek Yogurt Plain (170g)', calories: 100, protein: 17, carbs: 6, category: 'Protein' },
  { name: 'Ikan Salmon Panggang (100g)', calories: 206, protein: 22, carbs: 0, category: 'Protein' },
  { name: 'Ikan Tuna (100g)', calories: 132, protein: 28, carbs: 0, category: 'Protein' },
  { name: 'Ikan Dori Panggang (100g)', calories: 96, protein: 20, carbs: 0, category: 'Protein' },
  { name: 'Dada Kalkun (100g)', calories: 135, protein: 30, carbs: 0, category: 'Protein' },
  { name: 'Daging Sapi Tanpa Lemak (100g)', calories: 179, protein: 26, carbs: 0, category: 'Protein' },
  { name: 'Tempe Goreng (100g)', calories: 193, protein: 19, carbs: 9, category: 'Protein' },
  { name: 'Tahu Kukus (100g)', calories: 76, protein: 8, carbs: 2, category: 'Protein' },
  { name: 'Edamame (100g)', calories: 121, protein: 11, carbs: 10, category: 'Protein' },
  { name: 'Udang Rebus (100g)', calories: 99, protein: 24, carbs: 0, category: 'Protein' },

  // Karbohidrat
  { name: 'Nasi Merah (100g)', calories: 216, protein: 5, carbs: 45, category: 'Karbohidrat' },
  { name: 'Oatmeal (40g)', calories: 150, protein: 5, carbs: 27, category: 'Karbohidrat' },
  { name: 'Ubi Jalar Kukus (100g)', calories: 90, protein: 2, carbs: 21, category: 'Karbohidrat' },
  { name: 'Kentang Rebus (100g)', calories: 87, protein: 2, carbs: 20, category: 'Karbohidrat' },
  { name: 'Quinoa Masak (100g)', calories: 120, protein: 4, carbs: 21, category: 'Karbohidrat' },
  { name: 'Roti Gandum (2 lembar)', calories: 138, protein: 6, carbs: 24, category: 'Karbohidrat' },
  { name: 'Pasta Gandum Utuh (100g)', calories: 131, protein: 5, carbs: 26, category: 'Karbohidrat' },
  { name: 'Nasi Hitam (100g)', calories: 181, protein: 4, carbs: 38, category: 'Karbohidrat' },

  // Sayuran
  { name: 'Brokoli Rebus (100g)', calories: 35, protein: 2, carbs: 7, category: 'Sayuran' },
  { name: 'Bayam (100g)', calories: 23, protein: 3, carbs: 4, category: 'Sayuran' },
  { name: 'Wortel (100g)', calories: 41, protein: 1, carbs: 10, category: 'Sayuran' },
  { name: 'Tomat (100g)', calories: 18, protein: 1, carbs: 4, category: 'Sayuran' },
  { name: 'Paprika Merah (100g)', calories: 31, protein: 1, carbs: 6, category: 'Sayuran' },
  { name: 'Kembang Kol (100g)', calories: 25, protein: 2, carbs: 5, category: 'Sayuran' },
  { name: 'Asparagus (100g)', calories: 20, protein: 2, carbs: 4, category: 'Sayuran' },
  { name: 'Timun (100g)', calories: 16, protein: 1, carbs: 4, category: 'Sayuran' },
  { name: 'Selada (100g)', calories: 15, protein: 1, carbs: 3, category: 'Sayuran' },
  { name: 'Zucchini (100g)', calories: 17, protein: 1, carbs: 3, category: 'Sayuran' },
  { name: 'Kangkung (100g)', calories: 19, protein: 2, carbs: 3, category: 'Sayuran' },
  { name: 'Kacang Panjang (100g)', calories: 31, protein: 2, carbs: 7, category: 'Sayuran' },

  // Buah-buahan & lemak sehat
  { name: 'Alpukat (1 buah sedang)', calories: 240, protein: 3, carbs: 12, category: 'Lemak Sehat' },
  { name: 'Pisang (1 buah sedang)', calories: 105, protein: 1, carbs: 27, category: 'Buah' },
  { name: 'Apel (1 buah sedang)', calories: 95, protein: 0, carbs: 25, category: 'Buah' },
  { name: 'Jeruk (1 buah sedang)', calories: 62, protein: 1, carbs: 15, category: 'Buah' },
  { name: 'Blueberry (100g)', calories: 57, protein: 1, carbs: 14, category: 'Buah' },
  { name: 'Stroberi (100g)', calories: 32, protein: 1, carbs: 8, category: 'Buah' },
  { name: 'Mangga (100g)', calories: 60, protein: 1, carbs: 15, category: 'Buah' },
  { name: 'Pepaya (100g)', calories: 43, protein: 0, carbs: 11, category: 'Buah' },
  { name: 'Semangka (100g)', calories: 30, protein: 1, carbs: 8, category: 'Buah' },
  { name: 'Kiwi (1 buah)', calories: 42, protein: 1, carbs: 10, category: 'Buah' },
  { name: 'Pir (1 buah sedang)', calories: 101, protein: 1, carbs: 27, category: 'Buah' },

  // Kacang & Lemak Sehat
  { name: 'Kacang Almond (10 butir)', calories: 70, protein: 3, carbs: 2, category: 'Lemak Sehat' },
  { name: 'Kacang Tanah (30g)', calories: 170, protein: 7, carbs: 5, category: 'Lemak Sehat' },
  { name: 'Kacang Mete (30g)', calories: 165, protein: 5, carbs: 9, category: 'Lemak Sehat' },
  { name: 'Kacang Walnut (30g)', calories: 185, protein: 4, carbs: 4, category: 'Lemak Sehat' },
  { name: 'Biji Chia (1 sdm)', calories: 58, protein: 2, carbs: 5, category: 'Lemak Sehat' },
  { name: 'Biji Labu (30g)', calories: 151, protein: 7, carbs: 5, category: 'Lemak Sehat' },
  { name: 'Kacang Hijau (100g)', calories: 105, protein: 7, carbs: 19, category: 'Protein' },
  { name: 'Kacang Merah (100g)', calories: 127, protein: 8, carbs: 23, category: 'Protein' },

  // Minuman & Lainnya
  { name: 'Susu Skim (1 gelas)', calories: 83, protein: 8, carbs: 12, category: 'Protein' },
  { name: 'Susu Almond (1 gelas)', calories: 30, protein: 1, carbs: 1, category: 'Minuman' },
  { name: 'Protein Shake (1 scoop)', calories: 120, protein: 24, carbs: 3, category: 'Protein' },
  { name: 'Smoothie Bowl Buah (1 mangkuk)', calories: 250, protein: 5, carbs: 45, category: 'Buah' }
]

const proteinFoods = computed(() => foods.filter(food => food.category === 'Protein'))
const carbFoods = computed(() => foods.filter(food => food.category === 'Karbohidrat'))
const vegetableFoods = computed(() => foods.filter(food => food.category === 'Sayuran'))
const fruitFoods = computed(() => foods.filter(food => food.category === 'Buah'))
const healthyFatFoods = computed(() => foods.filter(food => food.category === 'Lemak Sehat'))
const drinkFoods = computed(() => foods.filter(food => food.category === 'Minuman'))

const activeTab = ref('protein')

const tabs = [
  { id: 'protein', label: 'Protein' },
  { id: 'carbs', label: 'Karbohidrat' },
  { id: 'vegetables', label: 'Sayuran' },
  { id: 'fruits', label: 'Buah' },
  { id: 'healthy-fats', label: 'Lemak Sehat' },
  { id: 'drinks', label: 'Minuman' }
]

const formatBadge = (calories) => `${calories} kkal`
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header dengan gambar latar -->
    <div class="relative h-[300px] overflow-hidden">
      <ImageWithFallback
        src="https://images.unsplash.com/photo-1670164747721-d3500ef757a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZm9vZCUyMG51dHJpdGlvbnxlbnwxfHx8fDE3NjAzODk2NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
        alt="Healthy Food"
        class="w-full h-full object-cover"
      />
      <div class="absolute inset-0 bg-gradient-to-r from-cyan-600/90 to-cyan-800/90" />
      <div class="absolute inset-0 flex items-center justify-center text-white">
        <div class="text-center px-4">
          <Apple class="w-16 h-16 mx-auto mb-4" />
          <h1 class="text-3xl md:text-4xl font-semibold mb-4">Panduan Nutrisi</h1>
          <p class="text-cyan-100 max-w-2xl mx-auto">
            Pelajari nilai gizi dari berbagai makanan sehat untuk mendukung program kebugaranmu
          </p>
        </div>
      </div>
    </div>

    <!-- Nutrition Tips -->
    <section class="py-12 px-4">
      <div class="max-w-7xl mx-auto mb-12">
        <div class="bg-white p-8 rounded-xl shadow-md">
          <h2 class="text-2xl font-semibold mb-6">Tips Nutrisi Harian</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-cyan-50 rounded-lg">
              <div class="text-3xl text-cyan-600 mb-2">2000</div>
              <p class="text-gray-600">Kalori per Hari</p>
            </div>
            <div class="text-center p-4 bg-blue-50 rounded-lg">
              <div class="text-3xl text-blue-600 mb-2">50g</div>
              <p class="text-gray-600">Protein Minimum</p>
            </div>
            <div class="text-center p-4 bg-orange-50 rounded-lg">
              <div class="text-3xl text-orange-600 mb-2">8+</div>
              <p class="text-gray-600">Gelas Air per Hari</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Foods Grid dengan tabs kategori -->
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-semibold mb-6">Daftar Makanan Sehat</h2>

        <!-- Tabs header - responsive untuk HP, iPad, dan Desktop -->
        <div class="bg-gray-100 rounded-2xl p-1 sm:p-1.5 mb-8 overflow-x-auto scrollbar-hide">
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-1 sm:gap-2">
            <button
              v-for="tab in tabs"
              :key="tab.id"
              type="button"
              class="flex items-center justify-center rounded-lg sm:rounded-xl border px-2 sm:px-4 lg:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors"
              :class="[
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow-sm border-gray-200'
                  : 'bg-transparent text-gray-600 border-transparent hover:bg-white/50'
              ]"
              @click="activeTab = tab.id"
            >
              {{ tab.label }}
            </button>
          </div>
        </div>

        <!-- Tabs content -->
        <div v-if="activeTab === 'protein'" class="mt-2 mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in proteinFoods"
              :key="`protein-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="teal"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'carbs'" class="mt-2 mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in carbFoods"
              :key="`carb-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="cyan"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'vegetables'" class="mt-2 mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in vegetableFoods"
              :key="`veg-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="teal"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'fruits'" class="mt-2 mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in fruitFoods"
              :key="`fruit-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="orange"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'healthy-fats'" class="mt-2 mb-10">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in healthyFatFoods"
              :key="`fat-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="teal"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>

        <div v-else-if="activeTab === 'drinks'" class="mt-2 mb-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <NutritionCard
              v-for="(food, index) in drinkFoods"
              :key="`drink-${index}`"
              :title="food.name"
              :badge="formatBadge(food.calories)"
              badge-color="cyan"
              :nutrition-items="[
                { label: 'Kalori', value: food.calories + ' kkal' },
                { label: 'Protein', value: food.protein + ' g' },
                { label: 'Karbohidrat', value: food.carbs + ' g' }
              ]"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hide scrollbar for tabs */
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
