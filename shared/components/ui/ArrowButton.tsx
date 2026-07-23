import { ReactNode } from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface ArrowButtonProps {
  children: ReactNode
}

const ArrowButton = ({ children }: ArrowButtonProps) => {
  return (
    <button
      className='
        flex items-center justify-center gap-2
        bg-transparent
        px-6 py-3
        text-lg
        tracking-widest
        text-white/70
        transition-all duration-300
        hover:scale-[1.02]
        hover:text-white/90
        hover:font-semibold
        cursor-pointer
      '
    >
      {children}
      <FaArrowRight />
    </button>
  )
}

export default ArrowButton
