import { ModeToggle } from '@/components/ModeToggle';
import { HeaderLinks } from '@/config/links';
import Link from 'next/link'

const Header = () => {
  return (
    <div className='sticky top-0 z-50 w-full bg-background/95'>
      <div className='container flex justify-between items-center space-x-4 h-16'>
        <h1 className='text-xl font-bold text-primary'>
          <Link href='/'>Lefia's Blog</Link>
        </h1>
        {/* Navigation Bar */}
        <ul className='flex space-x-8'>
          {HeaderLinks.map((link) => (
            <li key={link.name} className='inline-block'>
              <Link href={link.path} className='flex items-center '>
                <link.icon className='text-primary text-sm mr-2' />
                <span className='text-primary'>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Header;
