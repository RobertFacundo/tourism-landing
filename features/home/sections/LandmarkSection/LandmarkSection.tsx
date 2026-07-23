import SectionLayout from '@/shared/components/ui/SectionLayout'
import LandmarkContent from './LandmarkContent'
import ArrowButton from '@/shared/components/ui/ArrowButton'
import SectionContent from '@/shared/components/ui/SectionContent'

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
    </SectionLayout>
  )
}

export default LandmarkSection
