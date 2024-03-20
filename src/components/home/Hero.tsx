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
        src='https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=2070'
        alt='hero-image'
        className='min-w-[512px] h-[calc(50vh)] object-cover object-center md:brightness-75 brightness-50'
      />
      <div
        className={cn(
          exo_2.className,
          'absolute text-white left-1/2 top-1/2 -translate-x-[50%] md:left-[20%] md:top-[40%] md:translate-x-0 md:translate-y-[50%]',
          'flex flex-col items-center md:items-start'
        )}
      >
        <h1 className='text-4xl mb-2'>Hi!&nbsp;I&apos;m Lefia</h1>
        <p className='text-lg md:text-xl'>A Sophomore student at NCU</p>
      </div>
    </div>
  )
}

export default Hero
