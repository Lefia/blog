'use client'

import { HeaderLinks } from '@/config/links'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

interface NavProps {
  className?: string
}

const Nav = (props: NavProps) => {
  const { className } = props
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {HeaderLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={link.url} className='flex gap-2'>
                <link.icon />
                <span className='text-base'>{link.name}</span>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Nav
