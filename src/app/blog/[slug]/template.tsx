const PostTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='max-w-4xl mx-auto px-[2rem] py-8 sm:py-10 md:py-12'>
      {children}
    </main>
  )
}

export default PostTemplate
