<template>
  <div class="chat-input-container">
    <div class="input-wrapper">
      <textarea
        ref="textareaRef"
        v-model="inputMessage"
        @keydown.enter.exact.prevent="handleSend"
        @input="adjustHeight"
        placeholder="Tulis pesan Anda..."
        rows="1"
        class="message-input"
      ></textarea>
      
      <button 
        @click="handleSend"
        :disabled="!inputMessage.trim()"
        class="send-button"
        :class="{ 'active': inputMessage.trim() }"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const emit = defineEmits(['send-message'])

const inputMessage = ref('')
const textareaRef = ref(null)

const adjustHeight = () => {
  nextTick(() => {
    if (textareaRef.value) {
      textareaRef.value.style.height = 'auto'
      const newHeight = Math.min(textareaRef.value.scrollHeight, 120)
      textareaRef.value.style.height = newHeight + 'px'
    }
  })
}

const handleSend = () => {
  const message = inputMessage.value.trim()
  if (message) {
    emit('send-message', message)
    inputMessage.value = ''
    
    nextTick(() => {
      if (textareaRef.value) {
        textareaRef.value.style.height = 'auto'
      }
    })
  }
}
</script>

<style scoped>
.chat-input-container {
  padding: 1rem 1.5rem;
  background: white;
  border-top: 1px solid #e2e8f0;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
}

.input-wrapper {
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
  max-width: 100%;
}

.message-input {
  flex: 1;
  padding: 0.875rem 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 1.5rem;
  font-size: 0.9375rem;
  line-height: 1.5;
  resize: none;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;
  background: #f8fafc;
  min-height: 44px;
  max-height: 120px;
  overflow-y: auto;
}

.message-input:focus {
  border-color: #0ea5e9;
  background: white;
  box-shadow: 0 0 0 3px rgba(14, 165, 233, 0.1);
}

.message-input::placeholder {
  color: #94a3b8;
}

.send-button {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #e2e8f0;
  color: #64748b;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  position: relative;
  overflow: hidden;
}

.send-button::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.send-button svg {
  position: relative;
  z-index: 1;
  transition: transform 0.3s ease;
}

.send-button.active {
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);
}

.send-button.active:hover {
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.5);
  transform: translateY(-2px);
}

.send-button.active:active {
  transform: translateY(0) scale(0.95);
}

.send-button.active svg {
  animation: sendPulse 0.6s ease-in-out;
}

@keyframes sendPulse {
  0%, 100% { transform: rotate(0deg) scale(1); }
  50% { transform: rotate(-15deg) scale(1.1); }
}

.send-button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.send-button:disabled:hover {
  transform: none;
}

@media (max-width: 640px) {
  .chat-input-container {
    padding: 0.875rem 1rem;
  }
  
  .message-input {
    padding: 0.75rem 0.875rem;
    font-size: 0.875rem;
  }
}
</style>
