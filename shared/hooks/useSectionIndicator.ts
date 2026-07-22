import { sections } from '../constants/section'
import { useSectionStore } from '../store/sectionStore'

export const useSectionIndicator = () => {
  const currentSection = useSectionStore(state => state.currentSection)
  const progress = useSectionStore(state => state.progress)

  const current = sections[currentSection]
  const next = sections[currentSection + 1] ?? null

  const activeDot = Math.round(progress * (sections.length - 1))

  const isFinalTransition =
    currentSection === sections.length - 2 && progress >= 0.8

  return {
    current,
    currentSection,
    next,
    progress,
    activeDot,
    isFinalTransition
  }
}
