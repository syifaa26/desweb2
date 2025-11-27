import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorkoutPage from '../WorkoutPage.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
import WorkoutProgramCard from '../../components/ui/WorkoutProgramCard.vue'
import TipsCard from '../../components/ui/TipsCard.vue'

describe('WorkoutPage', () => {
    it('renders the page header', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.findComponent(PageHeader).exists()).toBe(true)
    })

    it('displays "Program Latihan" title', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Program Latihan')
    })

    it('renders workout programs section', () => {
        const wrapper = mount(WorkoutPage)
        const programCards = wrapper.findAllComponents(WorkoutProgramCard)
        expect(programCards.length).toBe(3)
    })

    it('renders all three workout levels', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Pemula (Beginner)')
        expect(wrapper.text()).toContain('Menengah (Intermediate)')
        expect(wrapper.text()).toContain('Lanjutan (Advanced)')
    })

    it('displays "Panduan Memilih Level yang Tepat" section', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Panduan Memilih Level yang Tepat')
    })

    it('renders tips cards section', () => {
        const wrapper = mount(WorkoutPage)
        const tipsCards = wrapper.findAllComponents(TipsCard)
        expect(tipsCards.length).toBe(3)
    })

    it('renders all tip card titles', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Level Pemula')
        expect(wrapper.text()).toContain('Level Menengah')
        expect(wrapper.text()).toContain('Level Lanjutan')
    })

    it('displays CTA section', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Siap Memulai Program Latihan?')
    })

    it('renders "Konsultasi Gratis" button', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Konsultasi Gratis')
    })

    it('displays workout program details', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Bodyweight + Cardio Ringan')
        expect(wrapper.text()).toContain('Strength + HIIT')
        expect(wrapper.text()).toContain('Weight Training + HIIT')
    })

    it('displays frequency information', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('3-4x/minggu')
        expect(wrapper.text()).toContain('4-5x/minggu')
        expect(wrapper.text()).toContain('5-6x/minggu')
    })

    it('has three main sections', () => {
        const wrapper = mount(WorkoutPage)
        const sections = wrapper.findAll('section')
        expect(sections.length).toBe(3) // Programs, Tips, CTA
    })

    it('displays fokus utama for each level', () => {
        const wrapper = mount(WorkoutPage)
        expect(wrapper.text()).toContain('Membangun fondasi kekuatan dasar')
        expect(wrapper.text()).toContain('Mengembangkan kekuatan')
        expect(wrapper.text()).toContain('Pembentukan massa otot')
    })

    it('renders page header with lightning icon', () => {
        const wrapper = mount(WorkoutPage)
        const header = wrapper.findComponent(PageHeader)
        expect(header.exists()).toBe(true)
        expect(header.props('title')).toBe('Program Latihan')
    })

    it('applies correct color to each workout level', () => {
        const wrapper = mount(WorkoutPage)
        const programCards = wrapper.findAllComponents(WorkoutProgramCard)
        expect(programCards[0].props('levelColor')).toBe('teal')
        expect(programCards[1].props('levelColor')).toBe('cyan')
        expect(programCards[2].props('levelColor')).toBe('blue')
    })
})
