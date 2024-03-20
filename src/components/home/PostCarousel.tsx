import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import PostCard from '@/components/PostCard'
import { getPosts } from '@/lib/mdx'
import { cn } from '@/lib/utils'

interface PostCarouselProps {
  className?: string
}

const PostCarousel = async (props: PostCarouselProps) => {
  const { className } = props
  const posts = await getPosts(10)
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true
      }}
      className={cn(className, 'mx-6')}
    >
      <CarouselContent>
        {posts.map((post) => (
          <CarouselItem key={post.slug} className='sm:basis-1/2 md:basis-1/3'>
            <PostCard post={post} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PostCarousel