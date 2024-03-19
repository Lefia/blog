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

const Home = async () => {
  return (
    <>
      <Link href='/blog'>
        <h2 className='text-2xl mb-4 inline-block'>Latest Post</h2>
      </Link>
      <PostCarousel className='mb-4' />
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
