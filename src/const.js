import { version } from '../package.json'

const constant = {
    apiUrl: import.meta.env.VITE_APP_API_URL,
    title: import.meta.env.VITE_APP_TITLE,
    version,
    menus: [
        {
            title: 'Blog',
            route: '/blog',
            disabled: true,
        },
        {
            title: 'Learning Path',
            route: 'learningpath',
            disabled: true,
        },
        {
            title: 'Event',
            route: 'event',
            disabled: true,
        },
        {
            title: 'Program Kerja',
            route: 'proker',
            disabled: false,
        },
        {
            title: 'Tentang Kami',
            route: 'about',
            disabled: false,
        },
    ],
}

export default constant