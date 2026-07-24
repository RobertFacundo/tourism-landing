import { travelCities } from './travelCitiesData'

export const travelRoute = [
  {
    city: travelCities[0], // Seattle
    x: 250,
    y: 50,
    textX: 270,
    textY: 55,
    progress: 0
  },
  {
    city: travelCities[1], // Portland
    x: 202,
    y: 180,
    textX: 220,
    textY: 185,
    progress: 0.25
  },
  {
    city: travelCities[2], // San Francisco
    x: 170,
    y: 320,
    textX: 190,
    textY: 325,
    progress: 0.5
  },
  {
    city: travelCities[3], // Los Angeles
    x: 225,
    y: 500,
    textX: 240,
    textY: 505,
    progress: 0.75
  },
  {
    city: travelCities[4], // San Diego
    x: 280,
    y: 650,
    textX: 300,
    textY: 655,
    progress: 1
  }
]
