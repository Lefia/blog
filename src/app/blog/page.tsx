import { BaseLayout } from '@/layout/BaseLayout'
import { getAllPosts } from '@/lib/mdx'
import PostCard from '@/components/PostCard'

const page = () => {
  const posts = getAllPosts()
  return (
    <BaseLayout title='Blog'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 md:gap-y-11 lg:gap-y-16'>
        {posts.map((post) => {
          return (
            <PostCard
              key={post.slug}
              title={post.data.title}
              description={post.data.description}
              image={post.data.image}
            />
          )
        })}
      </div>
    </BaseLayout>
  )
}

export default page
