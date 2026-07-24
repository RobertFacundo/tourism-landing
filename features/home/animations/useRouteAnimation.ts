'use client'
import { gsap } from '@/shared/lib/gsap'
import { useGSAP } from '@gsap/react'
import { useTravelStore } from '../store/travelStore'
import { travelCities } from '@/shared/constants/travelCitiesData'
import { travelRoute } from '@/shared/constants/travelRouteData'

interface Props {
  pathRef: React.RefObject<SVGPathElement | null>
  markerRef: React.RefObject<HTMLDivElement | null>
}
type RouteStop = {
  city: typeof travelCities[number]
  start: number
  end: number
}

export const useRouteAnimation = ({ pathRef, markerRef }: Props) => {
  const setActiveCity = useTravelStore(state => state.setActiveCity)
  const stops: RouteStop[] = []

  for (let i = travelRoute.length - 1; i > 0; i--) {
    stops.push({
      city: travelRoute[i - 1].city,
      start: travelRoute[i].progress,
      end: travelRoute[i - 1].progress
    })
  }

  useGSAP(() => {
    if (!pathRef.current || !markerRef.current) return

    const path = pathRef.current
    const marker = markerRef.current

    gsap.set(marker, {
      xPercent: -50,
      yPercent: -50
    })

    const tl = gsap.timeline()

    tl.call(() => setActiveCity(travelRoute[travelRoute.length - 1].city))

    stops.forEach(stop => {
      tl.to(marker, {
        duration: 16,
        ease: 'none',
        motionPath: {
          path,
          align: path,
          start: stop.start,
          end: stop.end,
          autoRotate: false,
          alignOrigin: [0.5, 0.5]
        }
      })

      tl.call(() => setActiveCity(stop.city))
    })
  })
}
