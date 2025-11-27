import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import TipsCard from '../TipsCard.vue'
import { Target } from 'lucide-vue-next'

describe('TipsCard', () => {
    const defaultProps = {
        level: 'Pemula',
        icon: Target,
        title: 'Level Pemula',
        description: 'Cocok untuk yang baru memulai',
        tips: [
            'Fokus pada teknik dasar',
            'Intensitas latihan ringan',
            'Membangun habit olahraga'
        ],
        color: 'teal'
    }

    it('renders title correctly', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Level Pemula')
    })

    it('renders description correctly', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Cocok untuk yang baru memulai')
    })

    it('renders all tips', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Fokus pada teknik dasar')
        expect(wrapper.text()).toContain('Intensitas latihan ringan')
        expect(wrapper.text()).toContain('Membangun habit olahraga')
    })

    it('renders correct number of tips', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        const tipItems = wrapper.findAll('li')
        expect(tipItems.length).toBe(3)
    })

    it('renders icon component', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        expect(wrapper.findComponent(Target).exists()).toBe(true)
    })

    it('applies teal color classes by default', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        const iconContainer = wrapper.find('.bg-teal-100')
        expect(iconContainer.exists()).toBe(true)
    })

    it('applies custom color classes', () => {
        const wrapper = mount(TipsCard, {
            props: {
                ...defaultProps,
                color: 'cyan'
            }
        })
        const iconContainer = wrapper.find('.bg-cyan-100')
        expect(iconContainer.exists()).toBe(true)
    })

    it('has border with color', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        const card = wrapper.find('.border-teal-200')
        expect(card.exists()).toBe(true)
    })

    it('has hover effect', () => {
        const wrapper = mount(TipsCard, {
            props: defaultProps
        })
        const card = wrapper.find('.hover\\:shadow-lg')
        expect(card.exists()).toBe(true)
    })

    it('renders with empty tips array', () => {
        const wrapper = mount(TipsCard, {
            props: {
                ...defaultProps,
                tips: []
            }
        })
        const tipItems = wrapper.findAll('li')
        expect(tipItems.length).toBe(0)
    })

    it('handles long tip text', () => {
        const longTip = 'This is a very long tip text that should still render correctly without breaking the layout'
        const wrapper = mount(TipsCard, {
            props: {
                ...defaultProps,
                tips: [longTip]
            }
        })
        expect(wrapper.text()).toContain(longTip)
    })
})
