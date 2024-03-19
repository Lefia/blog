import { Metadata } from 'next'
import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'
import PageTitle from '@/components/PageTitle'

export const metadata: Metadata = {
  title: 'Blog'
}

const BlogPage = async () => {
  const posts = await getAllPosts()
  return (
    <>
      <PageTitle title='Blog' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 md:gap-y-11 lg:gap-y-16'>
        {posts.map((post, index) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </>
  )
}

export default BlogPage
