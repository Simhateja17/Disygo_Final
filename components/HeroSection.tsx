'use client'

import React from 'react'
import { ArrowRight, Play } from './Icons'
import { InteractiveRobot } from './InteractiveRobot'
import AnimatedNumber from './AnimatedNumber'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-turquoise/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-cyan/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 overflow-visible">
                <div className="flex justify-center lg:justify-start">
                  <img 
                    src="/2.png" 
                    alt="DISYGO" 
                    className="h-45 md:h-65 lg:h-85 xl:h-101 w-auto object-contain transform -translate-y-10 translate-x-3"
                  />
                </div>
              </div>

              <div className="flex items-center gap-8 pt-8 flex-wrap ">
                <div className=" absolute text-center metallic-glass p-4 rounded-lg transform translate-x-[30px] translate-y-[10px] cyan-border-glow cyan-glow-effect animate-cyan-pulse">
                  <AnimatedNumber 
                    value={500} 
                    suffix="+" 
                    className="text-3xl font-bold cyan-gradient-text font-matrix-heading"
                    duration={2500}
                  />
                  <div className="text-gray-400 text-sm mt-1 font-matrix-body">PROJECTS COMPLETED</div>
                </div>
                <div className="absolute text-center metallic-glass p-4 rounded-lg transform translate-x-[280px] translate-y-[10px] cyan-border-glow cyan-glow-effect animate-cyan-pulse">
                  <AnimatedNumber 
                    value={98} 
                    suffix="%" 
                    className="text-3xl font-bold cyan-gradient-text font-matrix-heading"
                    duration={2000}
                  />
                  <div className="text-gray-400 text-sm mt-1 font-matrix-body">CLIENT SATISFACTION</div>
                </div>
                <div className="absolute text-center metallic-glass p-4 rounded-lg transform translate-x-[160px] translate-y-[155px] cyan-border-glow cyan-glow-effect animate-cyan-pulse">
                  <AnimatedNumber 
                    value={5} 
                    suffix="+" 
                    className="text-3xl font-bold cyan-gradient-text font-matrix-heading"
                    duration={1500}
                  />
                  <div className="text-gray-400 text-sm mt-1 font-matrix-body">YEARS EXPERIENCE</div>
                </div>
              </div>
            </div>

            {/* Right Column - Interactive Robot */}
            <div className="order-1 lg:order-2 flex items-center justify-center">
              <div className="w-full max-w-lg relative">
                <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent rounded-full blur-2xl"></div>
                <InteractiveRobot />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection