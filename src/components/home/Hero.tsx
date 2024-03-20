import Img from '@/components/Img'
import { exo_2 } from '@/app/font'
import { cn } from '@/lib/utils'

interface HeroProps {
  className?: string
}

const Hero = (props: HeroProps) => {
  const { className } = props
  return (
    <div
      className={cn(
        className,
        'relative overflow-clip'
      )}
    >
      <Img
        src='/images/hero.jpg'
        alt='hero-image'
        className='min-w-[512px] h-[calc(50vh)] object-cover object-center md:brightness-75 brightness-50'
      />
      <div
        className={cn(
          exo_2.className,
          'absolute left-[20%] top-[40%] text-white'
        )}
      >
        <h1 className='text-4xl mb-2'>Hi!&nbsp;I&apos;m Lefia</h1>
        <p className='text-xl'>A Sophomore student at NCU</p>
      </div>
    </div>
  )
}

export default Hero
