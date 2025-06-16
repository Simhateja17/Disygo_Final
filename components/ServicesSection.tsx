'use client'

import React from 'react'
import { Monitor, Search, Smartphone, BarChart, PenTool, Shield } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const ServicesSection = () => {
  const services = [
    {
      icon: <Monitor size={24} />,
      title: "WEBSITE DEVELOPMENT",
      description: "CUSTOM, RESPONSIVE WEBSITES BUILT WITH MODERN TECHNOLOGIES AND BEST PRACTICES FOR OPTIMAL PERFORMANCE AND USER EXPERIENCE."
    },
    {
      icon: <Search size={24} />,
      title: "SEO OPTIMIZATION",
      description: "BOOST YOUR ONLINE VISIBILITY AND DRIVE ORGANIC TRAFFIC WITH OUR COMPREHENSIVE SEARCH ENGINE OPTIMIZATION STRATEGIES."
    },
    {
      icon: <Smartphone size={24} />,
      title: "DIGITAL MARKETING",
      description: "STRATEGIC DIGITAL MARKETING CAMPAIGNS THAT CONNECT YOUR BRAND WITH YOUR TARGET AUDIENCE ACROSS MULTIPLE CHANNELS."
    },
    {
      icon: <BarChart size={24} />,
      title: "E-COMMERCE SOLUTIONS",
      description: "COMPLETE E-COMMERCE PLATFORMS WITH SECURE PAYMENT INTEGRATION AND INVENTORY MANAGEMENT SYSTEMS."
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX DESIGN",
      description: "BEAUTIFUL, INTUITIVE DESIGNS THAT ENHANCE USER EXPERIENCE AND DRIVE ENGAGEMENT WITH YOUR DIGITAL PRODUCTS."
    },
    {
      icon: <Shield size={24} />,
      title: "CYBERSECURITY",
      description: "COMPREHENSIVE SECURITY SOLUTIONS TO PROTECT YOUR DIGITAL ASSETS AND ENSURE YOUR BUSINESS CONTINUITY."
    }
  ]

  return (
    <section id="services" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-matrix-heading">
            <span className="text-white">WHAT WE OFFER</span>{' '}
            <span className="cyan-gradient-text">TO YOU!</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-matrix-body">
            WE PROVIDE COMPREHENSIVE DIGITAL SOLUTIONS TAILORED TO HELP YOUR BUSINESS THRIVE IN THE DIGITAL LANDSCAPE WITH CUTTING-EDGE TECHNOLOGY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="metallic-glass rounded-2xl p-8 hover-glow cyan-border transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="mb-6">
                <div className="w-16 h-16 robot-primary-button rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors duration-300 font-matrix-heading">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-matrix-body">
                {service.description}
              </p>
              
              <div className="mt-6">
                <button className="text-gray-300 font-semibold hover:text-brand-cyan cyan-hover transition-colors duration-300 flex items-center gap-2 font-matrix-body">
                  LEARN MORE
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <AnimatedNumber 
              value={15} 
              suffix="+" 
              className="text-4xl font-bold cyan-gradient-text mb-2"
              duration={2000}
            />
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <AnimatedNumber 
              value={15} 
              suffix="+" 
              className="text-4xl font-bold cyan-gradient-text mb-2"
              duration={2200}
            />
            <div className="text-gray-400">Expert Team</div>
          </div>
          <div className="text-center">
            <AnimatedNumber 
              value={99} 
              suffix="%" 
              className="text-4xl font-bold cyan-gradient-text mb-2"
              duration={2500}
            />
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <AnimatedNumber 
              value={500} 
              suffix="+" 
              className="text-4xl font-bold cyan-gradient-text mb-2"
              duration={3000}
            />
            <div className="text-gray-400">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 