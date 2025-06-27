'use client'

import React, { useState, useEffect } from 'react'

interface PerformanceMetrics {
  loadTime: number
  firstContentfulPaint: number
  largestContentfulPaint: number
  firstInputDelay: number
  cumulativeLayoutShift: number
  isSlowDevice: boolean
  connectionSpeed: string
}

export const PerformanceMonitor = ({ showDebugInfo = false }: { showDebugInfo?: boolean }) => {
  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null)
  const [isVisible, setIsVisible] = useState(showDebugInfo)

  useEffect(() => {
    const measurePerformance = () => {
      // Only measure in development or when explicitly enabled
      if (!showDebugInfo && process.env.NODE_ENV === 'production') return

      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const paint = performance.getEntriesByType('paint')
      
      const fcp = paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0
      
      // Device capability detection
      const isSlowDevice = navigator.hardwareConcurrency < 4 || window.innerWidth < 768
      
      // Connection speed detection
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const connectionSpeed = connection?.effectiveType || 'unknown'

      setMetrics({
        loadTime: navigation.loadEventEnd - navigation.loadEventStart,
        firstContentfulPaint: fcp,
        largestContentfulPaint: 0, // Will be updated by observer
        firstInputDelay: 0, // Will be updated by observer
        cumulativeLayoutShift: 0, // Will be updated by observer
        isSlowDevice,
        connectionSpeed
      })
    }

    // Measure after initial load
    if (document.readyState === 'complete') {
      measurePerformance()
    } else {
      window.addEventListener('load', measurePerformance)
    }

    // LCP Observer
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1] as PerformanceEntry
      setMetrics(prev => prev ? { ...prev, largestContentfulPaint: lastEntry.startTime } : null)
    })
    
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    } catch (e) {
      // Observer not supported
    }

    // FID Observer
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        setMetrics(prev => prev ? { ...prev, firstInputDelay: entry.processingStart - entry.startTime } : null)
      })
    })
    
    try {
      fidObserver.observe({ entryTypes: ['first-input'] })
    } catch (e) {
      // Observer not supported
    }

    // CLS Observer
    let clsValue = 0
    const clsObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          setMetrics(prev => prev ? { ...prev, cumulativeLayoutShift: clsValue } : null)
        }
      })
    })
    
    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] })
    } catch (e) {
      // Observer not supported
    }

    return () => {
      window.removeEventListener('load', measurePerformance)
      lcpObserver.disconnect()
      fidObserver.disconnect()
      clsObserver.disconnect()
    }
  }, [showDebugInfo])

  // Performance recommendations
  const getRecommendations = (metrics: PerformanceMetrics) => {
    const recommendations = []
    
    if (metrics.largestContentfulPaint > 2500) {
      recommendations.push('LCP is slow - optimize images and reduce server response time')
    }
    
    if (metrics.firstInputDelay > 100) {
      recommendations.push('FID is high - reduce JavaScript execution time')
    }
    
    if (metrics.cumulativeLayoutShift > 0.1) {
      recommendations.push('CLS is high - add size attributes to images and avoid dynamic content')
    }
    
    if (metrics.isSlowDevice) {
      recommendations.push('Device has limited resources - reduce animations and effects')
    }
    
    if (metrics.connectionSpeed.includes('2g')) {
      recommendations.push('Slow connection detected - optimize for low bandwidth')
    }
    
    return recommendations
  }

  if (!showDebugInfo || !metrics) return null

  const recommendations = getRecommendations(metrics)

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className="bg-black/90 backdrop-blur-md border border-cyan-500/30 rounded-lg p-4 text-xs">
        <div className="flex items-center justify-between mb-2">
          <span className="text-cyan-400 font-semibold">Performance Metrics</span>
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="text-gray-400 hover:text-white"
          >
            {isVisible ? '−' : '+'}
          </button>
        </div>
        
        {isVisible && (
          <div className="space-y-2">
            <div className="grid grid-cols-2 gap-2 text-gray-300">
              <div>FCP: {metrics.firstContentfulPaint.toFixed(0)}ms</div>
              <div>LCP: {metrics.largestContentfulPaint.toFixed(0)}ms</div>
              <div>FID: {metrics.firstInputDelay.toFixed(0)}ms</div>
              <div>CLS: {metrics.cumulativeLayoutShift.toFixed(3)}</div>
            </div>
            
            <div className="text-gray-400 text-xs">
              <div>Device: {metrics.isSlowDevice ? 'Limited' : 'Capable'}</div>
              <div>Connection: {metrics.connectionSpeed}</div>
            </div>
            
            {recommendations.length > 0 && (
              <div className="border-t border-gray-600 pt-2 mt-2">
                <div className="text-yellow-400 text-xs mb-1">Recommendations:</div>
                {recommendations.map((rec, index) => (
                  <div key={index} className="text-gray-300 text-xs">• {rec}</div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

// Hook for performance-based feature flags
export const usePerformanceFlags = () => {
  const [flags, setFlags] = useState({
    enableHeavyAnimations: true,
    enable3DEffects: true,
    enableParticleEffects: true,
    enableBlurEffects: true,
    enableComplexGradients: true
  })

  useEffect(() => {
    const checkPerformance = () => {
      const isSlowDevice = navigator.hardwareConcurrency < 4
      const isSmallScreen = window.innerWidth < 768
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const connection = (navigator as any).connection
      const isSlowConnection = connection?.effectiveType?.includes('2g')

      // Disable heavy features on low-end devices
      if (isSlowDevice || isSmallScreen || prefersReducedMotion || isSlowConnection) {
        setFlags({
          enableHeavyAnimations: false,
          enable3DEffects: false,
          enableParticleEffects: false,
          enableBlurEffects: !isSlowDevice,
          enableComplexGradients: !isSlowDevice
        })
      }
    }

    checkPerformance()
    
    // Re-check on resize
    window.addEventListener('resize', checkPerformance)
    return () => window.removeEventListener('resize', checkPerformance)
  }, [])

  return flags
} 