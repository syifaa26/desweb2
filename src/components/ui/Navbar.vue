<script setup>
import { ref } from 'vue'
import { Menu, X, Dumbbell } from 'lucide-vue-next'

const props = defineProps({
  currentPage: { type: String, default: 'home' },
  // Optional callback to mirror the React API
  onNavigate: { type: Function, default: null },
})

const emit = defineEmits(['navigate'])

const isMenuOpen = ref(false)

const menuItems = [
  { id: 'home', label: 'Beranda' },
  { id: 'workout', label: 'Program Latihan' },
  { id: 'nutrition', label: 'Nutrisi' },
  { id: 'tracker', label: 'Tracker' },
  { id: 'about', label: 'Tentang' },
]

const navigate = (page) => {
  if (props.onNavigate) props.onNavigate(page)
  emit('navigate', page)
}
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <button
          class="flex items-center gap-2 cursor-pointer"
          @click="navigate('home')"
        >
          <Dumbbell class="w-8 h-8 text-teal-600" />
          <span class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">FitLife</span>
        </button>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="navigate(item.id)"
            :class="[
              'px-3 py-2 rounded-md transition-colors',
              props.currentPage === item.id
                ? 'text-teal-600 bg-teal-50'
                : 'text-gray-700 hover:text-teal-600',
            ]"
          >
            {{ item.label }}
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          class="md:hidden p-2"
          @click="isMenuOpen = !isMenuOpen"
          aria-label="Toggle Menu"
        >
          <X v-if="isMenuOpen" class="w-6 h-6 text-gray-700" />
          <Menu v-else class="w-6 h-6 text-gray-700" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden pb-4">
        <button
          v-for="item in menuItems"
          :key="item.id"
          @click="navigate(item.id); isMenuOpen = false"
          :class="[
            'block w-full text-left px-4 py-2 rounded-md transition-colors',
            props.currentPage === item.id
              ? 'text-teal-600 bg-teal-50'
              : 'text-gray-700 hover:bg-gray-50',
          ]"
        >
          {{ item.label }}
        </button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
</style>
