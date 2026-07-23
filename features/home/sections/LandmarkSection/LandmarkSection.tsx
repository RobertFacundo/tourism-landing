import SectionLayout from '@/shared/components/ui/SectionLayout'
import ArrowButton from '@/shared/components/ui/ArrowButton'
import SectionContent from '@/shared/components/ui/SectionContent'
import LandMarkCards from './LandMarkCards'

const LandmarkSection = () => {
  return (
    <SectionLayout className='z-20 landmark-background'>
      <SectionContent
        eyebrow='ICONIC PLACES'
        eyebrowClassName='text-white/70'
        title='Timeless'
        accentTitle='Landmarks'
        accentTitleClassName='text-red-700'
        description='From the Grand Canyon to the White House, every place has a story to tell'
      >
        <ArrowButton>EXPLORE LANDMARKS</ArrowButton>
      </SectionContent>
      <LandMarkCards />
    </SectionLayout>
  )
}

export default LandmarkSection
