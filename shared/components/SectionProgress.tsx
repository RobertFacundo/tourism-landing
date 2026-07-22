import { sections } from '../constants/section'
import { cn } from '../lib/utils'

interface SectionProgressProps {
  progress: number
  activeDot: number
}

const SectionProgress = ({ progress, activeDot }: SectionProgressProps) => {
  return (
    <div className='relative my-6 flex h-24 w-6 flex-col items-center justify-between'>
      <div className='absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/20' />

      <div
        className='absolute left-1/2 top-0 w-px -translate-x-1/2 bg-white'
        style={{
          height: `${progress * 100}%`
        }}
      />

      {sections.map((_, index) => (
        <div
          key={index}
          className={cn(
            'relative z-10 rounded-full transition-all duration-300',
            index === activeDot
              ? 'h-3 w-3 bg-white'
              : index < activeDot
              ? 'h-2 w-2 bg-white'
              : 'h-2 w-2 bg-white/30'
          )}
        />
      ))}
    </div>
  )
}

export default SectionProgress
