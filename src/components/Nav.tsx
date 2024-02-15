'use client'

import { HeaderLinks } from '@/config/links'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu'

const Nav = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {HeaderLinks.map((link, index) => (
          <NavigationMenuItem key={index}>
            <Link href={link.url} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className='text-base'>{link.name}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>

    </NavigationMenu>
  )
}
export { Nav }
