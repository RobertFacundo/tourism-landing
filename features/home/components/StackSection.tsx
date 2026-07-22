'use client'
import { useRef, type ReactNode } from 'react'
import { useStackAnimation } from '../hooks/useStackAnimation'

interface StackSectionProps {
  children: ReactNode
}

const StackSection = ({ children }: StackSectionProps) => {
  const container = useRef<HTMLDivElement | null>(null)

  useStackAnimation(container)

  return (
    <div ref={container} className='relative h-[500vh]'>
      <div className='sticky top-0 h-screen overflow-hidden'>{children}</div>
    </div>
  )
}

export default StackSection
