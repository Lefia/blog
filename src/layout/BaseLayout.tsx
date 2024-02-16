import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

type BaseLayoutProps = {
  title?: string,
  children?: React.ReactNode
}

const BaseLayout = (props: BaseLayoutProps) => {
  const { children, title } = props
  return (
    <>
      <Header />
      <main className='max-w-5xl mx-auto px-[2rem] py-8 sm:py-10 md:py-12'>
        <h1 className='text-4xl font-bold mb-6'>{title}</h1>
        {children}
      </main>
      <Footer />
    </>
  )
}

export { BaseLayout }
