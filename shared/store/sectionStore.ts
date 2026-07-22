import { create } from 'zustand'

interface SectionState {
  currentSection: number
  setCurrentSection: (section: number) => void
  progress: number
  setProgress: (value: number) => void
}

export const useSectionStore = create<SectionState>(set => ({
  currentSection: 0,

  setCurrentSection: section =>
    set({
      currentSection: section
    }),

  progress: 0,
  setProgress: value =>
    set({
      progress: value
    })
}))
