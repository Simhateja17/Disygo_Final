'use client'

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react'
import { MessageCircle } from './Icons'
import { OptimizedInteractiveRobot } from './OptimizedInteractiveRobot'
import AnimatedNumber from './AnimatedNumber'
import Image from 'next/image'

interface OptimizedHeroSectionProps {
  onOpenChat?: () => void
}

type CardSettingsKey = 'card1' | 'card2' | 'card3';

// Memoized settings to prevent recreation on every render
const MOBILE_SETTINGS = {
  logo: {
    scale: 100,
    translateY: "translate-y-2",
    translateX: "translate-x-0"
  },
  robot: {
    scale: "scale-140",
    translateY: "translate-y-10",
    translateX: "translate-x-0",
    margins: "mt-4 mb-8"
  },
  stats: {
    container: {
      layout: "flex items-center gap-7 pt-8 flex-nowrap justify-center",
      padding: "pt-4 px-2 mt-2"
    },
    card1: {
      position: "relative",
      translateX: "translate-x-0",
      translateY: "-translate-y-5",
      padding: "p-2",
      fontSize: "text-sm",
      labelSize: "text-xs",
      hoverScale: "hover:scale-105",
      hoverFontSize: "group-hover:text-base",
      width: "w-24 flex-shrink-0"
    },
    card2: {
      position: "relative", 
      translateX: "translate-x-0",
      translateY: "-translate-y-5",
      padding: "p-2",
      fontSize: "text-sm",
      labelSize: "text-xs",
      hoverScale: "hover:scale-105",
      hoverFontSize: "group-hover:text-base",
      width: "w-24 flex-shrink-0"
    },
    card3: {
      position: "relative",
      translateX: "translate-x-0",
      translateY: "-translate-y-5",
      padding: "p-2",
      fontSize: "text-sm",
      labelSize: "text-xs",
      hoverScale: "hover:scale-105",
      hoverFontSize: "group-hover:text-base",
      width: "w-24 flex-shrink-0"
    }
  },
  chatButton: {
    container: {
      position: "relative",
      justifyContent: "flex justify-center",
      margin: "mt-6",
      padding: "px-4",
      translateX: "translate-x-0",
      translateY: "-translate-y-0"
    },
    button: {
      padding: "px-8 py-4",
      fontSize: "text-base",
      iconSize: "w-5 h-5",
      hoverScale: "hover:scale-105",
      borderRadius: "rounded-full"
    }
  }
} as const

const DESKTOP_SETTINGS = {
  logo: {
    scale: 200,
    translateY: "lg:-translate-y-4",
    translateX: "lg:translate-x-16"
  },
  robot: {
    scale: "lg:scale-100",
    translateY: "lg:translate-y-10",
    translateX: "-lg:translate-x-50",
    margins: "lg:mt-0 lg:mb-0"
  },
  stats: {
    container: {
      layout: "lg:flex lg:items-center lg:gap-8 lg:pt-8 lg:flex-wrap",
      padding: "lg:pt-8 lg:px-0 lg:mt-0"
    },
    card1: {
      position: "lg:absolute",
      translateX: "lg:translate-x-[30px]",
      translateY: "lg:translate-y-[10px]",
      padding: "lg:p-4",
      fontSize: "lg:text-3xl",
      labelSize: "lg:text-sm",
      hoverScale: "lg:hover:scale-110",
      hoverFontSize: "lg:group-hover:text-4xl"
    },
    card2: {
      position: "lg:absolute",
      translateX: "lg:translate-x-[280px]",
      translateY: "lg:translate-y-[10px]",
      padding: "lg:p-4",
      fontSize: "lg:text-3xl",
      labelSize: "lg:text-sm",
      hoverScale: "lg:hover:scale-110",
      hoverFontSize: "lg:group-hover:text-4xl"
    },
    card3: {
      position: "lg:absolute",
      translateX: "lg:translate-x-[160px]",
      translateY: "lg:translate-y-[155px]",
      padding: "lg:p-4",
      fontSize: "lg:text-3xl",
      labelSize: "lg:text-sm",
      hoverScale: "lg:hover:scale-110",
      hoverFontSize: "lg:group-hover:text-4xl"
    }
  },
  chatButton: {
    container: {
      position: "lg:relative",
      justifyContent: "lg:flex lg:justify-center",
      margin: "lg:mt-8",
      padding: "lg:px-0",
      translateX: "lg:translate-x-0",
      translateY: "lg:translate-y-0"
    },
    button: {
      padding: "lg:px-10 lg:py-5",
      fontSize: "lg:text-lg",
      iconSize: "lg:w-6 lg:h-6",
      hoverScale: "lg:hover:scale-110",
      borderRadius: "lg:rounded-full"
    }
  }
} as const

const OptimizedHeroSection: React.FC<OptimizedHeroSectionProps> = ({ onOpenChat }) => {
  const [isHighPerformanceMode, setIsHighPerformanceMode] = useState(true)
  const heroRef = useRef<HTMLElement>(null)

  // Check device capabilities for performance optimization
  useEffect(() => {
    const checkPerformance = () => {
      // Enable full features on powerful devices
      const isHighEnd = window.navigator.hardwareConcurrency >= 4 && 
                       window.innerWidth >= 1024 &&
                       !window.matchMedia('(prefers-reduced-motion: reduce)').matches

      setIsHighPerformanceMode(isHighEnd)
    }

    checkPerformance()
    window.addEventListener('resize', checkPerformance)
    return () => window.removeEventListener('resize', checkPerformance)
  }, [])

  const handleChatClick = useCallback(() => {
    onOpenChat?.()
  }, [onOpenChat])

  // Memoized stats to prevent recreating on every render
  const statsData = useMemo(() => [
    { value: 30, suffix: "+", label: "PROJECTS COMPLETED", duration: 2500 },
    { value: 98, suffix: "%", label: "CLIENT SATISFACTION", duration: 2000 },
    { value: 3, suffix: "+", label: "YEARS EXPERIENCE", duration: 1500 }
  ], [])

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
    >
      {/* Simplified Background - CSS only, no JS manipulation */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center max-w-7xl w-full">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 overflow-visible">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div 
                      className="logo-container"
                      style={{
                        '--mobile-scale': MOBILE_SETTINGS.logo.scale / 100,
                        '--desktop-scale': DESKTOP_SETTINGS.logo.scale / 100,
                      } as React.CSSProperties}
                    >
                      <Image 
                        src="/2.png" 
                        alt="DISYGO" 
                        width={600}
                        height={450}
                        priority={true}
                        className={`w-auto object-contain transform 
                          ${MOBILE_SETTINGS.logo.translateY} sm:-translate-y-15 ${DESKTOP_SETTINGS.logo.translateY}
                          ${MOBILE_SETTINGS.logo.translateX} sm:translate-x-1 ${DESKTOP_SETTINGS.logo.translateX}
                          transition-all duration-300 group-hover:scale-105`}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Optimized Stats Cards */}
              <div className={`${MOBILE_SETTINGS.stats.container.layout} sm:grid sm:grid-cols-2 ${DESKTOP_SETTINGS.stats.container.layout} 
                ${MOBILE_SETTINGS.stats.container.padding} sm:pt-6 sm:px-0 sm:mt-4 ${DESKTOP_SETTINGS.stats.container.padding}
                justify-center sm:justify-center lg:justify-start
                overflow-x-auto sm:overflow-x-visible scrollbar-hide`}>
                
                {statsData.map((stat, index) => {
                  const cardSettings: CardSettingsKey = index === 0 ? 'card1' : index === 1 ? 'card2' : 'card3';
                  const mobileCard = MOBILE_SETTINGS.stats[cardSettings];
                  const desktopCard = DESKTOP_SETTINGS.stats[cardSettings];
                  
                  return (
                    <div key={index} className={`text-center metallic-glass 
                      ${mobileCard.position} ${desktopCard.position}
                      ${mobileCard.width} sm:w-full lg:w-auto
                      transform ${mobileCard.translateX} ${mobileCard.translateY} ${desktopCard.translateX} ${desktopCard.translateY}
                      ${mobileCard.padding} sm:p-3 ${desktopCard.padding} rounded-lg
                      cyan-border-glow cyan-glow-effect animate-cyan-pulse 
                      ${mobileCard.hoverScale} ${desktopCard.hoverScale} transition-all duration-300 cursor-pointer group`}>
                      
                      <AnimatedNumber 
                        value={stat.value} 
                        suffix={stat.suffix} 
                        className={`${mobileCard.fontSize} sm:text-2xl ${desktopCard.fontSize} font-bold cyan-gradient-text font-matrix-heading ${mobileCard.hoverFontSize} sm:group-hover:text-3xl ${desktopCard.hoverFontSize} transition-all duration-300`}
                        duration={stat.duration}
                      />
                      <div className={`text-gray-400 ${mobileCard.labelSize} sm:text-sm ${desktopCard.labelSize} mt-1 font-matrix-body group-hover:text-gray-300 transition-colors duration-300`}>
                        {stat.label}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right Column - Optimized Robot */}
            <div className={`order-1 lg:order-2 flex items-center justify-center 
              ${MOBILE_SETTINGS.robot.margins} sm:mt-0 sm:mb-0 ${DESKTOP_SETTINGS.robot.margins}
              ${MOBILE_SETTINGS.robot.scale} sm:scale-90 ${DESKTOP_SETTINGS.robot.scale}
              transform ${MOBILE_SETTINGS.robot.translateX} sm:translate-x-0 ${DESKTOP_SETTINGS.robot.translateX}
              ${MOBILE_SETTINGS.robot.translateY} sm:translate-y-0 ${DESKTOP_SETTINGS.robot.translateY}`}>
              
              <div className="w-full max-w-lg relative px-4 sm:px-0 mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
                
                {/* Conditional Robot Loading */}
                <OptimizedInteractiveRobot 
                  enableFullRobot={true}
                  priority={true}
                />
                
                {/* Let's Chat Button */}
                <div className={`${MOBILE_SETTINGS.chatButton.container.justifyContent} ${DESKTOP_SETTINGS.chatButton.container.justifyContent} 
                  ${MOBILE_SETTINGS.chatButton.container.position} ${DESKTOP_SETTINGS.chatButton.container.position}
                  ${MOBILE_SETTINGS.chatButton.container.margin} sm:mt-6 ${DESKTOP_SETTINGS.chatButton.container.margin}
                  ${MOBILE_SETTINGS.chatButton.container.padding} sm:px-0 ${DESKTOP_SETTINGS.chatButton.container.padding}
                  transform ${MOBILE_SETTINGS.chatButton.container.translateX} ${MOBILE_SETTINGS.chatButton.container.translateY} 
                  ${DESKTOP_SETTINGS.chatButton.container.translateX} ${DESKTOP_SETTINGS.chatButton.container.translateY}`}>
                  
                  <button
                    onClick={handleChatClick}
                    className={`group relative overflow-hidden ${MOBILE_SETTINGS.chatButton.button.hoverScale} ${DESKTOP_SETTINGS.chatButton.button.hoverScale} transition-all duration-300`}
                  >
                    <div className={`relative ${MOBILE_SETTINGS.chatButton.button.padding} sm:px-9 sm:py-4 ${DESKTOP_SETTINGS.chatButton.button.padding} bg-black/40 backdrop-blur-md border border-cyan-500/30 
                      ${MOBILE_SETTINGS.chatButton.button.borderRadius} ${DESKTOP_SETTINGS.chatButton.button.borderRadius} transition-all duration-300 ease-out
                      group-hover:border-cyan-400/60 group-hover:bg-cyan-500/10
                      shadow-lg group-hover:shadow-2xl group-hover:shadow-cyan-500/25`}>
                      
                      <div className="relative z-20 flex items-center space-x-4 text-white">
                        <div className="relative z-30">
                          <div className={`${MOBILE_SETTINGS.chatButton.button.iconSize} sm:w-6 sm:h-6 ${DESKTOP_SETTINGS.chatButton.button.iconSize} relative`}>
                            <MessageCircle 
                              size={20} 
                              className="relative z-30 transition-all duration-500 
                                group-hover:scale-110 group-hover:rotate-12 
                                text-cyan-400 group-hover:text-cyan-300" 
                            />
                          </div>
                        </div>
                        
                        <span className={`relative z-30 font-matrix-heading font-semibold ${MOBILE_SETTINGS.chatButton.button.fontSize} sm:text-lg ${DESKTOP_SETTINGS.chatButton.button.fontSize} tracking-wide
                          text-white group-hover:text-cyan-100 transition-all duration-500`}>
                          LET'S CHAT
                        </span>
                        
                        <div className="relative z-30">
                          <div className="w-3 h-3 bg-emerald-400 rounded-full 
                            group-hover:bg-emerald-300 transition-colors duration-300">
                            <div className="absolute inset-0 rounded-full bg-emerald-400 
                              animate-ping opacity-30 group-hover:opacity-50 -z-10"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simplified Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2 font-matrix-body">SCROLL DOWN</p>
        </div>
      </div>
    </section>
  )
}

export default OptimizedHeroSection 