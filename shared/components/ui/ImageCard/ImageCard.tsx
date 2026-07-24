import { FaArrowRight } from 'react-icons/fa'
import Image from 'next/image'
import { cn } from '@/shared/lib/utils'

interface ImageCardProps {
  card: {
    image: string
    title: string
    subtitle?: string
  }
  variant: string
}

const ImageCard = ({ card, variant = 'landmark' }: ImageCardProps) => {
  const { title, image, subtitle } = card
  return (
    <div className='group relative h-[400px] image-card-shadow  overflow-hidden rounded-xl shadow-lg  transition-transform duration-500  hover:scale-102 cursor-pointer'>
      <Image
        src={image}
        alt={title}
        fill
        className='object-cover transition-transform duration-500 group-hover:scale-102'
      />

      <div className='absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500' />
      <div
        className={cn(
          'absolute left-2 text-white',
          variant === 'landmark' ? 'bottom-6' : 'bottom-1 left-3'
        )}
      >
        <h3 className='text-lg mb-3 tracking-wide text-white text-shadow-white'>
          {title}
        </h3>

        {variant === 'landmark' && (
          <div className='flex items-center gap-1 text-xs'>
            <p className='w-[170px] text-white/70 tracking-wide'>{subtitle}</p>
            <FaArrowRight className='text-white/70 transition-colors duration-500  group-hover:text-white' />
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageCard
