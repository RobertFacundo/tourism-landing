'use client'
import Image from 'next/image'
import { useTravelStore } from '../../store/travelStore'

const TravelCityCard = () => {
  const activeCity = useTravelStore(state => state.activeCity)
  if (!activeCity) return null

  return (
    <div
      className={`
        absolute left-170 top-1/2
        -translate-y-1/2
        w-[450px]
        transition-all duration-500
        ${activeCity ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}
      `}
    >
      <div className='overflow-hidden rounded-xl bg-black/10 backdrop-blur-md border border-white/10 hover:scale-101 transition-transform duration-700'>
        <div className='relative h-[230px]'>
          <Image
            src={activeCity.image}
            alt={activeCity.name}
            fill
            className='object-cover'
          />
        </div>

        <div className='pt-1 px-4 pb-4 text-white'>
          <p className='text-xs uppercase tracking-[0.3em] text-right text-red-400'>
            {activeCity.region}
          </p>

          <h3 className='mt-2 text-3xl font-semibold'>{activeCity.name}</h3>

          <p className='mt-1 text-[12px] text-white/60 tracking-wide'>
            {activeCity.population}
          </p>

          <p className='mt-3 text-sm leading-relaxed text-white/80'>
            {activeCity.description}
          </p>

          <div className='mt-3 flex flex-wrap gap-2'>
            {activeCity.tags.map(tag => (
              <span
                key={tag}
                className='rounded-full border border-white/20 px-3 py-1 text-xs text-white/70'
              >
                {tag}
              </span>
            ))}
          </div>

          <div className='mt-4'>
            <p className='mb-2 text-xs uppercase tracking-widest text-white/50'>
              Highlights
            </p>

            <ul className='space-y-1'>
              {activeCity.highlights.map(place => (
                <li key={place} className='text-sm text-white/80'>
                  • {place}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelCityCard
