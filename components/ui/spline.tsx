'use client'

import { Suspense, lazy, useEffect, useState } from 'react'
import Spline from '@splinetool/react-spline'

const LazySpline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  immediate?: boolean
}

export function SplineScene({ scene, className, immediate = false }: SplineSceneProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Don't render during SSR
  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent">
        <span className="loader"></span>
      </div>
    );
  }

  if (immediate) {
    // For immediate loading, use direct import
    return (
      <div className="w-full h-full bg-transparent" style={{ background: 'transparent' }}>
        <Spline
          scene={scene}
          className={`${className} spline-canvas`}
          style={{
            background: 'transparent',
            backgroundColor: 'transparent'
          }}
        />
      </div>
    )
  }

  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center bg-transparent">
          <span className="loader"></span>
        </div>
      }
    >
      <div className="w-full h-full bg-transparent" style={{ background: 'transparent' }}>
        <LazySpline
          scene={scene}
          className={`${className} spline-canvas`}
          style={{
            background: 'transparent',
            backgroundColor: 'transparent'
          }}
        />
      </div>
    </Suspense>
  )
} 