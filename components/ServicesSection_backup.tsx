'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Monitor, Search, Smartphone, BarChart, PenTool, Shield } from './Icons'

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: <Monitor size={24} />,
      title: "WEBSITE DEVELOPMENT",
      description: "CUSTOM, RESPONSIVE WEBSITES BUILT WITH MODERN TECHNOLOGIES AND BEST PRACTICES FOR OPTIMAL PERFORMANCE AND USER EXPERIENCE.",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Search size={24} />,
      title: "SEO OPTIMIZATION",
      description: "BOOST YOUR ONLINE VISIBILITY AND DRIVE ORGANIC TRAFFIC WITH OUR COMPREHENSIVE SEARCH ENGINE OPTIMIZATION STRATEGIES.",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: <Smartphone size={24} />,
      title: "DIGITAL MARKETING",
      description: "STRATEGIC DIGITAL MARKETING CAMPAIGNS THAT CONNECT YOUR BRAND WITH YOUR TARGET AUDIENCE ACROSS MULTIPLE CHANNELS.",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: <BarChart size={24} />,
      title: "E-COMMERCE SOLUTIONS",
      description: "COMPLETE E-COMMERCE PLATFORMS WITH SECURE PAYMENT INTEGRATION AND INVENTORY MANAGEMENT SYSTEMS.",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: <PenTool size={24} />,
      title: "UI/UX DESIGN",
      description: "BEAUTIFUL, INTUITIVE DESIGNS THAT ENHANCE USER EXPERIENCE AND DRIVE ENGAGEMENT WITH YOUR DIGITAL PRODUCTS.",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: <Shield size={24} />,
      title: "CYBERSECURITY",
      description: "COMPREHENSIVE SECURITY SOLUTIONS TO PROTECT YOUR DIGITAL ASSETS AND ENSURE YOUR BUSINESS CONTINUITY.",
      color: "from-red-500 to-pink-400"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.service-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                setVisibleCards(prev => [...prev, index]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section ref={sectionRef} id="services" className="section-padding bg-black relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-matrix-heading animate-fade-in-up">
            <span className="text-white">WHAT WE OFFER</span>{' '}
            <span className="gradient-text">TO YOU!</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-matrix-body animate-fade-in-up delay-200">
            WE PROVIDE COMPREHENSIVE DIGITAL SOLUTIONS TAILORED TO HELP YOUR BUSINESS THRIVE IN THE DIGITAL LANDSCAPE WITH CUTTING-EDGE TECHNOLOGY.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`service-card metallic-glass rounded-2xl p-8 transition-all duration-500 cursor-pointer group relative overflow-hidden ${
                visibleCards.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${
                hoveredCard === index 
                  ? 'scale-105 shadow-2xl border-white/20' 
                  : 'hover:scale-105'
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Hover Background Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-border-flow"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white transition-all duration-500 bg-gradient-to-br ${service.color} group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                    <div className="transition-transform duration-300 group-hover:scale-125">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors duration-300 font-matrix-heading">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed font-matrix-body group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-white font-semibold inline-flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:text-blue-400">
                    LEARN MORE
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Interactive particles */}
              {hoveredCard === index && (
                <div className="absolute inset-0 pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full animate-particle"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 2}s`
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-400">Expert Team</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">99%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold gradient-text mb-2">500+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 