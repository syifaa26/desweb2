<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  fallback: { type: String, default: '' },
})

const failed = ref(false)
const onError = () => {
  failed.value = true
}

const computedSrc = computed(() => {
  if (!failed.value) return props.src
  return props.fallback || 'https://placehold.co/1200x400?text=Image+Unavailable'
})
</script>

<template>
  <img :src="computedSrc" :alt="alt" v-bind="$attrs" @error="onError" />
</template>

<style scoped>
</style>
