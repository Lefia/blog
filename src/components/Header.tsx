import { ModeToggle } from '@/components/ModeToggle'
import { Nav } from '@/components/Nav'
import { LuOrbit } from "react-icons/lu";
import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 w-full bg-background/95'>
      <div className='container flex justify-between items-center space-x-4 h-16'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='font-bold flex items-center gap-2'>
            <LuOrbit className='text-xl' />
            <span className='text-lg'>Lefia's Blog</span>
          </Link>
          <Nav />
        </div>
        <ModeToggle />
      </div>
    </div>
  )
}

export { Header }
