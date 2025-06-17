'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Monitor, Search, Smartphone, BarChart, PenTool, Shield } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [selectedService, setSelectedService] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      icon: <Monitor size={24} />,
      title: "WEBSITE DEVELOPMENT",
      description: "CUSTOM, RESPONSIVE WEBSITES BUILT WITH MODERN TECHNOLOGIES AND BEST PRACTICES FOR OPTIMAL PERFORMANCE AND USER EXPERIENCE.",
      features: ["Responsive Design", "Performance Optimization", "SEO Ready", "Modern Frameworks"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Search size={24} />,
      title: "SEO OPTIMIZATION",
      description: "BOOST YOUR ONLINE VISIBILITY AND DRIVE ORGANIC TRAFFIC WITH OUR COMPREHENSIVE SEARCH ENGINE OPTIMIZATION STRATEGIES.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Smartphone size={24} />,
      title: "DIGITAL MARKETING",
      description: "STRATEGIC DIGITAL MARKETING CAMPAIGNS THAT CONNECT YOUR BRAND WITH YOUR TARGET AUDIENCE ACROSS MULTIPLE CHANNELS.",
      features: ["Social Media Marketing", "PPC Campaigns", "Email Marketing", "Analytics"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <BarChart size={24} />,
      title: "E-COMMERCE SOLUTIONS",
      description: "COMPLETE E-COMMERCE PLATFORMS WITH SECURE PAYMENT INTEGRATION AND INVENTORY MANAGEMENT SYSTEMS.",
      features: ["Payment Integration", "Inventory Management", "Order Processing", "Customer Portal"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX DESIGN",
      description: "BEAUTIFUL, INTUITIVE DESIGNS THAT ENHANCE USER EXPERIENCE AND DRIVE ENGAGEMENT WITH YOUR DIGITAL PRODUCTS.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Shield size={24} />,
      title: "CYBERSECURITY",
      description: "COMPREHENSIVE SECURITY SOLUTIONS TO PROTECT YOUR DIGITAL ASSETS AND ENSURE YOUR BUSINESS CONTINUITY.",
      features: ["Security Audits", "Threat Detection", "Data Protection", "Compliance"],
      color: "from-red-500 to-orange-500"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card')
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index])
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-matrix-heading">
            <span className="text-white">WHAT WE OFFER</span>{' '}
            <span className="cyan-gradient-text">TO YOU!</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-matrix-body">
            WE PROVIDE COMPREHENSIVE DIGITAL SOLUTIONS TAILORED TO HELP YOUR BUSINESS THRIVE IN THE DIGITAL LANDSCAPE WITH CUTTING-EDGE TECHNOLOGY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card metallic-glass rounded-2xl p-8 hover-glow cyan-border transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-10'
              } ${selectedService === index ? 'ring-2 ring-cyan-500 scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedService(selectedService === index ? null : index)}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Icon Container */}
              <div className="mb-6 relative z-10">
                <div className="w-16 h-16 robot-primary-button rounded-lg flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative">
                  {service.icon}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-cyan transition-colors duration-300 font-matrix-heading relative z-10">
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-matrix-body mb-4 relative z-10">
                {service.description}
              </p>

              {/* Enhanced Features List */}
              <div className={`transition-all duration-500 overflow-hidden ${
                selectedService === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-cyan-500/20 pt-4 mb-4">
                  <h4 className="text-cyan-400 font-semibold mb-2 font-matrix-heading text-sm">KEY FEATURES:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-gray-300 text-sm flex items-center gap-2 font-matrix-body"
                        style={{ animationDelay: `${featureIndex * 100}ms` }}
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 relative z-10">
                <button className="text-gray-300 font-semibold hover:text-brand-cyan cyan-hover transition-colors duration-300 flex items-center gap-2 font-matrix-body group/btn">
                  {selectedService === index ? 'HIDE DETAILS' : 'LEARN MORE'}
                  <span className={`transition-transform duration-300 ${
                    selectedService === index ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                  }`}>
                    {selectedService === index ? '↑' : '→'}
                  </span>
                </button>
              </div>

              {/* Hover Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 5 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 200}ms`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { value: 15, suffix: '+', label: 'Years Experience', delay: 0 },
            { value: 15, suffix: '+', label: 'Expert Team', delay: 200 },
            { value: 99, suffix: '%', label: 'Success Rate', delay: 400 },
            { value: 500, suffix: '+', label: 'Happy Clients', delay: 600 }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="relative">
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-bold cyan-gradient-text mb-2 group-hover:text-5xl transition-all duration-300"
                  duration={2000 + stat.delay}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-matrix-body">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Interactive CTA */}
        <div className="text-center mt-16">
          <button className="robot-primary-button px-8 py-4 rounded-lg hover-glow transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1 button-pulse group">
            <span className="flex items-center gap-3">
              START YOUR PROJECT
              <div className="w-4 h-4 border-2 border-current rounded-full animate-spin group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 