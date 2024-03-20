import PostCarousel from '@/components/home/PostCarousel'
import BaseLayout from '@/components/BaseLayout'
import Hero from '@/components/home/Hero'
import Link from 'next/link'

const Home = async () => {
  return (
    <>
      <Hero className='-translate-y-16' />
      <BaseLayout>
        <Link href='/blog'>
          <h2 className='text-2xl mb-4 inline-block'>Latest Post</h2>
        </Link>
        <PostCarousel className='mb-4' />
      </BaseLayout>
    </>
  )
}

export default Home
