import { createRouter, createWebHashHistory } from "vue-router";
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Event from '../views/Event.vue'
import LearningPath from '../views/LearningPath.vue'
import Proker from '../views/Proker.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const routes = [
    { 
        path: '/',
        name: 'Home',
        component: Home 
    },
    { 
        path: '/blog',
        name: 'Blog',
        component: Blog 
    },
    { 
        path: '/event',
        name: 'Event',
        component: Event 
    },
    { 
        path: '/learningpath',
        name: 'LearningPath',
        component: LearningPath 
    },
    { 
        path: '/proker',
        name: 'Proker',
        component: Proker 
    },
    { 
        path: '/about',
        name: 'About',
        component: About 
    },
    { 
        path: '/login',
        name: 'Login',
        component: Login 
    },
    { 
        path: '/register',
        name: 'Register',
        component: Register 
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router