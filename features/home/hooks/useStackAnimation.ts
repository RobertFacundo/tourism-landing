import { useSectionStore } from '@/shared/store/sectionStore'
import { RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from '@/shared/lib/gsap'
import { getCurrentSection } from '../utils/getCurrentSection'

export const useStackAnimation = (
  container: RefObject<HTMLDivElement | null>
) => {
  const setCurrentSection = useSectionStore(state => state.setCurrentSection)
  const setProgress = useSectionStore(state => state.setProgress)

  useGSAP(
    () => {
      const sections = gsap.utils.toArray<HTMLElement>('.stack-item')
      if (!sections.length) return

      gsap.set(sections[0], {
        yPercent: 0,
        scale: 1,
        opacity: 1
      })
      gsap.set(sections.slice(1), {
        yPercent: 100,
        scale: 1,
        opacity: 0
      })

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: `+=${window.innerHeight * (sections.length - 1)}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          onUpdate: self => {
            const sectionIndex = getCurrentSection(
              self.progress,
              sections.length
            )

            setCurrentSection(sectionIndex)
            setProgress(self.progress)
          }
        }
      })

      for (let i = 0; i < sections.length - 1; i++) {
        const currentCard = sections[i]
        const nextCard = sections[i + 1]

        if (i === 0) {
          timeline.to(
            nextCard,
            {
              opacity: 1,
              yPercent: 0,
              scale: 1,
              ease: 'none'
            },
            i
          )
        } else {
          timeline
            .to(
              currentCard,
              {
                scale: 0.45,
                opacity: 0.7,
                filter: 'blur(5px)',
                duration: 1,
                ease: 'none'
              },
              i
            )
            .to(
              nextCard,
              {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                scale: 1,
                ease: 'none'
              },
              i
            )
        }
      }
    },
    { scope: container }
  )
}
