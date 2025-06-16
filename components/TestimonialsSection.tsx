'use client'

import React from 'react'
import { Star, Quote } from './Icons'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CEO, TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b5e0?w=80&h=80&fit=crop&crop=face",
      content: "DISYGO transformed our digital presence completely. Their team delivered exceptional results that exceeded our expectations.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Marketing Director, StartupXYZ",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      content: "Working with DISYGO was a game-changer for our business. Their innovative solutions and professional approach are unmatched.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Founder, CreativeStudio",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      content: "The team at DISYGO is incredibly talented and dedicated. They brought our vision to life with stunning results.",
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Reviews From Our</span>{' '}
            <span className="cyan-gradient-text">Happy Clients</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="glass-effect rounded-2xl p-8 hover-glow transition-all duration-300 hover:transform hover:scale-105 relative"
            >
              <div className="absolute top-4 right-4 text-primary-500/20">
                <Quote size={40} />
              </div>
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-primary-500/20"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Star key={index} size={16} className="text-yellow-500 fill-current" />
                ))}
              </div>

              <p className="text-gray-300 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>
            </div>
          ))}
        </div>

        {/* Subscribe Section */}
        <div className="mt-20 glass-effect rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Subscribe To Get Latest Updates From Us
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Stay informed about our latest projects, industry insights, and exclusive offers. Join our newsletter today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 bg-dark-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors duration-300"
            />
            <button className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300 font-medium hover-glow">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 