import SectionLayout from '@/shared/components/ui/SectionLayout'
import SectionContent from '@/shared/components/ui/SectionContent'
import ArrowButton from '@/shared/components/ui/ArrowButton'
import TravelRoute from './TravelRoute'
import TravelCityCard from './TravelCityCard'

const TravelSection = () => {
  return (
    <SectionLayout className='z-40 travel-background'>
      <SectionContent
        eyebrow='SCENIC JOURNEY'
        eyebrowClassName='text-red-700/70'
        title='Travel Across'
        accentTitle='the USA'
        accentTitleClassName='text-white text-shadow-white'
        description='From vibrant cities to wide open roads, immerse yourself in the culture, flavors and people that make the USA unique'
      >
        <ArrowButton>EXPLORE JOURNEYS</ArrowButton>
      </SectionContent>
      <TravelCityCard />
      <TravelRoute />
    </SectionLayout>
  )
}

export default TravelSection
