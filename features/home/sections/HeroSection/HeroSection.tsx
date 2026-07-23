import SectionLayout from '@/shared/components/ui/SectionLayout'
import HeroContent from './HeroContent'
import PrimaryButton from '@/shared/components/ui/PrimaryButton'
import SectionContent from '@/shared/components/ui/SectionContent'

const HeroSection = () => {
  return (
    <SectionLayout className='z-10 hero-background'>
      <SectionContent
        eyebrow='JOURNEY THROUGH TIME'
        eyebrowClassName='text-blue-400/70'
        title='USA'
        accentTitle='Timeless adventures'
        accentTitleClassName='text-red-700'
        description='Discover iconic cities, breathtaking landscapes and the spirit of a nation'
      >
        <PrimaryButton>EXPLORE NOW</PrimaryButton>
      </SectionContent>
    </SectionLayout>
  )
}

export default HeroSection
