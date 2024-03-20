'use client'

import { HeaderLinks } from '@/config/links'
import { Button } from '@/components/ui/button'
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

interface MobileNavProps {
  className?: string
}

const MobileNav = (props: MobileNavProps) => {
  const { className } = props
  return (
    <div className={className}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='outline' size='icon'>
            <FaBars className='h-[1.2rem] w-[1.2rem]' />
            <span className='sr-only'>Toggle mobile nav</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='md:hidden'>
          <nav>
            {HeaderLinks.map((link, index) => (
              <DropdownMenuItem inset key={index} asChild>
                <Link href={link.url} passHref className='text-lg'>
                  {link.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export default MobileNav
