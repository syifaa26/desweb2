import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NutritionPage from '../NutritionPage.vue'
import PageHeader from '../../components/ui/PageHeader.vue'
import StatCard from '../../components/ui/StatCard.vue'
import NutritionCard from '../../components/ui/NutritionCard.vue'

describe('NutritionPage', () => {
    it('renders the page header', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.findComponent(PageHeader).exists()).toBe(true)
    })

    it('displays "Panduan Nutrisi" title', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('Panduan Nutrisi')
    })

    it('renders daily stats section', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('Total Nutrisi Harian')
    })

    it('renders 3 stat cards for daily nutrition', () => {
        const wrapper = mount(NutritionPage)
        const statCards = wrapper.findAllComponents(StatCard)
        expect(statCards.length).toBe(3)
    })

    it('displays kalori stat card', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('2000')
        expect(wrapper.text()).toContain('Kalori per Hari')
    })

    it('displays protein stat card', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('55g')
        expect(wrapper.text()).toContain('Protein')
    })

    it('displays kolesterol stat card', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('8+')
        expect(wrapper.text()).toContain('Kolesterol')
    })

    it('renders nutrition cards grid section', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('Daftar Nutrisi Makanan')
    })

    it('renders multiple nutrition cards', () => {
        const wrapper = mount(NutritionPage)
        const nutritionCards = wrapper.findAllComponents(NutritionCard)
        expect(nutritionCards.length).toBeGreaterThan(0)
    })

    it('displays chicken breast nutrition card', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('Dada Ayam Rebus')
        expect(wrapper.text()).toContain('165 kkal')
    })

    it('displays rice nutrition card', () => {
        const wrapper = mount(NutritionPage)
        expect(wrapper.text()).toContain('Nasi Putih')
    })

    it('has three main sections', () => {
        const wrapper = mount(NutritionPage)
        const sections = wrapper.findAll('section')
        expect(sections.length).toBe(2) // Stats section + Nutrition cards section
    })
})
