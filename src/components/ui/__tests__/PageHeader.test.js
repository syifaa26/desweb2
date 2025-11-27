import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import PageHeader from '../PageHeader.vue'
import { Apple } from 'lucide-vue-next'

describe('PageHeader', () => {
    it('renders title correctly', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title'
            }
        })
        expect(wrapper.text()).toContain('Test Title')
    })

    it('renders description when provided', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title',
                description: 'Test description text'
            }
        })
        expect(wrapper.text()).toContain('Test description text')
    })

    it('does not render description when not provided', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title'
            }
        })
        const description = wrapper.find('p')
        expect(description.exists()).toBe(false)
    })

    it('renders icon component when provided', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title',
                icon: Apple
            }
        })
        expect(wrapper.findComponent(Apple).exists()).toBe(true)
    })

    it('applies custom gradient class', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title',
                bgGradient: 'from-blue-600 to-purple-600'
            }
        })
        const section = wrapper.find('section')
        expect(section.classes()).toContain('from-blue-600')
        expect(section.classes()).toContain('to-purple-600')
    })

    it('applies default gradient when not provided', () => {
        const wrapper = mount(PageHeader, {
            props: {
                title: 'Test Title'
            }
        })
        const section = wrapper.find('section')
        expect(section.classes()).toContain('from-teal-600')
    })
})
