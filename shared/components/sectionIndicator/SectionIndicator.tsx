'use client'
import { useIndicatorAnimation } from '../../animations/useIndicatorAnimation'
import SectionProgress from './SectionProgress'
import { useRef } from 'react'
import { cn } from '../../lib/utils'
import { useSectionIndicator } from '../../hooks/useSectionIndicator'

const SectionIndicator = () => {
  const {
    current,
    currentSection,
    next,
    progress,
    activeDot,
    isFinalTransition
  } = useSectionIndicator()
  const currentRef = useRef<HTMLDivElement | null>(null)

  useIndicatorAnimation(currentRef, currentSection)

  return (
    <aside className='fixed left-2 top-1/2 -translate-y-1/2 z-50 text-white'>
      <div className='flex flex-col items-center w-24'>
        <div
          key={currentSection}
          ref={currentRef}
          className='flex w-full flex-col gap-2 text-shadow-white'
        >
          <span
            className={cn(
              'font-light text-center indicator-number transition-all duration-500 ease-out ',
              isFinalTransition
                ? 'text-2xl text-white/40'
                : 'text-5xl text-white'
            )}
          >
            {current.number}
          </span>

          <p
            className={cn(
              'text-center uppercase tracking-[0.2em] indicator-title transition-all duration-500 ease-out',
              isFinalTransition
                ? 'text-[8px] text-white/40'
                : 'text-[10px] text-white/80'
            )}
          >
            {current.title}
          </p>
        </div>

        <SectionProgress progress={progress} activeDot={activeDot} />

        {next && (
          <div
            className={cn(
              'flex w-full flex-col items-center gap-2 transition-all duration-500 ease-out',
              isFinalTransition
                ? 'opacity-100 scale-100'
                : 'opacity-40 scale-90'
            )}
          >
            <span
              className={cn(
                'font-light text-center transition-all duration-500 ease-out',
                isFinalTransition
                  ? 'text-5xl text-white'
                  : 'text-2xl text-white/40'
              )}
            >
              {next.number}
            </span>

            <p
              className={cn(
                'text-center uppercase tracking-[0.2em] transition-all duration-500 ease-out',
                isFinalTransition
                  ? 'text-[10px] text-white/70'
                  : 'text-[8px] text-white/40'
              )}
            >
              {next.title}
            </p>
          </div>
        )}
      </div>
    </aside>
  )
}

export default SectionIndicator
