interface PageTitleProps {
  title: string
}

const PageTitle = (props: PageTitleProps) => {
  const { title } = props
  return <h1 className='text-3xl font-semibold mb-4'>{title}</h1>
}

export default PageTitle
