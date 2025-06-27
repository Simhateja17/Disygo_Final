'use client'

import React, { Suspense, useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { SplineScene } from './ui/spline'

// Dynamically import the heavy Spline component with SSR disabled (for non-priority use)
const LazySplineScene = dynamic(() => import('./ui/spline').then(mod => ({ default: mod.SplineScene })), {
  ssr: false,
  loading: () => <RobotFallback />
})

// Lightweight fallback component - only for non-priority loading
function RobotFallback() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black rounded-xl flex items-center justify-center">
      <div className="relative">
        {/* Simple CSS-only robot animation */}
        <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl relative animate-pulse">
          {/* Robot eyes */}
          <div className="absolute top-4 left-4 w-3 h-3 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          
          {/* Robot mouth */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

interface OptimizedInteractiveRobotProps {
  enableFullRobot?: boolean
  priority?: boolean
}

export function OptimizedInteractiveRobot({ 
  enableFullRobot = false, 
  priority = false 
}: OptimizedInteractiveRobotProps) {
  const [shouldLoadRobot, setShouldLoadRobot] = useState(priority)
  const [isInView, setIsInView] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) {
      // Load immediately when priority is true
      setShouldLoadRobot(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Delay loading to ensure smooth initial render
          setTimeout(() => setShouldLoadRobot(true), 1000)
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '200px' // Start loading when 200px away
      }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  return (
    <div 
      ref={containerRef}
      className="w-full h-[420px] sm:h-[450px] md:h-[500px] lg:h-[550px] bg-black relative overflow-hidden rounded-xl border border-white/5"
    >
      <div className="w-full h-full relative bg-black">
        {shouldLoadRobot && enableFullRobot ? (
          priority ? (
            // Immediate loading for priority
            <div className="w-full h-full scale-[1.25] sm:scale-[1.2] md:scale-100 origin-center transform-gpu translate-y-2 sm:translate-y-0">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full bg-black"
                immediate={true}
              />
            </div>
          ) : (
            // Lazy loading for non-priority
            <Suspense fallback={<RobotFallback />}>
              <div className="w-full h-full scale-[1.25] sm:scale-[1.2] md:scale-100 origin-center transform-gpu translate-y-2 sm:translate-y-0">
                <LazySplineScene 
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full bg-black"
                />
              </div>
            </Suspense>
          )
        ) : (
          <RobotFallback />
        )}
      </div>
    </div>
  )
} 