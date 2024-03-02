import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Img from '@/components/Img'
import Link from 'next/link'
import { Post } from '@/lib/mdx'
import { MotionDiv } from '@/components/Motion'

type PostCardProps = {
  post: Post
}

export const PostCard = (props: PostCardProps) => {
  const { post } = props

  return (
    <Card>
      <Link href={`/blog/${post.slug}`}>
        <MotionDiv layout='preserve-aspect' layoutId={post.slug}>
          <Img
            src={post.coverImage ?? '/images/placeholder.jpg'}
            alt={post.title ?? 'No title'}
            className='aspect-video object-cover object-center rounded-t-lg'
          />
        </MotionDiv>
        <CardHeader>
          <CardTitle>{post.title ?? 'No title'}</CardTitle>
          <CardDescription>{post.description ?? 'No description'}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  )
}

export default PostCard
