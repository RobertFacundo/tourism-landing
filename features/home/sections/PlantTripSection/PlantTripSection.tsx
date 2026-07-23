import SectionLayout from '@/shared/components/ui/SectionLayout'
import SectionContent from '@/shared/components/ui/SectionContent'
import PrimaryButton from '@/shared/components/ui/PrimaryButton'

const PlanTripSection = () => {
  return (
    <SectionLayout
      className='z-50 trip-background'
      overlayClassName='bg-black/50'
    >
      <SectionContent
        eyebrow='READY FOR ADVENTURE?'
        eyebrowClassName='text-red-700/70'
        title='Plan Your'
        accentTitle='Dream Trip'
        accentTitleClassName='text-white text-shadow-white'
        description='From vibrant cities to wide open roads, immerse yourself in the culture, flavors and people that make the USA unique'
      >
        <PrimaryButton>EXPLORE JOURNEYS</PrimaryButton>
      </SectionContent>
    </SectionLayout>
  )
}

export default PlanTripSection
