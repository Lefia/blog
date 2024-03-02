import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import PostCard from '@/components/PostCard'
import { getAllPosts } from '@/lib/mdx'

const Home = async () => {
  return (
    <>
      {/* <h1 className='text-2xl md:text-4xl mb-4'>Welcome to my blog</h1> */}
      <h2 className='text-2xl mb-4'>Latest Post</h2>
      <PostCarousel />
    </>
  )
}

const PostCarousel = async () => {
  const posts = await getAllPosts()
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
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
