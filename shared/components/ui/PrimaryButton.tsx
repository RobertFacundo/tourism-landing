import { ReactNode } from 'react'

interface PrimaryButtonProps {
  children: ReactNode
}

const PrimaryButton = ({ children }: PrimaryButtonProps) => {
  return (
    <button
      className='
        rounded-3xl
        border border-white/20
        bg-white/10
        px-6 py-3
        text-sm
        tracking-wider
        text-white/90
        transition-all duration-300
        hover:bg-blue-300/20
        hover:border-red-500/20
        hover:scale-[1.02]
        hover:text-white
        cursor-pointer
      '
    >
      {children}
    </button>
  )
}

export default PrimaryButton
