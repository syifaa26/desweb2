<template>
  <header class="chat-header">
    <button @click="goBack" class="back-button" aria-label="Kembali">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </button>
    
    <div class="professional-info">
      <div class="professional-avatar">
        <div class="avatar-img">{{ avatarInitial }}</div>
        <span class="status-indicator" :class="{ 'online': isOnline }"></span>
      </div>
      
      <div class="professional-details">
        <h2 class="professional-name">{{ professionalName }}</h2>
        <p class="professional-status">{{ statusText }}</p>
      </div>
    </div>
    
    <button class="menu-button" aria-label="Menu">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        stroke-width="2" 
        stroke-linecap="round" 
        stroke-linejoin="round"
      >
        <circle cx="12" cy="12" r="1"></circle>
        <circle cx="12" cy="5" r="1"></circle>
        <circle cx="12" cy="19" r="1"></circle>
      </svg>
    </button>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  professionalName: {
    type: String,
    default: 'Ahli Nutrisi'
  },
  isOnline: {
    type: Boolean,
    default: true
  }
})

const router = useRouter()

const avatarInitial = computed(() => {
  return props.professionalName.charAt(0).toUpperCase()
})

const statusText = computed(() => {
  return props.isOnline ? 'Online - Siap membantu Anda' : 'Offline'
})

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.chat-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  color: white;
  box-shadow: 0 2px 10px rgba(14, 165, 233, 0.3);
  position: sticky;
  top: 0;
  z-index: 10;
}

.back-button,
.menu-button {
  background: rgba(255, 255, 255, 0.15);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: white;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.back-button:hover,
.menu-button:hover {
  background: rgba(255, 255, 255, 0.25);
  transform: scale(1.05);
}

.back-button:active,
.menu-button:active {
  transform: scale(0.95);
}

.professional-info {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  flex: 1;
}

.professional-avatar {
  position: relative;
  flex-shrink: 0;
}

.avatar-img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #94a3b8;
  border: 2px solid white;
  transition: background 0.3s ease;
}

.status-indicator.online {
  background: #10b981;
  box-shadow: 0 0 0 2px rgba(16, 185, 129, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.professional-details {
  flex: 1;
  min-width: 0;
}

.professional-name {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0 0 0.125rem 0;
  color: white;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.professional-status {
  font-size: 0.8125rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 400;
}

@media (max-width: 640px) {
  .chat-header {
    padding: 0.875rem 1rem;
  }
  
  .avatar-img {
    width: 42px;
    height: 42px;
    font-size: 1rem;
  }
  
  .professional-name {
    font-size: 1rem;
  }
  
  .professional-status {
    font-size: 0.75rem;
  }
  
  .back-button,
  .menu-button {
    width: 36px;
    height: 36px;
  }
}
</style>
