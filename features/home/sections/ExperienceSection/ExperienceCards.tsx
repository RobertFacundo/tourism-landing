import ImageCard from '@/shared/components/ui/ImageCard/ImageCard'
import { experienceCardsData } from '@/shared/constants/experienceCardsData'

const ExperienceCards = () => {
  return (
    <div className='grid grid-cols-3 gap-6 z-20 w-[700px] items-end mb-15 '>
      {experienceCardsData.map(card => (
        <ImageCard key={card.title} card={card} variant='' />
      ))}
    </div>
  )
}

export default ExperienceCards
