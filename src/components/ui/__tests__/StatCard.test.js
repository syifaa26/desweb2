import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import StatCard from '../StatCard.vue'

describe('StatCard', () => {
    it('renders value and label correctly', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: '2000',
                label: 'Kalori per Hari'
            }
        })
        expect(wrapper.text()).toContain('2000')
        expect(wrapper.text()).toContain('Kalori per Hari')
    })

    it('renders value with suffix', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: '55',
                label: 'Protein',
                suffix: 'g'
            }
        })
        expect(wrapper.text()).toContain('55g')
    })

    it('renders numeric value', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: 2000,
                label: 'Calories'
            }
        })
        expect(wrapper.text()).toContain('2000')
    })

    it('applies teal color gradient by default', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: '100',
                label: 'Test'
            }
        })
        const valueDiv = wrapper.find('.bg-gradient-to-r')
        expect(valueDiv.classes()).toContain('from-teal-600')
        expect(valueDiv.classes()).toContain('to-cyan-600')
    })

    it('applies custom color gradient', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: '100',
                label: 'Test',
                color: 'orange'
            }
        })
        const valueDiv = wrapper.find('.bg-gradient-to-r')
        expect(valueDiv.classes()).toContain('from-orange-600')
        expect(valueDiv.classes()).toContain('to-red-600')
    })

    it('falls back to teal for unknown color', () => {
        const wrapper = mount(StatCard, {
            props: {
                value: '100',
                label: 'Test',
                color: 'unknown-color'
            }
        })
        const valueDiv = wrapper.find('.bg-gradient-to-r')
        expect(valueDiv.classes()).toContain('from-teal-600')
    })
})
