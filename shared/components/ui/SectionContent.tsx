import { ReactNode } from 'react'
import { cn } from '@/shared/lib/utils'

interface SectionContentProps {
  eyebrow: string
  title: string
  accentTitle: string
  description: string
  children: ReactNode

  eyebrowClassName?: string
  accentTitleClassName?: string
  descriptionClassName?: string
}

const SectionContent = ({
  eyebrow,
  title,
  accentTitle,
  description,
  children,
  eyebrowClassName,
  accentTitleClassName,
  descriptionClassName
}: SectionContentProps) => {
  return (
    <div className='flex h-full flex-col justify-center items-start gap-11'>
      <div className='flex flex-col gap-2'>
        <span
          className={cn(
            'text-xs tracking-[0.4em] font-semibold',
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>

        <h1 className='mt-5 text-8xl text-white text-shadow-white ml-2'>
          {title}
        </h1>

        <h2
          className={cn(
            'text-7xl tracking-wide text-shadow-red ml-3',
            accentTitleClassName
          )}
        >
          {accentTitle}
        </h2>
      </div>

      <p
        className={cn(
          'w-[450px] text-lg text-white/50 ml-1',
          descriptionClassName
        )}
      >
        {description}
      </p>

      {children}
    </div>
  )
}

export default SectionContent
