import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Img from '@/components/Img'
import MDX from '@/components/MDX'
import { MotionDiv } from '@/components/Motion'

export async function generateStaticParams() {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

type BlogPostProps = {
  params: {
    slug: string
  }
}

const BlogPostPage = async (props: BlogPostProps) => {
  const { slug } = props.params
  const post = await getPostBySlug(slug).catch(() => notFound())

  return (
    <>
      <MotionDiv layout='preserve-aspect' layoutId={post.slug}>
        <Img
          src={post.coverImage}
          alt={post.title}
          className='aspect-video object-cover object-top rounded-lg'
        />
      </MotionDiv>
      <div className='prose dark:prose-invert mt-8'>
        <MDX source={post.content} />
      </div>
    </>
  )
}

export default BlogPostPage
