import { IoCarSportOutline } from 'react-icons/io5'

const TravelRoute = () => {
  return (
    <div className='absolute right-15 top-1/2 -translate-y-1/2'>
      <svg viewBox='0 0 500 700' className='w-[400px] h-[550px]' fill='none'>
        <path
          d='M250 50
               C220 120, 200 180, 180 250
               C160 320, 170 400, 210 470
               C240 520, 260 580, 280 650'
          stroke='rgba(255,255,255,0.35)'
          strokeWidth='3'
          strokeDasharray='10 10'
          strokeLinecap='round'
        />

        <circle
          cx='250'
          cy='50'
          r='6'
          fill='#dc2626a5'
          stroke='#dc2626'
          strokeWidth='2'
        />
        <text x='270' y='55' fill='white'>
          Seattle
        </text>

        <circle
          cx='202'
          cy='180'
          r='6'
          fill='#dc2626a5'
          stroke='#dc2626'
          strokeWidth='2'
        />
        <text x='220' y='185' fill='white'>
          Portland
        </text>

        <circle
          cx='170'
          cy='320'
          r='6'
          fill='#dc2626a5'
          stroke='#dc2626'
          strokeWidth='2'
        />
        <text x='190' y='325' fill='white'>
          San Francisco
        </text>

        <circle
          cx='225'
          cy='500'
          r='6'
          fill='#dc2626a5'
          stroke='#dc2626'
          strokeWidth='2'
        />
        <text x='240' y='505' fill='white'>
          Los Angeles
        </text>

        <circle
          cx='280'
          cy='650'
          r='6'
          fill='#dc2626a5'
          stroke='#dc2626'
          strokeWidth='2'
        />
        <text x='300' y='655' fill='white'>
          San Diego
        </text>
      </svg>
      <IoCarSportOutline
        id='travel-bike'
        className='absolute text-black-700 text-2xl left-[211px] bottom-[41px]'
      />
    </div>
  )
}

export default TravelRoute
