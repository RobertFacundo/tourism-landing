export const getCurrentSection = (progress: number, totalSections: number) => {
  return Math.min(Math.floor(progress * totalSections), totalSections - 1)
}
