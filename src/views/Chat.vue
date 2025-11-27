<template>
  <div class="chat-page">
    <ChatHeader 
      :professionalName="professionalName"
      :isOnline="true"
    />
    
    <div class="chat-messages" ref="messagesContainer">
      <div class="messages-wrapper">
        <!-- Welcome Message -->
        <div class="welcome-card">
          <div class="welcome-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h3>Selamat datang di konsultasi FitLife!</h3>
          <p>{{ greetingMessage }}</p>
        </div>
        
        <!-- Chat Messages -->
        <ChatMessage
          v-for="msg in messages"
          :key="msg.id"
          :message="msg.text"
          :timestamp="msg.timestamp"
          :is-sent="msg.isSent"
          :sender-name="msg.senderName"
        />
        
        <!-- Typing Indicator -->
        <div v-if="isTyping" class="typing-indicator">
          <div class="typing-avatar">{{ avatarInitial }}</div>
          <div class="typing-bubble">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
    
    <ChatInput @send-message="handleSendMessage" />
  </div>
</template>

<script setup>
import { ref, nextTick, computed, onMounted } from 'vue'
import ChatHeader from '../components/ui/ChatHeader.vue'
import ChatMessage from '../components/ui/ChatMessage.vue'
import ChatInput from '../components/ui/ChatInput.vue'

const professionalName = ref('Ahli Nutrisi')
const messagesContainer = ref(null)
const isTyping = ref(false)

const avatarInitial = computed(() => {
  return professionalName.value.charAt(0).toUpperCase()
})

const greetingMessage = computed(() => {
  return `Halo! Saya adalah ${professionalName.value} profesional FitLife. Saya siap membantu Anda dengan pertanyaan seputar gaya hidup sehat, nutrisi, dan program latihan. Silakan bertanya!`
})

// Sample initial messages
const messages = ref([
  {
    id: 1,
    text: 'Halo! Saya ingin konsultasi tentang program diet yang cocok untuk pemula.',
    isSent: true,
    senderName: 'Anda',
    timestamp: new Date(Date.now() - 300000) // 5 minutes ago
  },
  {
    id: 2,
    text: 'Halo! Tentu saya akan senang membantu. Untuk pemula, saya sarankan memulai dengan pola makan seimbang yang mencakup protein, karbohidrat kompleks, dan lemak sehat. Apakah Anda memiliki tujuan khusus?',
    isSent: false,
    senderName: professionalName.value,
    timestamp: new Date(Date.now() - 270000) // 4.5 minutes ago
  },
  {
    id: 3,
    text: 'Tujuan saya ingin menurunkan berat badan sekitar 5kg dalam 2 bulan. Apakah itu realistis?',
    isSent: true,
    senderName: 'Anda',
    timestamp: new Date(Date.now() - 240000) // 4 minutes ago
  },
  {
    id: 4,
    text: 'Itu adalah tujuan yang sangat realistis! Dengan penurunan 0.5-1kg per minggu, Anda bisa mencapai target tersebut dengan aman. Saya akan membantu Anda membuat rencana nutrisi yang tepat.',
    isSent: false,
    senderName: professionalName.value,
    timestamp: new Date(Date.now() - 210000) // 3.5 minutes ago
  }
])

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const handleSendMessage = (messageText) => {
  // Add user message
  const newMessage = {
    id: Date.now(),
    text: messageText,
    isSent: true,
    senderName: 'Anda',
    timestamp: new Date()
  }
  
  messages.value.push(newMessage)
  scrollToBottom()
  
  // Simulate professional response
  isTyping.value = true
  
  setTimeout(() => {
    isTyping.value = false
    
    const responses = [
      'Terima kasih atas pertanyaannya! Saya akan membantu Anda dengan senang hati.',
      'Itu pertanyaan yang bagus! Berdasarkan pengalaman saya, saran terbaik adalah...',
      'Saya memahami kekhawatiran Anda. Mari kita bahas lebih detail mengenai hal ini.',
      'Tentu! Untuk informasi lebih lanjut, saya sarankan Anda untuk...',
      'Excellent! Langkah selanjutnya yang perlu Anda lakukan adalah...'
    ]
    
    const randomResponse = responses[Math.floor(Math.random() * responses.length)]
    
    const responseMessage = {
      id: Date.now() + 1,
      text: randomResponse,
      isSent: false,
      senderName: professionalName.value,
      timestamp: new Date()
    }
    
    messages.value.push(responseMessage)
    scrollToBottom()
  }, 1500)
}

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped>
.chat-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, #f8fafc 0%, #e2e8f0 100%);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  scroll-behavior: smooth;
}

.messages-wrapper {
  max-width: 900px;
  margin: 0 auto;
}

.welcome-card {
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #e2e8f0;
  animation: fadeInUp 0.5s ease-out;
}

.welcome-icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 1rem;
  background: linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 16px rgba(14, 165, 233, 0.3);
}

.welcome-card h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: #1e293b;
  font-weight: 700;
}

.welcome-card p {
  margin: 0;
  color: #64748b;
  line-height: 1.6;
  font-size: 0.9375rem;
}

.typing-indicator {
  display: flex;
  gap: 0.75rem;
  align-items: flex-end;
  margin-bottom: 1rem;
  animation: fadeInUp 0.3s ease-out;
}

.typing-avatar {
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
  flex-shrink: 0;
}

.typing-bubble {
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 1rem;
  border-bottom-left-radius: 0.25rem;
  padding: 1rem 1.25rem;
  display: flex;
  gap: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.typing-bubble span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #94a3b8;
  animation: typing 1.4s infinite;
}

.typing-bubble span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-bubble span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.7;
  }
  30% {
    transform: translateY(-10px);
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scrollbar Styling */
.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: transparent;
}

.chat-messages::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.chat-messages::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

@media (max-width: 640px) {
  .chat-messages {
    padding: 1rem;
  }
  
  .welcome-card {
    padding: 1.5rem;
  }
  
  .welcome-icon {
    width: 56px;
    height: 56px;
  }
  
  .welcome-card h3 {
    font-size: 1.125rem;
  }
  
  .welcome-card p {
    font-size: 0.875rem;
  }
}
</style>
