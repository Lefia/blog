import { ModeToggle } from '@/components/ModeToggle'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import Link from "next/link"

const Header = () => {
  return (
    <div className='sticky top-0 z-50 w-full bg-background/90'>
      <div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16'>
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
      <span className='text-lg'>Lefia</span>
    </Link>
  )
}

export default Header
