'use client'

import React, { useState } from 'react'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from './Icons'
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
      icon: Facebook, 
      href: '#', 
      label: 'Facebook',
      color: 'hover:text-blue-500 hover:shadow-blue-500/20'
    },
    { 
      icon: Twitter, 
      href: '#', 
      label: 'Twitter',
      color: 'hover:text-sky-400 hover:shadow-sky-400/20'
    },
    { 
      icon: Instagram, 
      href: '#', 
      label: 'Instagram',
      color: 'hover:text-pink-500 hover:shadow-pink-500/20'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      color: 'hover:text-blue-600 hover:shadow-blue-600/20'
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hello@disygo.com',
      href: 'mailto:hello@disygo.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '123 Tech Street, Digital City, DC 12345',
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
    { name: 'Web Development', href: '#' },
    { name: 'Mobile Apps', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Digital Marketing', href: '#' },
    { name: 'E-commerce', href: '#' }
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
              © 2024 DISYGO. All rights reserved. Crafted with ❤️ for the digital future.
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
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 robot-primary-button rounded-full flex items-center justify-center hover-glow transition-all duration-300 transform hover:scale-110 z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowRight size={16} className="rotate-[-90deg] group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  )
}

export default Footer 