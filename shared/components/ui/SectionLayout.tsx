import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
  overlayClassName?: string
}

const SectionLayout = ({
  children,
  className,
  overlayClassName = 'bg-black/30'
}: SectionProps) => {
  return (
    <section
      className={cn(
        'stack-item absolute inset-0 h-screen bg-cover bg-center',
        className
      )}
    >
      <div className={cn('absolute inset-0', overlayClassName)} />
      <div className='relative h-full px-40'>{children}</div>
    </section>
  )
}

export default SectionLayout
