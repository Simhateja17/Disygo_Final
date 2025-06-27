'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from './Icons'
import { DisygoHeaderLogo } from './DisygoLogos'

interface HeaderProps {
  onOpenModal: () => void
}

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'SERVICES', href: '#services' },
  { name: 'PORTFOLIO', href: '#portfolio' },
  { name: 'CONTACT', href: '#contact' },
]

const Header = ({ onOpenModal }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)

  // Mobile Configuration Settings
  const mobileSettings = {
    logo: {
      container: {
        position: "relative",
        padding: "p-2",
        margin: "m-0",
        translateX: "-translate-x-5",
        translateY: "translate-y-0",
        hoverScale: "hover:scale-30"
      },
      size: {
        width: 100,
        height: 32
      }
    }
  }

  // Desktop Configuration Settings  
  const desktopSettings = {
    logo: {
      container: {
        position: "lg:relative",
        padding: "lg:p-0",
        margin: "lg:m-0",
        translateX: "lg:translate-x-0",
        translateY: "lg:translate-y-0",
        hoverScale: "lg:hover:scale-105"
      },
      size: {
        width: 120,
        height: 40
      }
    }
  }



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

    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }

    // Set initial values
    handleResize()
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (href: string) => {
    // Don't scroll if modal is open
    if (document.documentElement.classList.contains('modal-open')) {
      return
    }
    
    const element = document.querySelector(href)
    if (element) {
      // Use instant scroll in production to avoid conflicts
      const isProduction = process.env.NODE_ENV === 'production'
      element.scrollIntoView({ 
        behavior: isProduction ? 'auto' : 'smooth',
        block: 'start'
      })
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
          <div className={`${mobileSettings.logo.container.position} ${desktopSettings.logo.container.position}
            ${mobileSettings.logo.container.padding} sm:p-1 ${desktopSettings.logo.container.padding}
            ${mobileSettings.logo.container.margin} sm:m-0 ${desktopSettings.logo.container.margin}
            transform ${mobileSettings.logo.container.translateX} ${mobileSettings.logo.container.translateY}
            ${desktopSettings.logo.container.translateX} ${desktopSettings.logo.container.translateY}
            ${mobileSettings.logo.container.hoverScale} ${desktopSettings.logo.container.hoverScale} 
            transition-transform duration-300`}>
            <DisygoHeaderLogo 
              width={isDesktop ? desktopSettings.logo.size.width : mobileSettings.logo.size.width}
              height={isDesktop ? desktopSettings.logo.size.height : mobileSettings.logo.size.height}
            />
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
            <button 
              onClick={onOpenModal}
              className="robot-primary-button px-6 py-2 rounded-lg hover-glow transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1"
            >
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
              <button 
                onClick={onOpenModal}
                className="robot-primary-button px-6 py-2 rounded-lg mt-4 w-full transform hover:scale-105"
              >
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