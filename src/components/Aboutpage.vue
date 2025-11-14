<script setup>
import { Heart, ListChecks, Apple, MessageCircle } from 'lucide-vue-next'
import ImageWithFallback from './ui/ImageWithFallback.vue'
import FeatureCard from './ui/FeatureCard.vue'

const features = [
	{
		icon: Heart,
		title: 'Kemudahan Akses',
		description: 'Mudah di akses oleh siapapun, kapanpun, dimanapun',
		color: 'teal',
	},
	{
		icon: ListChecks,
		title: 'Program Terstruktur',
		description: 'Menyediakan pilihan program yang jelas dan mudah diikuti',
		color: 'cyan',
	},
	{
		icon: Apple,
		title: 'Panduan Nutrisi',
		description: 'Edukasi makanan bergizi dan tips keseharian untuk tubuh lebih bugar.',
		color: 'teal',
	},
	{
		icon: MessageCircle,
		title: 'Konsultasi Gratis',
		description:
			'Layanan konsultasi gratis bersama ahli FitLife untuk menentukan latihan dan nutrisi terbaik sesuai kebutuhan',
		color: 'cyan',
	},
]
</script>

<template>
	<div class="min-h-screen bg-gray-50">
		<!-- Header -->
		<div class="relative h-[300px] overflow-hidden">
			<ImageWithFallback
				src="https://images.unsplash.com/photo-1645652367526-a0ecb717650a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMHdlbGxuZXNzfGVufDF8fHx8MTc2MDQxOTk3MHww&ixlib=rb-4.1.0&q=80&w=1080"
				alt="About FitLife"
				class="w-full h-full object-cover"
			/>
			<div class="absolute inset-0 bg-gradient-to-br from-teal-600/90 to-cyan-600/90" />
			<div class="absolute inset-0 flex items-center justify-center text-white">
				<div class="text-center px-4">
					<h1 class="mb-4 text-3xl md:text-4xl font-bold">Tentang FitLife</h1>
					<p class="text-teal-50 max-w-2xl mx-auto">
						FitLife adalah platform yang membantu masyarakat membangun gaya hidup sehat melalui panduan latihan, nutrisi, dan kebiasaan positif sehari-hari.
					</p>
				</div>
			</div>
		</div>

		<!-- Mission Section -->
		<section class="py-16 px-4">
			<div class="max-w-4xl mx-auto">
				<div class="bg-white p-8 md:p-12 rounded-xl shadow-md">
					<h2 class="text-center mb-8 text-2xl md:text-3xl font-semibold">Misi Kami</h2>
					<p class="text-gray-600 text-center mb-8">
						FitLife hadir untuk mempermudah setiap orang dalam membangun gaya hidup sehat secara menyeluruh.
						Kami berkomitmen menyediakan panduan olahraga terstruktur, serta rekomendasi nutrisi yang mudah diikuti.
					</p>

					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<FeatureCard
							v-for="(f, i) in features"
							:key="i"
							:icon="f.icon"
							:title="f.title"
							:description="f.description"
							:color="f.color"
						/>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact CTA -->
		<section class="py-16 px-4">
			<div class="max-w-4xl mx-auto bg-gradient-to-br from-teal-600 via-teal-500 to-cyan-600 rounded-2xl p-8 md:p-12 text-white text-center shadow-xl">
				<h2 class="mb-4 text-2xl md:text-3xl font-semibold">Tunggu apa lagi?</h2>
				<p class="mb-8 text-teal-50">Temukan manfaat nyata bersama FitLife hari ini</p>
				<button class="bg-white text-teal-600 px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors shadow-lg">
					Mulai Sekarang
				</button>
			</div>
		</section>
	</div>
</template>

<style scoped>
</style>
