'use client'

import React from 'react'
import { ArrowRight, Play } from './Icons'
import { InteractiveRobot } from './InteractiveRobot'

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl w-full">
            
            {/* Left Column - Text Content */}
            <div className="space-y-8 animate-fade-in order-2 lg:order-1">
              <div className="space-y-4 overflow-visible">
                <h1 className="text-super-large font-bold leading-tight font-matrix-heading overflow-visible">
                  <span className="gradient-text text-offset-right font-weight-semibold">DISYGO</span>
                </h1>
              </div>

              <div className="flex items-center gap-8 pt-8 flex-wrap">
                <div className="text-center metallic-glass p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text font-matrix-heading">500+</div>
                  <div className="text-gray-400 text-sm mt-1 font-matrix-body">PROJECTS COMPLETED</div>
                </div>
                <div className="text-center metallic-glass p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text font-matrix-heading">98%</div>
                  <div className="text-gray-400 text-sm mt-1 font-matrix-body">CLIENT SATISFACTION</div>
                </div>
                <div className="text-center metallic-glass p-4 rounded-lg">
                  <div className="text-3xl font-bold gradient-text font-matrix-heading">5+</div>
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