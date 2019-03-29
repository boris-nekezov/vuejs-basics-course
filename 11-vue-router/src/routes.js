import Home from './views/Home.vue'
import About from './views/About.vue'
import Projects from './views/Projects.vue'
import Contact from './views/Contact.vue'

export const routes = [
    { 
        path: '',
        component: Home
    },
    { 
        path: '/about',
        component: About
    },
    { 
        path: '/projects',
        component: Projects
    },
    { 
        path: '/contact',
        component: Contact
    },
    {
        path: '*',
        redirect: '/'
    }
];