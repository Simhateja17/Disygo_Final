'use client'

import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import AnimatedNumber from './AnimatedNumber'

const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Modern e-commerce solution with advanced features",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Restaurant App",
      category: "Mobile Development", 
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      description: "Food delivery app with real-time tracking",
      technologies: ["React Native", "Firebase", "Stripe"]
    },
    {
      id: 3,
      title: "Corporate Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Complete brand identity and design system",
      technologies: ["Adobe Suite", "Figma", "Branding"]
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Real-time analytics and reporting dashboard",
      technologies: ["D3.js", "React", "Python"]
    }
  ]

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Our Recent</span>{' '}
            <span className="cyan-gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Take a look at some of our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-2xl glass-effect hover-glow transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="aspect-video overflow-hidden">
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-brand-cyan font-semibold text-sm">
                    {project.category}
                  </span>
                  <button className="text-gray-400 hover:text-brand-cyan cyan-hover transition-colors duration-300">
                    <ExternalLink size={20} />
                  </button>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-brand-cyan/20 text-brand-cyan rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Stats */}
        <div className="glass-effect rounded-2xl p-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <AnimatedNumber 
                value={250} 
                suffix="+" 
                className="text-3xl font-bold cyan-gradient-text mb-2"
                duration={2500}
              />
              <div className="text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center">
              <AnimatedNumber 
                value={50} 
                suffix="+" 
                className="text-3xl font-bold cyan-gradient-text mb-2"
                duration={2000}
              />
              <div className="text-gray-400">Happy Clients</div>
            </div>
            <div className="text-center">
              <AnimatedNumber 
                value={15} 
                suffix="+" 
                className="text-3xl font-bold cyan-gradient-text mb-2"
                duration={1800}
              />
              <div className="text-gray-400">Awards Won</div>
            </div>
            <div className="text-center">
              <AnimatedNumber 
                value={5} 
                suffix="+" 
                className="text-3xl font-bold cyan-gradient-text mb-2"
                duration={1500}
              />
              <div className="text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="robot-primary-button text-brand-cyan px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 font-medium hover-glow">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  )
}

export default PortfolioSection 