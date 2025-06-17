'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Star, Quote, ArrowRight } from './Icons'

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
      content: "Working with DISYGO transformed our digital presence completely. Their innovative approach and attention to detail exceeded all our expectations. The team's expertise in modern web technologies is truly remarkable.",
      rating: 5,
      company: "TechStartup Inc.",
      project: "E-commerce Platform"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GlobalBrand",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      content: "The mobile app DISYGO developed for us has revolutionized how we connect with our customers. Outstanding quality, timely delivery, and exceptional support throughout the entire process.",
      rating: 5,
      company: "GlobalBrand",
      project: "Mobile Application"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, CreativeStudio",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "DISYGO's creative team brought our vision to life with a stunning brand identity. Their understanding of design principles and user experience is unmatched in the industry.",
      rating: 5,
      company: "CreativeStudio",
      project: "Brand Identity"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, DataCorp",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
      content: "The analytics dashboard they built has transformed how we visualize and understand our data. Incredible attention to detail and seamless integration with our existing systems.",
      rating: 5,
      company: "DataCorp",
      project: "Analytics Dashboard"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Operations Manager, RetailPlus",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face",
      content: "DISYGO delivered beyond our expectations. The e-commerce solution they built has increased our online sales by 300%. Professional, reliable, and incredibly skilled team.",
      rating: 5,
      company: "RetailPlus",
      project: "E-commerce Solution"
    }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            testimonials.forEach((_, index) => {
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

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying, testimonials.length])

  const handleTestimonialClick = (index: number) => {
    setActiveTestimonial(index)
    setIsAutoPlaying(false)
    
    // Resume auto-play after 10 seconds
    setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)
  }

  const currentTestimonial = testimonials[activeTestimonial]

  return (
    <section id="testimonials" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-matrix-heading">
            <span className="text-white">WHAT OUR</span>{' '}
            <span className="cyan-gradient-text">CLIENTS SAY</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-matrix-body">
            Don&apos;t just take our word for it. Here&apos;s what our satisfied clients have to say about their experience working with us.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="metallic-glass rounded-3xl p-8 lg:p-12 hover-glow transition-all duration-500 relative overflow-hidden group">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
            
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-cyan-500/20 group-hover:text-cyan-500/40 transition-colors duration-500">
              <Quote size={48} />
            </div>

            <div className="relative z-10 pt-8">
              {/* Rating */}
              <div className="flex justify-center mb-6">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={`${
                        i < currentTestimonial.rating
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-400'
                      } transition-colors duration-300`}
                    />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 text-center font-matrix-body italic">
                "{currentTestimonial.content}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="relative group/avatar">
                  <img
                    src={currentTestimonial.avatar}
                    alt={currentTestimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-500/20 group-hover/avatar:border-cyan-500/60 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="text-center">
                  <h4 className="text-white font-bold font-matrix-heading text-lg">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400 font-matrix-body text-sm">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-cyan-400 font-matrix-body text-xs mt-1">
                    {currentTestimonial.company} • {currentTestimonial.project}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTestimonialClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeTestimonial
                    ? 'bg-cyan-500 scale-125 shadow-lg shadow-cyan-500/50'
                    : 'bg-gray-600 hover:bg-gray-500 hover:scale-110'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm font-matrix-body flex items-center gap-2"
            >
              {isAutoPlaying ? (
                <>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  AUTO-ROTATING
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  PAUSED
                </>
              )}
            </button>
          </div>
        </div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`metallic-glass rounded-2xl p-6 hover-glow transition-all duration-500 cursor-pointer group hover:scale-105 ${
                visibleCards.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleTestimonialClick(index)}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-400'
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-300 mb-6 font-matrix-body leading-relaxed text-sm">
                "{testimonial.content.slice(0, 120)}..."
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-cyan-500/20 group-hover:border-cyan-500/60 transition-colors duration-300"
                />
                <div>
                  <h4 className="text-white font-semibold font-matrix-heading text-sm">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-400 font-matrix-body text-xs">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Read More */}
              <div className="mt-4 pt-4 border-t border-gray-700 group-hover:border-cyan-500/30 transition-colors duration-300">
                <button className="text-cyan-400 hover:text-cyan-300 text-xs font-matrix-body flex items-center gap-1 group/btn">
                  READ FULL REVIEW
                  <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>

              {/* Hover Particles */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 3 }, (_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 300}ms`,
                      animationDuration: `${2 + Math.random() * 2}s`
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 font-matrix-body">
            Ready to join our satisfied clients?
          </p>
          <button className="robot-primary-button px-8 py-4 rounded-lg hover-glow transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1 button-pulse group">
            <span className="flex items-center gap-3">
              START YOUR PROJECT
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            </button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 