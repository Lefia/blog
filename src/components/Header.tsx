import { ModeToggle } from '@/components/ModeToggle'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import Link from "next/link"
import { LuOrbit } from "react-icons/lu"

const Header = () => {
  return (
    <div className='sticky top-0 z-50 w-full bg-background/90'>
      <div className='container flex justify-between items-center space-x-4 h-16'>
        <div className='flex items-center gap-8'>
          <Logo />
          <Nav className='hidden md:block' />
        </div>
        <ModeToggle className='hidden md:block' />
        <MobileNav className='block md:hidden' />
      </div>
    </div>
  )
}

const Logo = () => {
  return (
    <Link href='/' className='font-bold flex items-center gap-2 h-10 px-4 py-2'>
      <LuOrbit className='text-xl' />
      <span className='text-lg'>Lefia&apos;s Blog</span>
    </Link>
  )
}

export default Header
