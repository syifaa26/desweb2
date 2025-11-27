<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X, Dumbbell } from 'lucide-vue-next'

const emit = defineEmits(['openBMI'])

const route = useRoute()
const router = useRouter()
const isMenuOpen = ref(false)

const menuItems = [
  { id: 'home', label: 'Beranda', path: '/' },
  { id: 'workout', label: 'Program Latihan', path: '/workout' },
  { id: 'nutrition', label: 'Nutrisi', path: '/nutrition' },
  { id: 'tracker', label: 'Tracker', path: '#' },
  { id: 'about', label: 'Tentang', path: '/about' },
]

const currentPath = computed(() => route.path)

const isActive = (path) => {
  return currentPath.value === path
}

const navigate = (item) => {
  if (item.id === 'tracker') {
    emit('openBMI')
  } else if (item.path === '#') {
    // Placeholder for pages that don't exist yet
    return
  } else {
    router.push(item.path)
  }
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center gap-2">
          <Dumbbell class="w-8 h-8 text-teal-600" />
          <span class="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent font-bold text-xl">FitLife</span>
        </RouterLink>

        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-8">
          <button
            v-for="item in menuItems"
            :key="item.id"
            @click="navigate(item)"
            :class="[
              'px-3 py-2 rounded-md transition-colors',
              isActive(item.path)
                ? 'text-teal-600 bg-teal-50 font-medium'
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
          @click="navigate(item)"
          :class="[
            'block w-full text-left px-4 py-2 rounded-md transition-colors',
            isActive(item.path)
              ? 'text-teal-600 bg-teal-50 font-medium'
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
