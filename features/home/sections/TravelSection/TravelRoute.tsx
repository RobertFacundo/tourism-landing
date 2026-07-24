'use client'
import { travelRoute } from '@/shared/constants/travelRouteData'
import { IoLocationSharp } from 'react-icons/io5'
import { useTravelStore } from '../../store/travelStore'
import { useRouteAnimation } from '../../animations/useRouteAnimation'
import { useRef } from 'react'

const TravelRoute = () => {
  const setActiveCity = useTravelStore(state => state.setActiveCity)
  const pathRef = useRef<SVGPathElement | null>(null)
  const markerRef = useRef<HTMLDivElement | null>(null)

  useRouteAnimation({ pathRef, markerRef })

  return (
    <div className='absolute right-15 top-1/2 -translate-y-1/2'>
      <svg viewBox='0 0 500 700' className='w-[400px] h-[550px]' fill='none'>
        <path
          ref={pathRef}
          d='M250 50
               C220 120, 200 180, 180 250
               C160 320, 170 400, 210 470
               C240 520, 260 580, 280 650'
          stroke='rgba(255,255,255,0.35)'
          strokeWidth='3'
          strokeDasharray='10 10'
          strokeLinecap='round'
        />
        {travelRoute.map(({ city, x, y, textX, textY }) => (
          <g
            key={city.name}
            className='cursor-pointer group'
            onClick={() => setActiveCity(city)}
          >
            <circle
              cx={x}
              cy={y}
              r='8'
              fill='#dc2626a5'
              stroke='#dc2626'
              strokeWidth='2'
            />
            <text
              x={textX}
              y={textY}
              fill='white'
              className='origin-left transition-all duration-500 opacity-90 group-hover:scale-101 group-hover:opacity-100'
            >
              {city.name}
            </text>
          </g>
        ))}
      </svg>
      <div ref={markerRef} className='absolute left-[215px] bottom-[41px]'>
        <IoLocationSharp className='text-white/70 text-4xl' />
      </div>
    </div>
  )
}

export default TravelRoute
