import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NutritionCard from '../NutritionCard.vue'
import { Flame, Beef, Wheat } from 'lucide-vue-next'

describe('NutritionCard', () => {
    const mockNutritionItems = [
        { icon: Flame, label: 'Kalori', value: '165kcal' },
        { icon: Beef, label: 'Protein', value: '31g' },
        { icon: Wheat, label: 'Karbohidrat', value: '0g' }
    ]

    it('renders title correctly', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Dada Ayam Rebus (100g)',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        expect(wrapper.text()).toContain('Dada Ayam Rebus (100g)')
    })

    it('renders badge correctly', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        expect(wrapper.text()).toContain('165 kkal')
    })

    it('renders all nutrition items', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        expect(wrapper.text()).toContain('Kalori')
        expect(wrapper.text()).toContain('165kcal')
        expect(wrapper.text()).toContain('Protein')
        expect(wrapper.text()).toContain('31g')
        expect(wrapper.text()).toContain('Karbohidrat')
        expect(wrapper.text()).toContain('0g')
    })

    it('renders correct number of nutrition items', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        const items = wrapper.findAll('.space-y-3 > div')
        expect(items.length).toBe(3)
    })

    it('applies teal badge color by default', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        const badge = wrapper.find('span.rounded-full')
        expect(badge.classes()).toContain('bg-teal-100')
        expect(badge.classes()).toContain('text-teal-600')
    })

    it('applies custom badge color', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                badgeColor: 'cyan',
                nutritionItems: mockNutritionItems
            }
        })
        const badge = wrapper.find('span.rounded-full')
        expect(badge.classes()).toContain('bg-cyan-100')
        expect(badge.classes()).toContain('text-cyan-600')
    })

    it('renders icon components for each nutrition item', () => {
        const wrapper = mount(NutritionCard, {
            props: {
                title: 'Test Food',
                badge: '165 kkal',
                nutritionItems: mockNutritionItems
            }
        })
        expect(wrapper.findComponent(Flame).exists()).toBe(true)
        expect(wrapper.findComponent(Beef).exists()).toBe(true)
        expect(wrapper.findComponent(Wheat).exists()).toBe(true)
    })
})
