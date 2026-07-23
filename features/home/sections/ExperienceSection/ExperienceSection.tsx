import SectionLayout from '@/shared/components/ui/SectionLayout'
import SectionContent from '@/shared/components/ui/SectionContent'
import ArrowButton from '@/shared/components/ui/ArrowButton'

const ExperienceSection = () => {
  return (
    <SectionLayout className='z-30 experience-background'>
      <SectionContent
        eyebrow='AUTHENTIC EXPERIENCES'
        eyebrowClassName='text-white/70'
        title='Experience'
        accentTitle='the Real America'
        accentTitleClassName='text-white text-shadow-white'
        description='From vibrant cities to wide open roads, immerse yourself in the culture, flavors and people that make the USA unique'
      >
        <ArrowButton>DISCOVER EXPERIENCES</ArrowButton>
      </SectionContent>
    </SectionLayout>
  )
}

export default ExperienceSection
