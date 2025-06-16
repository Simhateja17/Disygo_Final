'use client'

import React, { useState, useEffect, useRef } from 'react'

interface AnimatedNumberProps {
  value: number
  suffix?: string
  duration?: number
  className?: string
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ 
  value, 
  suffix = '', 
  duration = 2000,
  className = '' 
}) => {
  const [displayValue, setDisplayValue] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animateValue = () => {
      const now = Date.now()
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.round(startValue + (value - startValue) * easeOutQuart)
      
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
}

export default AnimatedNumber 