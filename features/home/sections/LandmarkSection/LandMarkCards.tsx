import ImageCard from '@/shared/components/ui/ImageCard/ImageCard'
import { landmarkCardsData } from '@/shared/constants/landmarksData'

const LandMarkCards = () => {
  console.log(landmarkCardsData, 'log del landmarkcards')
  return (
    <div className='grid grid-cols-3 gap-6 z-20 w-[700px] items-end mb-15 '>
      {landmarkCardsData.map(card => (
        <ImageCard key={card.title} card={card} variant='landmark' />
      ))}
    </div>
  )
}

export default LandMarkCards
