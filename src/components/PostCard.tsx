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

const PostCard = (props: PostCardProps) => {
  const { post } = props
  return (
    <Card>
      <MotionDiv layout='preserve-aspect' layoutId={post.slug}>
        <Img
          src={post.coverImage}
          alt={post.title}
          className='aspect-video object-cover object-top rounded-t-lg'
        />
      </MotionDiv>
      <CardHeader>
        <CardTitle>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </CardTitle>
        <CardDescription>{post.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}

export default PostCard
