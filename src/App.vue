<script setup>
import { ref } from 'vue'
import Homepage from './components/Homepage.vue'
import Aboutpage from './components/Aboutpage.vue'
import Footer from './components/ui/Footer.vue'
import Navbar from './components/ui/Navbar.vue'
import BMICalculator from './components/ui/BMICalculator.vue'

const currentPage = ref('home')
const showBMI = ref(false)

const handleNavigate = (page) => {
  if (page === 'tracker') {
    showBMI.value = true
    return
  }
  currentPage.value = page
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :currentPage="currentPage" @navigate="handleNavigate" />
    <main class="flex-1">
      <Homepage
        v-if="currentPage === 'home'"
        @navigate="handleNavigate"
        @openBMI="showBMI = true"
      />
      <Aboutpage v-else />
    </main>
    <Footer />
    <BMICalculator :isOpen="showBMI" @close="showBMI = false" />
  </div>
  
</template>

