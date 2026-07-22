import { useGSAP } from '@gsap/react'
import { RefObject } from 'react'
import { gsap } from '../lib/gsap'

export const useIndicatorAnimation = (
  ref: RefObject<HTMLDivElement | null>,
  sectionIndex: number
) => {
  useGSAP(
    () => {
      if (!ref.current) return
      const number = ref.current.querySelector('.indicator-number')

      const title = ref.current.querySelector('.indicator-title')

      const tl = gsap.timeline()

      tl.fromTo(
        number,
        {
          y: 15,
          opacity: 0.4
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: 'power3.out'
        }
      ).fromTo(
        title,
        {
          y: 8,
          opacity: 0.4
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          ease: 'power3.out'
        },
        '-=0.25'
      )
    },
    {
      scope: ref,
      dependencies: [sectionIndex]
    }
  )
}
