<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <!-- Header -->
    <div class="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-4 shadow-md">
      <div class="max-w-4xl mx-auto flex items-center gap-4">
        <button
          @click="goBack"
          class="hover:bg-white/20 p-2 rounded-lg transition-colors"
        >
          <ArrowLeft class="w-6 h-6" />
        </button>
        <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
          <User class="w-7 h-7" />
        </div>
        <div class="flex-1">
          <h2 class="text-lg font-medium">{{ trainerName }}</h2>
          <p class="text-sm text-teal-100">Trainer Profesional • Online</p>
        </div>
        <MessageCircle class="w-6 h-6" />
      </div>
    </div>

    <!-- Messages Area -->
    <div class="flex-1 overflow-y-auto p-4 pb-24" ref="messagesContainer">
      <div class="max-w-4xl mx-auto space-y-4">
        <div
          v-for="message in messages"
          :key="message.id"
          :class="['flex flex-col', message.sender === 'user' ? 'items-end' : 'items-start']"
        >
          <div
            :class="[
              'max-w-[70%] rounded-2xl p-4',
              message.sender === 'user'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white'
                : 'bg-white shadow-md text-gray-800'
            ]"
          >
            <p class="break-words whitespace-pre-line">{{ message.text }}</p>
            <p
              :class="[
                'text-xs mt-2',
                message.sender === 'user' ? 'text-teal-100' : 'text-gray-500'
              ]"
            >
              {{ formatTime(message.timestamp) }}
            </p>
          </div>
          
          <!-- Quick Reply Buttons -->
          <div 
            v-if="message.quickReplies && message.quickReplies.length > 0 && message.id === messages[messages.length - 1]?.id"
            class="flex flex-wrap gap-2 mt-3 max-w-[85%]"
          >
            <button
              v-for="(reply, index) in message.quickReplies"
              :key="index"
              @click="handleQuickReply(reply)"
              class="px-4 py-2 bg-white border-2 border-teal-500 text-teal-600 rounded-full text-sm font-medium hover:bg-teal-500 hover:text-white transition-all shadow-sm hover:shadow-md"
            >
              {{ reply }}
            </button>
          </div>
        </div>

        <!-- Typing Indicator -->
        <div v-if="isTyping" class="flex justify-start">
          <div class="bg-white shadow-md rounded-2xl p-4 max-w-[70%]">
            <div class="flex gap-1">
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
              <span class="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
            </div>
          </div>
        </div>

        <div ref="messagesEndRef"></div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
      <div class="max-w-4xl mx-auto flex gap-3">
        <input
          type="text"
          v-model="inputMessage"
          @keypress="handleKeyPress"
          placeholder="Ketik pesan Anda..."
          class="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
        />
        <button
          @click="handleSendMessage"
          :disabled="inputMessage.trim() === ''"
          class="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white p-3 rounded-full transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg"
        >
          <Send class="w-6 h-6" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { MessageCircle, Send, ArrowLeft, User } from 'lucide-vue-next'

const router = useRouter()
const trainerName = 'varrel ojima'

const messagesContainer = ref(null)
const messagesEndRef = ref(null)
const isTyping = ref(false)
const inputMessage = ref('')

// Initial message from consultant
const messages = ref([
  {
    id: 1,
    text: 'Halo! Saya Varrel, trainer profesional FitLife. 👋\n\nAda yang bisa saya bantu untuk program latihan Anda? Pilih topik di bawah atau ketik pertanyaan Anda:',
    sender: 'consultant',
    timestamp: new Date(),
    quickReplies: ['Rekomendasi latihan untuk saya', 'Tips nutrisi & diet', 'Cara menurunkan berat badan', 'Cara membentuk otot']
  }
])

const goBack = () => {
  router.push({ name: 'Workout' })
}

const scrollToBottom = () => {
  nextTick(() => {
    messagesEndRef.value?.scrollIntoView({ behavior: 'smooth' })
  })
}

watch(messages, () => {
  scrollToBottom()
}, { deep: true })

const getSmartResponse = (userMessage) => {
  const message = userMessage.toLowerCase()

  // Latihan yang Cocok / Rekomendasi Program
  if ((message.includes('latihan') || message.includes('workout') || message.includes('olahraga') || message.includes('program')) && 
      (message.includes('cocok') || message.includes('pas') || message.includes('sesuai') || message.includes('rekomendasi') || message.includes('untuk saya') || message.includes('buat saya'))) {
    return {
      text: `Tentu! Di FitLife kami punya 3 program latihan yang bisa disesuaikan dengan level Anda:\n\n💪 **BEGINNER** - Untuk pemula yang baru memulai\n• Push-up, Plank, Squat dasar\n• 3x seminggu, 20-30 menit\n\n🔥 **INTERMEDIATE** - Untuk yang sudah rutin olahraga\n• Burpees, Lunges, Mountain Climber\n• 4x seminggu, 30-45 menit\n\n🏆 **ADVANCED** - Untuk yang ingin tantangan lebih\n• HIIT, Plyometric, Complex movements\n• 5-6x seminggu, 45-60 menit\n\nPilih level yang sesuai dengan kondisi Anda saat ini:`,
      quickReplies: ['Saya pemula (Beginner)', 'Saya sudah rutin (Intermediate)', 'Saya ingin tantangan (Advanced)', 'Bagaimana cara memilih level?']
    }
  }

  // Response untuk pilihan level Beginner
  if (message.includes('pemula') || message.includes('beginner')) {
    return {
      text: `Perfect untuk memulai! 🌟\n\n**Program Beginner** cocok untuk Anda:\n\n📋 Latihan yang akan Anda lakukan:\n• Push-up (modifikasi lutut jika perlu)\n• Bodyweight Squat\n• Plank 20-30 detik\n• Jumping Jacks\n• Lunges dasar\n\n⏰ Jadwal: 3x seminggu (Senin, Rabu, Jumat)\n⌛ Durasi: 20-30 menit per sesi\n\nTips: Fokus pada FORM yang benar dulu, bukan kecepatan atau repetisi!\n\nAda yang ingin ditanyakan lagi?`,
      quickReplies: ['Lihat detail latihan Beginner', 'Bagaimana dengan nutrisinya?', 'Berapa lama sampai lihat hasil?', 'Kembali ke menu utama']
    }
  }

  // Response untuk pilihan level Intermediate
  if (message.includes('sudah rutin') || message.includes('intermediate')) {
    return {
      text: `Bagus! Anda sudah punya fondasi yang kuat! 🔥\n\n**Program Intermediate** untuk Anda:\n\n📋 Latihan yang akan Anda lakukan:\n• Burpees\n• Diamond Push-up\n• Jump Squat\n• Mountain Climber\n• Bulgarian Split Squat\n• Plank variations\n\n⏰ Jadwal: 4x seminggu\n⌛ Durasi: 30-45 menit per sesi\n\nProgram ini akan meningkatkan kekuatan dan stamina Anda ke level berikutnya!\n\nAda yang ingin ditanyakan?`,
      quickReplies: ['Lihat detail latihan Intermediate', 'Tips meningkatkan performa', 'Bagaimana dengan nutrisinya?', 'Kembali ke menu utama']
    }
  }

  // Response untuk pilihan level Advanced
  if (message.includes('tantangan') || message.includes('advanced')) {
    return {
      text: `Siap untuk challenge serius! 🏆\n\n**Program Advanced** untuk Anda:\n\n📋 Latihan intensif:\n• HIIT Circuits\n• Plyometric exercises\n• One-arm push-up progressions\n• Pistol squat\n• Muscle-up progressions\n• Complex movement combinations\n\n⏰ Jadwal: 5-6x seminggu\n⌛ Durasi: 45-60 menit per sesi\n\n⚠️ Pastikan recovery yang cukup dan nutrisi optimal!\n\nAda yang ingin ditanyakan?`,
      quickReplies: ['Lihat detail latihan Advanced', 'Tips recovery yang baik', 'Nutrisi untuk performa tinggi', 'Kembali ke menu utama']
    }
  }

  // Cara memilih level
  if (message.includes('cara memilih level') || message.includes('pilih level')) {
    return {
      text: `Cara memilih level yang tepat: 🎯\n\n**Pilih BEGINNER jika:**\n• Baru pertama kali olahraga rutin\n• Sudah lama tidak olahraga (>6 bulan)\n• Tidak bisa push-up 10x dengan form benar\n\n**Pilih INTERMEDIATE jika:**\n• Sudah rutin olahraga 3+ bulan\n• Bisa push-up 15-20x dengan form benar\n• Familiar dengan gerakan dasar\n\n**Pilih ADVANCED jika:**\n• Sudah olahraga rutin >1 tahun\n• Bisa push-up 30+ x dengan mudah\n• Mencari tantangan dan intensitas tinggi\n\n💡 Tips: Lebih baik mulai dari level lebih rendah dan naik bertahap!`,
      quickReplies: ['Saya pilih Beginner', 'Saya pilih Intermediate', 'Saya pilih Advanced', 'Konsultasi lebih lanjut']
    }
  }

  // Kembali ke menu utama
  if (message.includes('menu utama') || message.includes('kembali')) {
    return {
      text: `Baik! Apa yang ingin Anda ketahui? 😊\n\nSaya bisa membantu Anda dengan:\n• Program latihan\n• Tips nutrisi & diet\n• Cara menurunkan/menaikkan berat badan\n• Membangun otot\n• Tips fitness lainnya\n\nSilakan pilih atau ketik pertanyaan Anda:`,
      quickReplies: ['Rekomendasi latihan', 'Tips nutrisi', 'Cara menurunkan berat', 'Cara membentuk otot']
    }
  }

  // Lihat detail latihan
  if (message.includes('lihat detail') || message.includes('detail latihan')) {
    return {
      text: `Untuk melihat detail lengkap setiap latihan dengan gambar dan instruksi, silakan kunjungi halaman Workout di FitLife! 📱\n\nDi sana Anda bisa:\n• Lihat video tutorial\n• Panduan step-by-step\n• Tips form yang benar\n• Variasi gerakan\n\nMau saya arahkan ke halaman Workout?`,
      quickReplies: ['Ya, buka halaman Workout', 'Tanya hal lain', 'Kembali ke menu utama']
    }
  }

  // Arahkan ke halaman workout
  if (message.includes('buka halaman workout') || message.includes('ke halaman workout')) {
    setTimeout(() => {
      router.push({ name: 'Workout' })
    }, 1500)
    return 'Baik! Saya akan mengarahkan Anda ke halaman Workout... 🏃'
  }

  // Nutrisi & Makanan
  if (message.includes('protein') || message.includes('nutrisi') || message.includes('makanan') || message.includes('makan') || message.includes('tips nutrisi')) {
    if (message.includes('tambahan') || message.includes('saran') || message.includes('rekomendasi')) {
      return {
        text: 'Untuk protein tambahan, saya sarankan:\n\n🍗 Dada ayam rebus (31g protein/100g)\n🥚 Telur rebus (2 butir = 13g protein)\n🥛 Greek yogurt (17g protein/cup)\n🐟 Ikan salmon (22g protein/100g)\n\nAnda bisa cek panduan nutrisi lengkap di menu Nutrisi!',
        quickReplies: ['Buka halaman Nutrisi', 'Makanan pre-workout', 'Makanan post-workout', 'Kembali ke menu utama']
      }
    }
    if (message.includes('sebelum') || message.includes('pre workout') || message.includes('pre-workout')) {
      return {
        text: 'Makanan sebelum workout:\n\n⏰ 30-60 menit sebelum latihan:\n• Pisang (energi cepat)\n• Oatmeal (karbohidrat kompleks)\n• Roti gandum + selai kacang\n• Greek yogurt + buah\n\n❌ Hindari makan berat 2 jam sebelum olahraga!',
        quickReplies: ['Makanan post-workout', 'Tips nutrisi lainnya', 'Kembali ke menu utama']
      }
    }
    if (message.includes('setelah') || message.includes('post workout') || message.includes('post-workout') || message.includes('recovery')) {
      return {
        text: 'Makanan setelah workout:\n\n⏰ Dalam 30-60 menit setelah latihan:\n• Protein shake + pisang\n• Dada ayam + nasi merah\n• Greek yogurt + granola\n• Smoothie protein\n\n📊 Rasio ideal: 3:1 (karbohidrat:protein)',
        quickReplies: ['Makanan pre-workout', 'Rekomendasi protein', 'Kembali ke menu utama']
      }
    }
    return {
      text: 'Nutrisi sangat penting untuk hasil optimal! 🥗\n\n📋 Prinsip dasar:\n• Protein: minimal 50g/hari untuk recovery otot\n• Karbohidrat kompleks untuk energi\n• Lemak sehat (alpukat, kacang)\n• Minum air 2-3 liter/hari\n\nMau tahu lebih detail?',
      quickReplies: ['Rekomendasi protein', 'Makanan pre-workout', 'Makanan post-workout', 'Buka halaman Nutrisi']
    }
  }

  // Buka halaman nutrisi
  if (message.includes('buka halaman nutrisi') || message.includes('ke halaman nutrisi')) {
    setTimeout(() => {
      router.push({ name: 'Nutrition' })
    }, 1500)
    return 'Baik! Saya akan mengarahkan Anda ke halaman Nutrisi... 🥗'
  }

  // Program & Level
  if (message.includes('pemula') || message.includes('beginner') || message.includes('baru mulai')) {
    return 'Untuk pemula, saya rekomendasikan mulai dengan program Beginner dulu. Program ini fokus pada membangun fondasi yang kuat dengan gerakan dasar seperti push-up, squat, dan plank. Latihan 3-4x seminggu, 30-45 menit per sesi.'
  }
  if (message.includes('intermediate') || message.includes('menengah')) {
    return 'Program Intermediate cocok untuk Anda yang sudah rutin latihan 3-6 bulan. Fokus pada peningkatan intensitas dengan circuit training, HIIT, dan beban lebih berat. Durasi 45-60 menit, 4-5x seminggu.'
  }
  if (message.includes('advanced') || message.includes('lanjutan')) {
    return 'Program Advanced dirancang untuk atlet berpengalaman. Kombinasi strength training, plyometric, dan endurance dengan intensitas tinggi. Minimal 6 bulan pengalaman latihan konsisten diperlukan.'
  }

  // Durasi & Frekuensi
  if (message.includes('berapa lama') || message.includes('durasi') || message.includes('waktu latihan')) {
    return 'Durasi latihan ideal adalah 30-45 menit untuk pemula, 45-60 menit untuk intermediate, dan 60-90 menit untuk advanced. Kualitas lebih penting dari kuantitas!'
  }
  if (message.includes('berapa kali') || message.includes('seminggu') || message.includes('frekuensi')) {
    return 'Frekuensi ideal: Pemula 3-4x/minggu, Intermediate 4-5x/minggu, Advanced 5-6x/minggu. Pastikan ada rest day untuk recovery ya!'
  }

  // Target & Goals
  if ((message.includes('turun') || message.includes('menurunkan') || message.includes('kurangi')) && (message.includes('berat') || message.includes('bb') || message.includes('kurus'))) {
    return {
      text: 'Untuk menurunkan berat badan: ⚖️\n\n📋 Strategi yang efektif:\n• Defisit kalori 300-500 kkal/hari\n• Kombinasi cardio (HIIT, jogging) + strength training\n• Latihan 4-5x seminggu\n• Protein tinggi untuk maintain otot\n• Tidur cukup 7-8 jam\n\n💡 Tips: Fokus pada fat loss, bukan weight loss!',
      quickReplies: ['Program latihan fat loss', 'Tips diet sehat', 'Berapa lama lihat hasil?', 'Kembali ke menu utama']
    }
  }
  if ((message.includes('naik') || message.includes('tambah') || message.includes('bentuk')) && (message.includes('massa') || message.includes('otot') || message.includes('bulking'))) {
    return {
      text: 'Untuk menambah massa otot: 💪\n\n📋 Strategi yang efektif:\n• Surplus kalori 300-500 kkal/hari\n• Protein 1.6-2g/kg berat badan\n• Strength training 4-5x seminggu\n• Fokus compound movements\n• Progressive overload\n• Rest day untuk recovery\n\n💡 Tips: Sabar, hasil butuh waktu 8-12 minggu!',
      quickReplies: ['Program strength training', 'Rekomendasi protein', 'Cara progressive overload', 'Kembali ke menu utama']
    }
  }
  if (message.includes('sixpack') || message.includes('six pack') || message.includes('perut')) {
    return {
      text: 'Untuk sixpack/perut rata: 🎯\n\n📋 Yang perlu dilakukan:\n1. Diet - Body fat <15% (pria), <20% (wanita)\n2. Core exercises - Plank, crunches, leg raises\n3. Cardio - Untuk bakar lemak\n4. Full body training - Jangan fokus perut saja\n\n⚠️ Abs are made in the kitchen! Diet adalah 80% hasilnya.',
      quickReplies: ['Latihan core terbaik', 'Tips diet sixpack', 'Berapa lama dapat sixpack?', 'Kembali ke menu utama']
    }
  }

  // Teknik & Tips
  if (message.includes('warming') || message.includes('pemanasan')) {
    return 'Warming up penting untuk mencegah cedera! Lakukan 5-10 menit: dynamic stretching, light cardio (jogging di tempat), dan mobilitas sendi. Jangan skip ya!'
  }
  if (message.includes('cooling') || message.includes('pendinginan')) {
    return 'Cooling down membantu recovery! Lakukan 5-10 menit: light cardio untuk turunkan heart rate, static stretching, dan deep breathing. Otot akan lebih fleksibel dan mengurangi soreness.'
  }
  if (message.includes('cedera') || message.includes('sakit') || message.includes('nyeri')) {
    return 'Jika ada nyeri atau cedera, segera istirahat dan jangan dipaksakan! Gunakan metode RICE (Rest, Ice, Compression, Elevation). Jika nyeri berlanjut >3 hari, konsultasikan ke dokter atau fisioterapis.'
  }

  // Kegiatan Sehari-hari & Jadwal
  if (message.includes('sibuk') || message.includes('padat') || message.includes('kerja') || message.includes('kantor')) {
    return 'Untuk jadwal padat, saya sarankan: 1) Latihan singkat 20-30 menit HIIT di pagi hari sebelum kerja, 2) Manfaatkan waktu istirahat untuk stretching 5-10 menit, 3) Jalan kaki saat makan siang. Konsistensi lebih penting dari durasi!'
  }
  if (message.includes('santai') || message.includes('libur') || message.includes('waktu luang') || message.includes('free')) {
    return 'Waktu luang adalah kesempatan bagus! Anda bisa: 1) Latihan lebih panjang 60-90 menit, 2) Coba aktivitas outdoor seperti jogging, bersepeda, atau hiking, 3) Ikut kelas group fitness untuk variasi dan motivasi.'
  }
  if (message.includes('pagi') || message.includes('bangun')) {
    return 'Latihan pagi sangat bagus! Manfaatnya: metabolisme meningkat sepanjang hari, lebih fokus bekerja, dan tidur lebih nyenyak. Tips: siapkan baju olahraga malam sebelumnya, dan mulai dengan pemanasan ringan.'
  }
  if (message.includes('malam') || message.includes('sore') || message.includes('pulang kerja')) {
    return 'Latihan sore/malam juga efektif! Otot lebih fleksibel dan suhu tubuh optimal. Tips: hindari latihan intens 2-3 jam sebelum tidur, dan pilih aktivitas yang membantu relaksasi seperti yoga jika mendekati waktu tidur.'
  }
  if (message.includes('weekend') || message.includes('akhir pekan') || message.includes('sabtu') || message.includes('minggu')) {
    return 'Weekend perfect untuk latihan lebih panjang atau aktivitas outdoor! Saran: 1) Long run atau bersepeda, 2) Hiking bersama teman/keluarga, 3) Coba olahraga baru seperti renang atau climbing. Nikmati prosesnya!'
  }

  // Gaya Hidup & Kebiasaan
  if (message.includes('tidur') || message.includes('istirahat') || message.includes('sleep')) {
    return 'Tidur sangat penting untuk recovery! Target 7-9 jam per malam. Tips: 1) Jadwal tidur konsisten, 2) Hindari gadget 1 jam sebelum tidur, 3) Kamar gelap dan sejuk, 4) Hindari kafein setelah jam 2 siang.'
  }
  if (message.includes('stress') || message.includes('stres') || message.includes('pikiran') || message.includes('cemas')) {
    return 'Olahraga adalah anti-stres alami! Endorfin yang dilepaskan membantu mood. Saran: 1) Yoga dan meditasi untuk relaksasi, 2) Cardio ringan seperti jalan kaki, 3) Stretching sebelum tidur. Jangan lupa self-care! 🧘'
  }
  if (message.includes('malas') || message.includes('males') || message.includes('tidak mood') || message.includes('ga mood')) {
    return 'Wajar kok merasa malas! Tips mengatasinya: 1) Mulai dengan 5 menit saja - biasanya akan lanjut sendiri, 2) Siapkan playlist favorit, 3) Ajak teman workout bareng, 4) Ingat alasan kenapa Anda mulai. Small steps count! 🚶'
  }
  if (message.includes('konsisten') || message.includes('rutin') || message.includes('habit') || message.includes('kebiasaan')) {
    return 'Membangun habit butuh waktu 21-66 hari. Tips: 1) Jadwalkan seperti meeting penting, 2) Siapkan baju olahraga malam sebelumnya, 3) Cari workout buddy, 4) Track progress di Tracker, 5) Reward diri sendiri setelah milestone!'
  }

  // Usia & Kondisi Khusus
  if (message.includes('tua') || message.includes('usia') || message.includes('umur') || message.includes('lansia')) {
    return 'Usia bukan halangan! Yang penting: 1) Konsultasi dokter dulu, 2) Mulai perlahan dengan low-impact exercise, 3) Fokus pada fleksibilitas dan keseimbangan, 4) Strength training ringan untuk massa otot. Never too late! 💪'
  }
  if (message.includes('hamil') || message.includes('kehamilan') || message.includes('pregnant')) {
    return 'Untuk ibu hamil, WAJIB konsultasi dokter dulu ya! Umumnya: 1) Hindari gerakan berbaring telentang setelah trimester 1, 2) Prenatal yoga aman, 3) Jalan kaki bagus, 4) Hindari olahraga kontak. Safety first! 🤰'
  }

  // Motivasi & Umum
  if (message.includes('motivasi') || message.includes('semangat') || message.includes('menyerah')) {
    return 'Jangan menyerah! Fitness adalah journey, bukan sprint. Progress mungkin lambat, tapi setiap langkah kecil membawa Anda lebih dekat ke goal. Fokus pada konsistensi, bukan perfection. You got this! 💪'
  }
  if (message.includes('mulai') || message.includes('start') || message.includes('awal')) {
    return 'Great decision untuk memulai! Saran saya: 1) Set goal yang realistic, 2) Mulai dari program Beginner, 3) Catat progress di Tracker, 4) Fokus pada form/teknik dulu sebelum beban. Siap memulai perjalanan fitness Anda?'
  }

  // Sapaan & Greeting
  if (message.includes('halo') || message.includes('hai') || message.includes('hi') || message.includes('hello') || message.includes('hey')) {
    return {
      text: 'Halo! 👋 Selamat datang di FitLife!\n\nSaya trainer virtual Anda. Saya bisa membantu Anda dengan:\n• Program latihan sesuai level\n• Tips nutrisi & diet\n• Panduan menurunkan/menaikkan berat badan\n• Tips fitness lainnya\n\nMau mulai dari mana?',
      quickReplies: ['Rekomendasi latihan untuk saya', 'Tips nutrisi', 'Cara menurunkan berat badan', 'Cara membentuk otot']
    }
  }
  if (message.includes('terima kasih') || message.includes('makasih') || message.includes('thanks') || message.includes('thank you')) {
    return {
      text: 'Sama-sama! 😊 Senang bisa membantu.\n\nAda hal lain yang ingin ditanyakan?',
      quickReplies: ['Tanya hal lain', 'Kembali ke menu utama', 'Lihat halaman Workout']
    }
  }
  if (message.includes('siapa') && (message.includes('kamu') || message.includes('anda') || message.includes('lo') || message.includes('lu'))) {
    return {
      text: 'Saya adalah trainer virtual FitLife! 🤖💪\n\nSaya di sini untuk membantu Anda dengan:\n• Program workout personal\n• Tips nutrisi & diet\n• Panduan fitness\n\nApa yang ingin Anda tanyakan?',
      quickReplies: ['Rekomendasi latihan', 'Tips nutrisi', 'Cara diet sehat', 'Kembali ke menu utama']
    }
  }
  if (message.includes('apa kabar') || message.includes('gimana') || message.includes('baik')) {
    return {
      text: 'Saya selalu siap membantu Anda! 💪\n\nBagaimana dengan Anda? Sudah workout hari ini?',
      quickReplies: ['Belum, rekomendasi latihan dong', 'Sudah, mau tanya nutrisi', 'Mau tanya hal lain']
    }
  }
  if (message.includes('bye') || message.includes('dadah') || message.includes('sampai jumpa') || message.includes('selamat tinggal')) {
    return 'Sampai jumpa! 👋 Semangat terus dengan fitness journey-nya ya! Jangan lupa olahraga teratur dan makan bergizi. See you! 💪'
  }

  // Default responses dengan quick replies
  return {
    text: 'Saya siap membantu Anda! 😊\n\nSilakan pilih topik yang ingin dibahas, atau ketik pertanyaan Anda langsung:',
    quickReplies: ['Rekomendasi latihan untuk saya', 'Tips nutrisi & diet', 'Cara menurunkan berat badan', 'Cara membentuk otot']
  }
}

const handleSendMessage = () => {
  if (inputMessage.value.trim() === '') return

  const newMessage = {
    id: messages.value.length + 1,
    text: inputMessage.value,
    sender: 'user',
    timestamp: new Date()
  }

  messages.value.push(newMessage)
  const userInput = inputMessage.value
  inputMessage.value = ''

  // Cek jika pesan user random/asal (hanya huruf tanpa spasi dan panjang > 5)
  const isRandomText = /^[A-Za-z]+$/.test(userInput.trim()) && 
    userInput.trim().length > 5 && 
    !userInput.trim().toLowerCase().match(/^(halo|hai|hi|hello|hey|bye|dadah|terima|makasih|thanks|apa|siapa|bagaimana|gimana|latihan|workout|olahraga|nutrisi|makanan|makan|protein|diet|berat|otot|sixpack|perut|pemula|beginner|intermediate|advanced|tips|motivasi|semangat|mulai|start|tidur|istirahat|stress|malas|pagi|malam|sore|weekend)$/i);
  
  if (isRandomText) {
    isTyping.value = true;
    setTimeout(() => {
      const consultantMessage = {
        id: messages.value.length + 1,
        text: 'Maaf, saya tidak memahami pesan Anda. 😅\n\nMohon masukkan pertanyaan atau kata yang lebih jelas ya!',
        sender: 'consultant',
        timestamp: new Date(),
        quickReplies: ['Rekomendasi latihan untuk saya', 'Tips nutrisi & diet', 'Cara menurunkan berat badan', 'Cara membentuk otot']
      };
      messages.value.push(consultantMessage);
      isTyping.value = false;
    }, 1200);
    return;
  }

  // Simulate consultant typing and response
  isTyping.value = true
  setTimeout(() => {
    const smartResponse = getSmartResponse(userInput)
    // Handle response with quick replies
    let responseText = ''
    let quickReplies = []
    if (typeof smartResponse === 'object') {
      responseText = smartResponse.text
      quickReplies = smartResponse.quickReplies || []
    } else {
      responseText = smartResponse
    }
    const consultantMessage = {
      id: messages.value.length + 1,
      text: responseText,
      sender: 'consultant',
      timestamp: new Date(),
      quickReplies: quickReplies
    }
    messages.value.push(consultantMessage)
    isTyping.value = false
  }, 1500 + Math.random() * 1000)
}

const handleQuickReply = (reply) => {
  inputMessage.value = reply
  handleSendMessage()
}

const handleKeyPress = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleSendMessage()
  }
}

const formatTime = (date) => {
  return date.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

onMounted(() => {
  scrollToBottom()
})
</script>

<style scoped>
/* Custom animation for typing indicator */
@keyframes bounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-4px);
  }
}
</style>
