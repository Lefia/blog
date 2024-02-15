import { FooterLinks } from '@/config/links'

const Footer = () => {
  return (
    <div className='container flex flex-col items-center space-y-2'>
      <div className='flex items-center space-x-4'>
        {FooterLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-xl'
            ><link.icon /></a>
          ))}
      </div>
      <div>
        <p className='text'>©2024 • Lefia</p>
      </div>
    </div>
  )
}

export { Footer }