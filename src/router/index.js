import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Homepage.vue'
import About from '../pages/Aboutpage.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'FitLife - Gaya Hidup Sehat'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'Tentang Kami - FitLife'
        }
    },
    {
        path: '/workout',
        name: 'Workout',
        component: () => import('../pages/WorkoutPage.vue'),
        meta: {
            title: 'Program Latihan - FitLife'
        }
    },
    {
        path: '/nutrition',
        name: 'Nutrition',
        component: () => import('../views/Nutrition.vue'),
        meta: {
            title: 'Panduan Nutrisi - FitLife'
        }
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('../views/Chat.vue'),
        meta: {
            title: 'Konsultasi - FitLife'
        }
    },
    {
        path: '/tracker',
        name: 'Tracker',
        component: () => import('../pages/TrackerPage.vue'),
        meta: {
            title: 'Tracker Progres - FitLife'
        }
    },
    {
        path: '/profile', 
        name: 'Profile',
        component: () => import('../views/profile.vue'),
        meta: {
            title: 'Profil Saya - FitLife'
        }
    },
    // Route untuk halaman yang belum ada (404)
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        redirect: '/'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // Scroll ke atas saat pindah halaman
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

// Update title saat route berubah
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'FitLife'
    next()
})

export default router
