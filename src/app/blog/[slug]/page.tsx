import { MDXRemote } from 'next-mdx-remote/rsc'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import Img from '@/components/Img'

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
      <Img src={post.coverImage} alt={post.title} className='aspect-video rounded-lg object-cover object-top' />
      <div className='prose dark:prose-invert mt-8'>
        <MDXRemote source={post.content} />
      </div>
    </>
  )
}

export default BlogPostPage
