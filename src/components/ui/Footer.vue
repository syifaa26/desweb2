<script setup>
import { Dumbbell, Mail, Phone, MapPin } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const quickLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Program Latihan', path: '/workout' },
  { label: 'Nutrisi', path: '/nutrition' },
  { label: 'Tracker', path: '/tracker' }
]

const navigateTo = (path) => {
  router.push(path)
}
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center gap-2 mb-4">
            <Dumbbell class="w-8 h-8 text-cyan-500" />
            <span class="text-white">FitLife</span>
          </div>
          <p class="text-gray-400">
            Panduan lengkap untuk hidup sehat dan bugar bersama FitLife.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white mb-4">Link Cepat</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <button 
                @click="navigateTo(link.path)" 
                class="hover:text-cyan-500 transition-colors cursor-pointer text-left"
              >
                {{ link.label }}
              </button>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white mb-4">Kontak Kami</h3>
          <ul class="space-y-3">
            <li class="flex items-center gap-2">
              <Mail class="w-4 h-4" />
              <span>info@fitlife.com</span>
            </li>
            <li class="flex items-center gap-2">
              <Phone class="w-4 h-4" />
              <span>+62 85172148011</span>
            </li>
            <li class="flex items-center gap-2">
              <MapPin class="w-4 h-4" />
              <span>Balikpapan. Kalimantan</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>&copy; 2025 FitLife. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
</style>
