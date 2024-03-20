import { cn } from '@/lib/utils'

interface BaseLayoutProps {
  children?: React.ReactNode
  className?: string
}

function BaseLayout(props: BaseLayoutProps) {
  const { children, className } = props
  return (
    <div className={cn(className, 'w-full md:max-w-5xl mx-auto px-[2rem] py-4')}>
      {children}
    </div>
  )
}

export default BaseLayout