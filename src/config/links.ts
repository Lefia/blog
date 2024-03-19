import { type IconType } from 'react-icons'
import {
  FaPen,
  FaUser,
  FaBriefcase,
  FaGithub,
  FaSquareFacebook,
  FaInstagram,
} from 'react-icons/fa6'

interface Link {
  name: string
  url: string
  icon: IconType
}

const HeaderLinks: Link[] = [
  {
    name: 'Blog',
    url: '/blog',
    icon: FaPen
  },
  {
    name: 'About',
    url: '/about',
    icon: FaUser
  },
  {
    name: 'Projects',
    url: '/projects',
    icon: FaBriefcase
  }
]

const FooterLinks: Link[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Lefia',
    icon: FaGithub
  },
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/lefia1222/',
    icon: FaSquareFacebook
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/lefia1222/',
    icon: FaInstagram
  }
]

export { HeaderLinks, FooterLinks }
