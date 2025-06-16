'use client'

import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from './Icons'
import { DisygoTextLogo } from './DisygoLogos'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    "Web Development",
    "Digital Marketing", 
    "Graphic Design",
    "SEO Services",
    "Mobile Apps",
    "E-commerce"
  ]

  const company = [
    "About Us",
    "Our Team",
    "Portfolio",
    "Careers",
    "Contact",
    "Blog"
  ]

  const quickLinks = [
    "Privacy Policy",
    "Terms of Service",
    "Support",
    "FAQ",
    "Sitemap",
    "Pricing"
  ]

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <DisygoTextLogo />
            
            <p className="text-gray-400 leading-relaxed">
              We are a digital agency that helps businesses grow through innovative solutions and strategic digital marketing.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-brand-cyan" />
                <span>contact@disygo.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-brand-cyan" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-brand-cyan" />
                <span>123 Business Ave, Digital City, DC 12345</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-brand-cyan cyan-hover transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-brand-cyan cyan-hover transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-brand-cyan cyan-hover transition-colors duration-300"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400">
              © {currentYear} DISYGO. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan transition-all duration-300 hover:shadow-cyan-glow"
                >
                  <Facebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan transition-all duration-300 hover:shadow-cyan-glow"
                >
                  <Twitter size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan transition-all duration-300 hover:shadow-cyan-glow"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-cyan transition-all duration-300 hover:shadow-cyan-glow"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 