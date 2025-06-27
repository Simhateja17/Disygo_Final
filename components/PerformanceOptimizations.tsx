import React, { memo, useMemo, useCallback } from 'react'

// Memoized AnimatedNumber component
export const OptimizedAnimatedNumber = memo(({ 
  value, 
  suffix = '', 
  duration = 2000,
  className = '' 
}: {
  value: number
  suffix?: string
  duration?: number
  className?: string
}) => {
  const [displayValue, setDisplayValue] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(false)
  const elementRef = React.useRef<HTMLDivElement>(null)

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    const [entry] = entries
    if (entry.isIntersecting && !isVisible) {
      setIsVisible(true)
    }
  }, [isVisible])

  React.useEffect(() => {
    const observer = new IntersectionObserver(observerCallback, { 
      threshold: 0.1, 
      rootMargin: '50px' 
    })

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [observerCallback])

  React.useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animateValue = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      const easeOutCubic = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.round(startValue + (value - startValue) * easeOutCubic)
      
      setDisplayValue(currentValue)

      if (progress < 1) {
        requestAnimationFrame(animateValue)
      }
    }

    animateValue()
  }, [isVisible, value, duration])

  return (
    <div ref={elementRef} className={className}>
      {displayValue}{suffix}
    </div>
  )
}, (prevProps, nextProps) => {
  // Custom comparison for better memoization
  return prevProps.value === nextProps.value && 
         prevProps.suffix === nextProps.suffix &&
         prevProps.duration === nextProps.duration &&
         prevProps.className === nextProps.className
})

OptimizedAnimatedNumber.displayName = 'OptimizedAnimatedNumber'

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [performanceData, setPerformanceData] = React.useState({
    isSlowDevice: false,
    connectionSpeed: 'unknown' as 'slow' | 'fast' | 'unknown',
    shouldReduceAnimations: false
  })

  React.useEffect(() => {
    const checkPerformance = () => {
      // Check device capabilities
      const isSlowDevice = window.navigator.hardwareConcurrency < 4 || 
                          window.innerWidth < 768

      // Check connection speed
      const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
      const connectionSpeed = connection?.effectiveType?.includes('slow-2g') || connection?.effectiveType?.includes('2g') ? 'slow' : 'fast'

      // Check user preferences
      const shouldReduceAnimations = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      setPerformanceData({
        isSlowDevice,
        connectionSpeed,
        shouldReduceAnimations
      })
    }

    checkPerformance()
  }, [])

  return performanceData
}

// Memoized intersection observer hook
export const useOptimizedIntersectionObserver = (
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverInit = {}
) => {
  const targetRef = React.useRef<HTMLElement>(null)
  
  const memoizedCallback = useCallback(callback, [callback])
  
  React.useEffect(() => {
    const target = targetRef.current
    if (!target) return

    const observer = new IntersectionObserver(memoizedCallback, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    })

    observer.observe(target)
    return () => observer.disconnect()
  }, [memoizedCallback, options])

  return targetRef
}

// Debounced resize hook for performance
export const useOptimizedResize = (callback: () => void, delay: number = 250) => {
  const timeoutRef = React.useRef<NodeJS.Timeout>()
  
  const debouncedCallback = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    timeoutRef.current = setTimeout(callback, delay)
  }, [callback, delay])

  React.useEffect(() => {
    window.addEventListener('resize', debouncedCallback)
    return () => {
      window.removeEventListener('resize', debouncedCallback)
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [debouncedCallback])
}

// Lazy loading component wrapper
export const LazyWrapper = memo(({ 
  children, 
  fallback = <div>Loading...</div>,
  threshold = 0.1,
  rootMargin = '100px'
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
}) => {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  return (
    <div ref={ref}>
      {isVisible ? children : fallback}
    </div>
  )
})

LazyWrapper.displayName = 'LazyWrapper' 