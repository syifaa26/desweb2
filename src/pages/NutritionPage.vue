<script setup>
import { ref } from 'vue'
import PageHeader from '../components/ui/PageHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
import NutritionCard from '../components/ui/NutritionCard.vue'
import { Apple, Flame, Beef, Wheat } from 'lucide-vue-next'

// Daily nutrition stats
const dailyStats = ref([
  { value: '2000', label: 'Kalori per Hari', color: 'teal' },
  { value: '55', label: 'Protein', suffix: 'g', color: 'blue' },
  { value: '8', label: 'Kolesterol', suffix: '+', color: 'orange' }
])

// Nutrition data for various foods
const nutritionData = ref([
  {
    title: 'Dada Ayam Rebus (100g)',
    badge: '165 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '165kcal' },
      { icon: Beef, label: 'Protein', value: '31g' },
      { icon: Wheat, label: 'Karbohidrat', value: '0g' }
    ]
  },
  {
    title: 'Nasi Putih (1 Porsi)',
    badge: '218 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '218kcal' },
      { icon: Beef, label: 'Protein', value: '4g' },
      { icon: Wheat, label: 'Karbohidrat', value: '48g' }
    ]
  },
  {
    title: 'Brokoli Kukus (75g)',
    badge: '25 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '25kcal' },
      { icon: Beef, label: 'Protein', value: '2g' },
      { icon: Wheat, label: 'Karbohidrat', value: '5g' }
    ]
  },
  {
    title: 'Telur Ayam Rebus (2 butir)',
    badge: '155 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '155kcal' },
      { icon: Beef, label: 'Protein', value: '13g' },
      { icon: Wheat, label: 'Karbohidrat', value: '1g' }
    ]
  },
  {
    title: 'Ikan Salmon Panggang (100g)',
    badge: '206 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '206kcal' },
      { icon: Beef, label: 'Protein', value: '22g' },
      { icon: Wheat, label: 'Karbohidrat', value: '0g' }
    ]
  },
  {
    title: 'Alpukat (100g)',
    badge: '160 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '160kcal' },
      { icon: Beef, label: 'Protein', value: '2g' },
      { icon: Wheat, label: 'Karbohidrat', value: '9g' }
    ]
  },
  {
    title: 'Oatmeal (100g)',
    badge: '389 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '389kcal' },
      { icon: Beef, label: 'Protein', value: '17g' },
      { icon: Wheat, label: 'Karbohidrat', value: '66g' }
    ]
  },
  {
    title: 'Yogurt Greek (100g)',
    badge: '59 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '59kcal' },
      { icon: Beef, label: 'Protein', value: '10g' },
      { icon: Wheat, label: 'Karbohidrat', value: '4g' }
    ]
  },
  {
    title: 'Kacang Almond (28g)',
    badge: '164 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '164kcal' },
      { icon: Beef, label: 'Protein', value: '6g' },
      { icon: Wheat, label: 'Karbohidrat', value: '6g' }
    ]
  },
  {
    title: 'Bayam Segar (100g)',
    badge: '23 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '23kcal' },
      { icon: Beef, label: 'Protein', value: '3g' },
      { icon: Wheat, label: 'Karbohidrat', value: '4g' }
    ]
  },
  {
    title: 'Tahu (100g)',
    badge: '76 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '76kcal' },
      { icon: Beef, label: 'Protein', value: '8g' },
      { icon: Wheat, label: 'Karbohidrat', value: '2g' }
    ]
  },
  {
    title: 'Kentang Rebus (100g)',
    badge: '87 kkal',
    badgeColor: 'cyan',
    items: [
      { icon: Flame, label: 'Kalori', value: '87kcal' },
      { icon: Beef, label: 'Protein', value: '2g' },
      { icon: Wheat, label: 'Karbohidrat', value: '20g' }
    ]
  },
  {
    title: 'Pisang (1 buah)',
    badge: '105 kkal',
    badgeColor: 'teal',
    items: [
      { icon: Flame, label: 'Kalori', value: '105kcal' },
      { icon: Beef, label: 'Protein', value: '1g' },
      { icon: Wheat, label: 'Karbohidrat', value: '27g' }
    ]
  }
])
</script>

<template>
  <div>
    <!-- Page Header -->
    <PageHeader
      :icon="Apple"
      title="Panduan Nutrisi"
      description="Panduan lengkap nilai gizi berbagai makanan sehat untuk membantu mencapai target kesehatanmu"
    />

    <!-- Daily Stats Section -->
    <section class="py-12 px-4 bg-gray-50">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-semibold text-center mb-8">Total Nutrisi Harian</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <StatCard
            v-for="(stat, index) in dailyStats"
            :key="index"
            :value="stat.value"
            :label="stat.label"
            :suffix="stat.suffix"
            :color="stat.color"
          />
        </div>
      </div>
    </section>

    <!-- Nutrition Cards Grid -->
    <section class="py-12 px-4">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-2xl font-semibold text-center mb-8">Daftar Nutrisi Makanan</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <NutritionCard
            v-for="(food, index) in nutritionData"
            :key="index"
            :title="food.title"
            :badge="food.badge"
            :badge-color="food.badgeColor"
            :nutrition-items="food.items"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
</style>
