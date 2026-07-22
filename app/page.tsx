import ExperienceSection from '@/features/home/sections/ExperienceSection/ExperienceSection'
import HeroSection from '@/features/home/sections/HeroSection/HeroSection'
import LandmarkSection from '@/features/home/sections/LandmarkSection/LandmarkSection'
import PlanTripSection from '@/features/home/sections/PlantTripSection/PlantTripSection'
import TravelSection from '@/features/home/sections/TravelSection/TravelSection'
import StackSection from '@/features/home/components/StackSection'

export default function Home () {
  return (
    <StackSection>
      <HeroSection />
      <LandmarkSection />
      <ExperienceSection />
      <TravelSection />
      <PlanTripSection />
    </StackSection>
  )
}
