'use client'

import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, X, ArrowRight, MessageCircle } from './Icons'

interface FloatingContactProps {
  onOpenChat?: () => void
}

const FloatingContact: React.FC<FloatingContactProps> = ({ onOpenChat }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const contactOptions = [
    {
      icon: MessageCircle,
      label: 'Chat with AI',
      action: () => {
        setIsOpen(false)
        onOpenChat?.()
      },
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.open('mailto:disygo.work@gmail.com'),
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Phone,
      label: 'Call Us',
      action: () => window.open('tel:+15551234567'),
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Visit Us',
      action: () => {
        const element = document.getElementById('contact')
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      },
      color: 'from-purple-500 to-pink-500'
    }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-24 right-8 z-40 hidden md:block">
      {/* Contact Options */}
      <div className={`space-y-3 mb-4 transition-all duration-500 ${
        isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        {contactOptions.map((option, index) => (
          <div
            key={index}
            className="flex items-center gap-3 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Label */}
            <div className="bg-black/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              <span className="text-white text-sm font-matrix-body">{option.label}</span>
            </div>
            
            {/* Button */}
            <button
              onClick={option.action}
              className={`w-12 h-12 bg-gradient-to-r ${option.color} rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 group animate-slide-up`}
            >
              <option.icon size={18} />
            </button>
          </div>
        ))}
      </div>

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'rotate-45' : ''
        } group relative overflow-hidden`}
      >
        {/* Ripple Effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        
        {/* Icon */}
        <div className="relative z-10">
          {isOpen ? <X size={20} /> : <Mail size={20} />}
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-ping opacity-20"></div>
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-xs font-matrix-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Quick Contact
        </div>
      )}
    </div>
  )
}

export default FloatingContact 