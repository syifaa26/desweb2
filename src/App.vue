<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/ui/Footer.vue'
import Navbar from './components/ui/Navbar.vue'
import BMICalculator from './components/ui/BMICalculator.vue'

const route = useRoute()
const showBMI = ref(false)

// Hide footer on Chat page for cleaner look
const showFooter = computed(() => route.name !== 'Chat')
const showNavbar = computed(() => route.name !== 'Chat')
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar v-if="showNavbar" @openBMI="showBMI = true" />
    <main class="flex-1">
      <RouterView @openBMI="showBMI = true" />
    </main>
    <Footer v-if="showFooter" />
    <BMICalculator :isOpen="showBMI" @close="showBMI = false" />
  </div>
</template>

