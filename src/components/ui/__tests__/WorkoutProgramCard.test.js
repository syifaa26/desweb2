import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import WorkoutProgramCard from '../WorkoutProgramCard.vue'

describe('WorkoutProgramCard', () => {
    const defaultProps = {
        level: 'Pemula (Beginner)',
        levelNumber: 1,
        fokusUtama: 'Membangun fondasi kekuatan dasar',
        jenisLatihan: 'Bodyweight + Cardio Ringan',
        frekuensi: '3-4x/minggu',
        levelColor: 'teal'
    }

    it('renders level number correctly', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('1')
    })

    it('renders level name correctly', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Pemula (Beginner)')
    })

    it('renders fokus utama correctly', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Membangun fondasi kekuatan dasar')
    })

    it('renders jenis latihan correctly', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Bodyweight + Cardio Ringan')
    })

    it('renders frekuensi correctly', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('3-4x/minggu')
    })

    it('renders "Selengkapnya" button', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Selengkapnya')
    })

    it('applies teal color class by default', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        const levelBadge = wrapper.find('.bg-teal-600')
        expect(levelBadge.exists()).toBe(true)
    })

    it('applies custom color class', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: {
                ...defaultProps,
                levelColor: 'cyan'
            }
        })
        const levelBadge = wrapper.find('.bg-cyan-600')
        expect(levelBadge.exists()).toBe(true)
    })

    it('renders all section labels', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        expect(wrapper.text()).toContain('Fokus Utama')
        expect(wrapper.text()).toContain('Jenis Latihan Utama')
        expect(wrapper.text()).toContain('Frekuensi')
    })

    it('has hover effect classes', () => {
        const wrapper = mount(WorkoutProgramCard, {
            props: defaultProps
        })
        const card = wrapper.find('.hover\\:shadow-md')
        expect(card.exists()).toBe(true)
    })
})
