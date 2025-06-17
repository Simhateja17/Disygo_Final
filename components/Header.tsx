'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from './Icons'
import { DisygoHeaderLogo } from './DisygoLogos'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  const navItems = [
    { name: 'HOME', href: '#home' },
    { name: 'ABOUT', href: '#about' },
    { name: 'SERVICES', href: '#services' },
    { name: 'PORTFOLIO', href: '#portfolio' },
    { name: 'CONTACT', href: '#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-white/20 shadow-lg shadow-cyan-500/10' 
        : 'bg-black/90 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="container mx-auto px-6 py-0 -my-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="transform hover:scale-105 transition-transform duration-300">
            <DisygoHeaderLogo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className={`relative text-gray-300 hover:text-brand-cyan cyan-hover transition-all duration-300 font-matrix-body font-medium group ${
                  activeSection === item.href.substring(1) ? 'text-brand-cyan' : ''
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-cyan to-brand-turquoise transition-all duration-300 group-hover:w-full ${
                  activeSection === item.href.substring(1) ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="robot-primary-button px-6 py-2 rounded-lg hover-glow transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1">
              GET STARTED
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white transition-colors transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative">
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-gray-300 hover:text-brand-cyan cyan-hover transition-all duration-300 font-matrix-body font-medium text-left transform hover:translate-x-2 ${
                    activeSection === item.href.substring(1) ? 'text-brand-cyan translate-x-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.name}
                </button>
              ))}
              <button className="robot-primary-button px-6 py-2 rounded-lg mt-4 w-full transform hover:scale-105">
                GET STARTED
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 