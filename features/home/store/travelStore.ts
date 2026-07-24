import { create } from 'zustand'
import { TravelCity } from '../types/travel'
import { travelCities } from '@/shared/constants/travelCitiesData'

interface TravelState {
  activeCity: TravelCity | null
  isRoutePlaying: boolean
  setActiveCity: (city: TravelCity | null) => void
  setRoutePlaying: (playing: boolean) => void
}

export const useTravelStore = create<TravelState>(set => ({
  activeCity: travelCities[0],
  isRoutePlaying: false,

  setActiveCity: city => set({ activeCity: city }),
  setRoutePlaying: playing =>
    set({
      isRoutePlaying: playing
    })
}))
