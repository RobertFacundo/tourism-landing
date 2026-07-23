const HeroContent = () => {
  return (
    <div className='flex h-full flex-col justify-center items-start gap-11'>
      <div className='flex flex-col gap-2'>
        <span className='text-xs tracking-[0.4em] text-blue-400/70 font-semibold'>
          JOURNEY THROUGH TIME
        </span>
        <h1 className='text-8xl text-white mt-5 text-shadow-white'>USA</h1>
        <h2 className='text-7xl text-red-700 tracking-wide text-shadow-red'>
          Timeless adventures
        </h2>
      </div>
      <p className='text-l text-white/50 w-[450px] tracking-normal'>
        Discover iconic cities, breathtaking landscapes and the spirit of a
        nation
      </p>
      <button
        className=' rounded-3xl border border-white/20 bg-white/10 px-6 py-3 text-sm
                    tracking-wider text-white/90 transition-all duration-300
                    hover:bg-blue-300/20 hover:border-red-500/20 hover:scale-102 hover:text-white cursor-pointer'
      >
        EXPLORE NOW
      </button>
    </div>
  )
}

export default HeroContent
