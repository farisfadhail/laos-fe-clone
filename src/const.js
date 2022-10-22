import { version } from '../package.json'

const constant = {
    apiUrl: import.meta.env.VITE_APP_API_URL,
    title: import.meta.env.VITE_APP_TITLE,
    version,
    menus: [
        {
            title: 'Blog',
            route: '/blog',
        },
        {
            title: 'Learning Path',
            route: 'learningpath',
        },
        {
            title: 'Event',
            route: 'event',
        },
        {
            title: 'Program Kerja',
            route: 'proker',
        },
        {
            title: 'Tentang Kami',
            route: 'about',
        },
    ],
}

export default constant