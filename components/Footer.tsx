'use client'

import React, { useState } from 'react'
import { Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from './Icons'
import { DisygoTextLogo } from './DisygoLogos'

       const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const socialLinks = [
    { 
      icon: Twitter, 
      href: 'https://x.com/disygo97505?t=82oOIrmbuw6W7v8t7iJaaA&s=09', 
      label: 'Twitter',
      color: 'hover:text-sky-400 hover:shadow-sky-400/20'
    },
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/disygo.in/', 
      label: 'Instagram',
      color: 'hover:text-pink-500 hover:shadow-pink-500/20'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'disygo.work@gmail.com',
      href: 'mailto:disygo.work@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 87123 64696',
      href: 'tel:+918712364696'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Tirupati, Andhra Pradesh, India',
      href: '#'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    { name: 'Website Development', href: '#services' },
    { name: 'AI Agents', href: '#services' },
    { name: 'Digital Marketing', href: '#services' },
    { name: 'E-commerce Solutions', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'AI Customer Services', href: '#services' }
  ]

  return (
    <footer id="contact" className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 py-16">
          
          {/* Company Info */}
          <div className="lg:col-span-1 animate-slide-up">
            <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
              <DisygoTextLogo />
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed font-matrix-body">
              Transforming ideas into digital reality. We create cutting-edge web solutions that drive business growth and deliver exceptional user experiences.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 metallic-glass rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:shadow-lg group`}
                  onMouseEnter={() => setHoveredSocial(social.label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                  
                  {/* Tooltip */}
                  {hoveredSocial === social.label && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-black/80 text-white text-xs rounded font-matrix-body animate-fade-in">
                      {social.label}
                    </div>
                  )}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 font-matrix-heading">
              QUICK LINKS
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 cyan-hover transition-all duration-300 flex items-center gap-2 group font-matrix-body"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {link.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 font-matrix-heading">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.href}
                    className="text-gray-400 hover:text-cyan-400 cyan-hover transition-all duration-300 flex items-center gap-2 group font-matrix-body"
                  >
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300">
                      {service.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-xl font-bold text-white mb-6 font-matrix-heading">
              GET IN TOUCH
            </h3>
            
            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <div className="w-8 h-8 metallic-glass rounded-lg flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors duration-300">
                    <info.icon size={16} />
                  </div>
                  <span className="font-matrix-body text-sm group-hover:translate-x-1 transition-transform duration-300">
                    {info.value}
                  </span>
                </a>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gray-900/50 rounded-lg p-4 hover:bg-gray-900/70 transition-colors duration-300">
              <h4 className="text-white font-semibold mb-3 font-matrix-heading text-sm">
                STAY UPDATED
              </h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:outline-none transition-colors duration-300 font-matrix-body text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubscribed}
                  className="w-full robot-primary-button py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
                >
                  {isSubscribed ? 'SUBSCRIBED!' : 'SUBSCRIBE'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm font-matrix-body">
              © 2025 DISYGO. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-matrix-body">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-matrix-body">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 font-matrix-body">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => {
          // Don't scroll if modal is open
          if (document.documentElement.classList.contains('modal-open')) {
            return
          }
          
          // Use instant scroll in production to avoid conflicts
          const isProduction = process.env.NODE_ENV === 'production'
          window.scrollTo({ 
            top: 0, 
            behavior: isProduction ? 'auto' : 'smooth' 
          })
        }}
        className="fixed bottom-8 right-8 w-12 h-12 robot-primary-button rounded-full flex items-center justify-center hover-glow transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowRight size={16} className="rotate-[-90deg] group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  )
}

export default Footer 