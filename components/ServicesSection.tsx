'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Monitor, Smartphone, BarChart, Brain, Code, Headphones } from './Icons'
import AnimatedNumber from './AnimatedNumber'
import Link from 'next/link'

interface ServicesSectionProps {}

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
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
      icon: <Brain size={24} />,
      title: "AI AGENTS",
      description: "INTELLIGENT AI-POWERED SOLUTIONS THAT AUTOMATE TASKS, ENHANCE DECISION-MAKING, AND PROVIDE PERSONALIZED USER EXPERIENCES.",
      features: ["Custom AI Models", "Natural Language Processing", "Machine Learning", "Intelligent Automation"],
      color: "from-purple-500 to-pink-500"
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
      icon: <Code size={24} />,
      title: "APP DEVELOPMENT",
      description: "NATIVE AND CROSS-PLATFORM MOBILE APPLICATIONS THAT DELIVER SEAMLESS USER EXPERIENCES ACROSS IOS AND ANDROID DEVICES.",
      features: ["Native Development", "Cross-Platform Apps", "UI/UX Design", "App Store Optimization"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Headphones size={24} />,
      title: "AI CUSTOMER SERVICES",
      description: "ADVANCED AI-POWERED CUSTOMER SERVICE SOLUTIONS INCLUDING INTELLIGENT VOICE BOTS AND CHATBOTS THAT PROVIDE 24/7 SUPPORT AND ENHANCE CUSTOMER ENGAGEMENT.",
      features: ["Voice Bot Integration", "AI Chatbots", "Natural Language Understanding", "24/7 Automated Support"],
      color: "from-indigo-500 to-purple-500"
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
      {/* Simplified Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
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
              className={`service-card metallic-glass rounded-2xl p-8 cyan-border group relative overflow-hidden transform-gpu ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
                willChange: 'transform',
                transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
            >
              {/* Instant Gradient Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 rounded-2xl group-hover:opacity-10`}
                style={{ 
                  willChange: 'opacity',
                  transition: 'opacity 0.1s ease-out'
                }}
              ></div>
              
              {/* Ultra-responsive Icon Container */}
              <div className="mb-6 relative z-10">
                <div 
                  className="w-16 h-16 robot-primary-button rounded-lg flex items-center justify-center text-white relative overflow-hidden transform-gpu group-hover:scale-110"
                  style={{ 
                    willChange: 'transform',
                    transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  }}
                >
                  {service.icon}
                  {/* Instant shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full"
                    style={{ transition: 'transform 0.3s ease-out' }}
                  ></div>
                </div>
              </div>
              
              <h3 
                className="text-xl font-bold text-white mb-4 font-matrix-heading relative z-10 group-hover:text-brand-cyan"
                style={{ 
                  willChange: 'color',
                  transition: 'color 0.1s ease-out'
                }}
              >
                {service.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed font-matrix-body mb-4 relative z-10">
                {service.description}
              </p>

              {/* Optimized Features List */}
              <div className="border-t border-cyan-500/20 pt-4 mt-4">
                <h4 className="text-cyan-400 font-semibold mb-2 font-matrix-heading text-sm">KEY FEATURES:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="text-gray-300 text-sm flex items-center gap-2 font-matrix-body"
                    >
                      <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Instant animated particles */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100"
                style={{ transition: 'opacity 0.1s ease-out' }}
              >
                <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0ms' }}></div>
                <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '50ms' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '100ms' }}></div>
                <div className="absolute bottom-1/4 right-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '150ms' }}></div>
                <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '200ms' }}></div>
              </div>

              {/* Instant Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at center, rgba(0, 255, 255, 0.1) 0%, transparent 70%)',
                  willChange: 'opacity',
                  transition: 'opacity 0.1s ease-out'
                }}
              ></div>

              {/* Instant Card Lift Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none"
                style={{
                  boxShadow: '0 10px 25px rgba(0, 255, 255, 0.15)',
                  willChange: 'opacity',
                  transition: 'opacity 0.1s ease-out'
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Ultra-Fast Stats Section - INSTANT Animation */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { value: 3, suffix: '+', label: 'Years Experience' },
            { value: 30, suffix: '+', label: 'Companies Worked' },
            { value: 100, suffix: '%', label: 'Success Rate' },
            { value: 30, suffix: '+', label: 'Happy Clients' },
            { value: 3, suffix: '+', label: 'Countries' }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group transform-gpu hover:scale-105"
              style={{ 
                willChange: 'transform',
                transition: 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
              }}
            >
              <div 
                className="relative group-hover:scale-110"
                style={{ transition: 'transform 0.05s ease-out' }}
              >
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-4xl font-bold cyan-gradient-text mb-2"
                  duration={2000}
                />
              </div>
              <div 
                className="text-gray-400 group-hover:text-gray-300 font-matrix-body"
                style={{ transition: 'color 0.05s ease-out' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Instant Interactive CTA */}
        <div className="text-center mt-16">
          <Link 
            href="/contact"
            className="robot-primary-button px-8 py-4 rounded-lg font-medium transform-gpu hover:scale-105 hover:-translate-y-1 group inline-flex items-center" 
            style={{ 
              willChange: 'transform',
              transition: 'all 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <span className="flex items-center gap-3">
              START YOUR PROJECT
              <div 
                className="w-4 h-4 border-2 border-current rounded-full group-hover:animate-spin"
                style={{ transition: 'all 0.1s ease-out' }}
              ></div>
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 