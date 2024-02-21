const RootTemplate = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='max-w-5xl mx-auto px-[2rem] py-8 sm:py-10 md:py-12'>
      {children}
    </main>
  )
}

export default RootTemplate
