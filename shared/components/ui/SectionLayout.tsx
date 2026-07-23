import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
}

const SectionLayout = ({ children, className }: SectionProps) => {
  return (
    <section
      className={cn(
        'stack-item absolute inset-0 h-screen bg-cover bg-center',
        className
      )}
    >
      <div className='absolute inset-0 bg-black/20' />
      <div className='relative h-full px-40'>{children}</div>
    </section>
  )
}

export default SectionLayout
