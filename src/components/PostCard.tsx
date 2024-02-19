import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Img from '@/components/Img'
import Link from 'next/link'
import { Post } from '@/lib/mdx'

type PostCardProps = {
  post: Post
}

const PostCard = (props: PostCardProps) => {
  const { post } = props
  return (
    <Card>
      <Img src={post.coverImage} alt={post.title} className='rounded-t-lg aspect-video object-cover object-top' />
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
