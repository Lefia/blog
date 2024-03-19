import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/mdx'
import Link from 'next/link'
import Img from '@/components/Img'
import BaseLayout from '@/components/BaseLayout'
import { exo_2 } from '@/app/font'
import { cn } from '@/lib/utils'

const Home = async () => {
  return (
    <>
      <div className='relative'>
        <Img
          src='/images/hero.jpg'
          alt='hero-image'
          className='w-full min-w-[512px] h-[calc(50vh-64px)] object-cover object-center md:brightness-75 brightness-50'
        />
        <div className={cn(exo_2.className, 'absolute left-[20%] top-[40%]')}>
          <h1 className='text-4xl mb-2'>Hi!&nbsp;I&apos;m Lefia</h1>
          <p className='text-xl'>A Sophomore student at NCU</p>
        </div>
      </div>
      <BaseLayout>
        <Link href='/blog'>
          <h2 className='text-2xl mb-4 inline-block'>Latest Post</h2>
        </Link>
        <PostCarousel className='mb-4' />
      </BaseLayout>
    </>
  )
}

const PostCarousel = async ({ className }: { className?: string }) => {
  const posts = await getPosts(2)
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      className={className}
    >
      <CarouselPrevious className='hidden md:block'>Previous</CarouselPrevious>
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.slug} className='sm:basis-1/2 md:basis-1/3'>
            <PostCard post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className='hidden md:block'>Next</CarouselNext>
    </Carousel>
  )
}

export default Home
