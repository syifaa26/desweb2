<template>
  <div 
    class="message-container"
    :class="{ 'message-sent': isSent, 'message-received': !isSent }"
  >
    <div v-if="!isSent" class="avatar">
      <div class="avatar-circle">{{ avatarInitial }}</div>
    </div>
    
    <div class="message-content">
      <div v-if="!isSent" class="sender-name">{{ senderName }}</div>
      <div class="message-bubble" :class="{ 'sent': isSent, 'received': !isSent }">
        <p class="message-text">{{ message }}</p>
        <span class="message-time">{{ formattedTime }}</span>
      </div>
    </div>
    
    <div v-if="isSent" class="avatar">
      <div class="avatar-circle sent-avatar">Anda</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: () => new Date()
  },
  isSent: {
    type: Boolean,
    default: false
  },
  senderName: {
    type: String,
    default: 'User'
  }
})

const avatarInitial = computed(() => {
  return props.senderName.charAt(0).toUpperCase()
})

const formattedTime = computed(() => {
  const hours = props.timestamp.getHours().toString().padStart(2, '0')
  const minutes = props.timestamp.getMinutes().toString().padStart(2, '0')
  return `${hours}:${minutes}`
})
</script>

<style scoped>
.message-container {
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1rem;
  animation: fadeInUp 0.3s ease-out;
  align-items: flex-end;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message-sent {
  flex-direction: row-reverse;
}

.message-received {
  flex-direction: row;
}

.avatar {
  flex-shrink: 0;
}

.avatar-circle {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 0.875rem;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.3);
}

.sent-avatar {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 2px 8px rgba(16, 185, 129, 0.3);
}

.message-content {
  flex: 1;
  max-width: 70%;
  display: flex;
  flex-direction: column;
}

.sender-name {
  font-size: 0.75rem;
  color: #64748b;
  margin-bottom: 0.25rem;
  font-weight: 500;
  padding-left: 0.75rem;
}

.message-bubble {
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  position: relative;
  transition: all 0.2s ease;
}

.message-bubble:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.message-bubble.received {
  background: white;
  border: 1px solid #e2e8f0;
  border-bottom-left-radius: 0.25rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.message-bubble.sent {
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  border-bottom-right-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.25);
  margin-left: auto;
}

.message-text {
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
  color: #1e293b;
  font-size: 0.9375rem;
}

.sent .message-text {
  color: white;
}

.message-time {
  font-size: 0.6875rem;
  color: #94a3b8;
  display: block;
  text-align: right;
}

.sent .message-time {
  color: rgba(255, 255, 255, 0.8);
}

@media (max-width: 640px) {
  .message-content {
    max-width: 80%;
  }
  
  .avatar-circle {
    width: 2rem;
    height: 2rem;
    font-size: 0.75rem;
  }
  
  .message-bubble {
    padding: 0.75rem 0.875rem;
  }
}
</style>
