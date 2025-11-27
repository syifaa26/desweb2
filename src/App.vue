<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import Footer from './components/ui/Footer.vue'
import Navbar from './components/ui/Navbar.vue'
import BMICalculator from './components/ui/BMICalculator.vue'

const route = useRoute()
const showBMI = ref(false)
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar @openBMI="showBMI = true" />
    <main class="flex-1">
      <RouterView @openBMI="showBMI = true" />
    </main>
    <Footer />
    <BMICalculator :isOpen="showBMI" @close="showBMI = false" />
  </div>
</template>

