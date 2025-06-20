'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Play } from './Icons'
import { InteractiveRobot } from './InteractiveRobot'
import AnimatedNumber from './AnimatedNumber'

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const heroRef = useRef<HTMLElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  // Mobile Configuration Settings
  const mobileSettings = {
    logo: {
      height: "h-25",
      translateY: "-translate-y-30",
      translateX: "translate-x-0"
    },
    robot: {
      scale: "scale-120",
      translateY: "-translate-y-50",
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
        translateY: "translate-y-0",
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
        translateY: "translate-y-0",
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
        translateY: "translate-y-0",
        padding: "p-2",
        fontSize: "text-sm",
        labelSize: "text-xs",
        hoverScale: "hover:scale-105",
        hoverFontSize: "group-hover:text-base",
        width: "w-24 flex-shrink-0"
      }
    }
  }

  // Desktop Configuration Settings  
  const desktopSettings = {
    logo: {
      height: "lg:h-85 xl:h-101",
      translateY: "lg:-translate-y-10",
      translateX: "lg:translate-x-3"
    },
    robot: {
      scale: "lg:scale-100",
      translateY: "lg:translate-y-0",
      translateX: "lg:translate-x-0",
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
    }
  }

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width
        const y = (e.clientY - rect.top) / rect.height
        setMousePosition({ x, y })
      }
    }

    const heroElement = heroRef.current
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove)
      return () => heroElement.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    // Create floating particles
    const createParticles = () => {
      if (!particlesRef.current) return
      
      for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div')
        particle.className = 'absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30'
        particle.style.left = Math.random() * 100 + '%'
        particle.style.top = Math.random() * 100 + '%'
        particle.style.animation = `float ${3 + Math.random() * 4}s ease-in-out infinite`
        particle.style.animationDelay = Math.random() * 3 + 's'
        particlesRef.current.appendChild(particle)
      }
    }

    createParticles()
  }, [])

  const parallaxStyle = {
    transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
    transition: 'transform 0.3s ease-out'
  }

  const reverseParallaxStyle = {
    transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`,
    transition: 'transform 0.3s ease-out'
  }

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none"></div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse"
          style={parallaxStyle}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl animate-pulse delay-1000"
          style={reverseParallaxStyle}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-cyan/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Interactive Grid Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 144 }, (_, i) => (
              <div 
                key={i}
                className="border border-cyan-500/20 transition-all duration-500 hover:bg-cyan-500/10"
                style={{
                  animationDelay: `${i * 50}ms`,
                  transform: isHovered ? `scale(${1 + Math.random() * 0.1})` : 'scale(1)'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-4 sm:gap-8 lg:gap-12 items-center max-w-7xl w-full">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 overflow-visible">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <img 
                      src="/2.png" 
                      alt="DISYGO" 
                      className={`${mobileSettings.logo.height} sm:h-45 md:h-65 ${desktopSettings.logo.height} w-auto object-contain transform 
                        ${mobileSettings.logo.translateY} sm:-translate-y-15 ${desktopSettings.logo.translateY}
                        ${mobileSettings.logo.translateX} sm:translate-x-1 ${desktopSettings.logo.translateX}
                        transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-2xl group-hover:drop-shadow-cyan-500/20`}
                      style={{
                        filter: isHovered ? 'drop-shadow(0 0 30px rgba(0, 255, 255, 0.3))' : 'none'
                      }}
                    />
                    {/* Glowing effect on hover */}
                    <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>

              {/* Enhanced Stats Cards */}
              <div className={`${mobileSettings.stats.container.layout} sm:grid sm:grid-cols-2 ${desktopSettings.stats.container.layout} 
                ${mobileSettings.stats.container.padding} sm:pt-6 sm:px-0 sm:mt-4 ${desktopSettings.stats.container.padding}
                justify-center sm:justify-center lg:justify-start
                overflow-x-auto sm:overflow-x-visible scrollbar-hide`}>
                <div className={`text-center metallic-glass 
                  ${mobileSettings.stats.card1.position} ${desktopSettings.stats.card1.position}
                  ${mobileSettings.stats.card1.width} sm:w-full lg:w-auto
                  transform ${mobileSettings.stats.card1.translateX} ${mobileSettings.stats.card1.translateY} ${desktopSettings.stats.card1.translateX} ${desktopSettings.stats.card1.translateY}
                  ${mobileSettings.stats.card1.padding} sm:p-3 ${desktopSettings.stats.card1.padding} rounded-lg
                  cyan-border-glow cyan-glow-effect animate-cyan-pulse 
                  ${mobileSettings.stats.card1.hoverScale} ${desktopSettings.stats.card1.hoverScale} transition-all duration-300 cursor-pointer group`}>
                  <AnimatedNumber 
                    value={18} 
                    suffix="" 
                    className={`${mobileSettings.stats.card1.fontSize} sm:text-2xl ${desktopSettings.stats.card1.fontSize} font-bold cyan-gradient-text font-matrix-heading ${mobileSettings.stats.card1.hoverFontSize} sm:group-hover:text-3xl ${desktopSettings.stats.card1.hoverFontSize} transition-all duration-300`}
                    duration={2500}
                  />
                  <div className={`text-gray-400 ${mobileSettings.stats.card1.labelSize} sm:text-sm ${desktopSettings.stats.card1.labelSize} mt-1 font-matrix-body group-hover:text-gray-300 transition-colors duration-300`}>PROJECTS COMPLETED</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`text-center metallic-glass 
                  ${mobileSettings.stats.card2.position} ${desktopSettings.stats.card2.position}
                  ${mobileSettings.stats.card2.width} sm:w-full lg:w-auto
                  transform ${mobileSettings.stats.card2.translateX} ${mobileSettings.stats.card2.translateY} ${desktopSettings.stats.card2.translateX} ${desktopSettings.stats.card2.translateY}
                  ${mobileSettings.stats.card2.padding} sm:p-3 ${desktopSettings.stats.card2.padding} rounded-lg
                  cyan-border-glow cyan-glow-effect animate-cyan-pulse 
                  ${mobileSettings.stats.card2.hoverScale} ${desktopSettings.stats.card2.hoverScale} transition-all duration-300 cursor-pointer group`}>
                  <AnimatedNumber 
                    value={98} 
                    suffix="%" 
                    className={`${mobileSettings.stats.card2.fontSize} sm:text-2xl ${desktopSettings.stats.card2.fontSize} font-bold cyan-gradient-text font-matrix-heading ${mobileSettings.stats.card2.hoverFontSize} sm:group-hover:text-3xl ${desktopSettings.stats.card2.hoverFontSize} transition-all duration-300`}
                    duration={2000}
                  />
                  <div className={`text-gray-400 ${mobileSettings.stats.card2.labelSize} sm:text-sm ${desktopSettings.stats.card2.labelSize} mt-1 font-matrix-body group-hover:text-gray-300 transition-colors duration-300`}>CLIENT SATISFACTION</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className={`text-center metallic-glass 
                  ${mobileSettings.stats.card3.position} ${desktopSettings.stats.card3.position}
                  ${mobileSettings.stats.card3.width} sm:w-full lg:w-auto
                  transform ${mobileSettings.stats.card3.translateX} ${mobileSettings.stats.card3.translateY} ${desktopSettings.stats.card3.translateX} ${desktopSettings.stats.card3.translateY}
                  ${mobileSettings.stats.card3.padding} sm:p-3 ${desktopSettings.stats.card3.padding} rounded-lg
                  cyan-border-glow cyan-glow-effect animate-cyan-pulse 
                  ${mobileSettings.stats.card3.hoverScale} ${desktopSettings.stats.card3.hoverScale} transition-all duration-300 cursor-pointer group`}>
                  <AnimatedNumber 
                    value={2} 
                    suffix="+" 
                    className={`${mobileSettings.stats.card3.fontSize} sm:text-2xl ${desktopSettings.stats.card3.fontSize} font-bold cyan-gradient-text font-matrix-heading ${mobileSettings.stats.card3.hoverFontSize} sm:group-hover:text-3xl ${desktopSettings.stats.card3.hoverFontSize} transition-all duration-300`}
                    duration={1500}
                  />
                  <div className={`text-gray-400 ${mobileSettings.stats.card3.labelSize} sm:text-sm ${desktopSettings.stats.card3.labelSize} mt-1 font-matrix-body group-hover:text-gray-300 transition-colors duration-300`}>YEARS EXPERIENCE</div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-cyan-500/10 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>


            </div>

            {/* Right Column - Interactive Robot */}
            <div className={`order-1 lg:order-2 flex items-center justify-center 
              ${mobileSettings.robot.margins} sm:mt-0 sm:mb-0 ${desktopSettings.robot.margins}
              ${mobileSettings.robot.scale} sm:scale-90 ${desktopSettings.robot.scale}
              transform ${mobileSettings.robot.translateX} sm:translate-x-0 ${desktopSettings.robot.translateX}
              ${mobileSettings.robot.translateY} sm:translate-y-0 ${desktopSettings.robot.translateY}`}>
              <div className="w-full max-w-lg relative
                px-4 sm:px-0
                mx-auto">
                <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
                <InteractiveRobot />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
  
  export default HeroSection