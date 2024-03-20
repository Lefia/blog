import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import Img from '@/components/Img'
import MDX from '@/components/MDX'
import BaseLayout from '@/components/BaseLayout'

interface BlogPostProps {
  params: {
    slug: string
  }
}

export const generateStaticParams = async () => {
  const posts = await getAllPosts()
  return posts.map((post) => ({
    slug: post.slug
  }))
}

export const generateMetadata = async ({
  params
}: {
  params: { slug: string }
}) => {
  const { slug } = params
  const post = await getPostBySlug(slug).catch(() => notFound())

  return {
    title: post.title,
  }
}

const BlogPostPage = async ({ params }: BlogPostProps) => {
  const { slug } = params
  const post = await getPostBySlug(slug).catch(() => notFound())

  return (
    <>
     
      <BaseLayout>
        <Img
          src={post.coverImage}
          alt={post.title}
          className='aspect-[4/1] object-cover object-center rounded-lg'
        />
        <div className='prose dark:prose-invert mt-8'>
          <MDX source={post.content} />
        </div>
      </BaseLayout>
    </>
  )
}

export default BlogPostPage
