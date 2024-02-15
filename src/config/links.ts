import { type IconType } from 'react-icons'
import { FaPen, FaUser, FaTableColumns } from 'react-icons/fa6'

interface Link {
    name: string,
    path: string,
    icon: IconType
}

const HeaderLinks: Link[] = [
    {
        name: 'Blog',
        path: '/blog',
        icon: FaPen
    },
    {
        name: 'About',
        path: '/about',
        icon: FaUser
    },
    {
        name: 'Projects',
        path: '/projects',
        icon: FaTableColumns
    }
]

export { HeaderLinks }