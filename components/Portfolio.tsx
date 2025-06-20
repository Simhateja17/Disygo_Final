'use client'

import React, { useState, useEffect, useRef } from 'react'

import AnimatedNumber from './AnimatedNumber'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  const filters = ['All', 'Web Development', 'AI Agents', 'Branding']

  const projects = [
    {
      id: 1,
      title: "Fast&Fab",
      category: "Web Development",
      image: "/fast-and-fab-project.png",
      description: "Modern e-commerce platform for fashion and lifestyle",
      longDescription: "Fast&Fab is a comprehensive e-commerce solution designed for the fashion industry. Features include product catalog management, secure payment processing, order tracking, and customer management system.",
      technologies: ["React", "Node.js", "NeonDB", "Cashfree Payment Gateway", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "3.2K", likes: "445" }
    },
    {
      id: 2,
      title: "Jarvis AI Agent",
      category: "AI Agents",
      image: "/jarvis-ai-project.png",
      description: "Advanced AI assistant with voice and chat capabilities",
      longDescription: "Jarvis AI Agent is an intelligent virtual assistant that combines natural language processing, voice recognition, and machine learning to provide personalized assistance and automation.",
      technologies: ["Type Script", "Gemini API", "Speech Recognition", "NLP", "Docker", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "2.8K", likes: "392" }
    },
    {
      id: 3,
      title: "Subramanyam Technologies",
      category: "Branding",
      image: "/subramanyam-technologies.png",
      description: "Corporate identity design for technology company",
      longDescription: "Complete brand identity package for Subramanyam Technologies including logo design, brand guidelines, business cards, and digital assets. Created a modern, professional identity that reflects their tech expertise.",
      technologies: ["Adobe Illustrator", "Photoshop", "Brand Strategy", "Logo Design"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "1.9K", likes: "278" }
    },
    {
      id: 4,
      title: "Aarunya",
      category: "Branding",
      image: "/aarunya.png",
      description: "Elegant brand identity for lifestyle brand",
      longDescription: "Aarunya brand identity focuses on elegance and sophistication. The design includes logo variations, color palette, typography guidelines, and application across various touchpoints.",
      technologies: ["Adobe Creative Suite", "Brand Strategy", "Visual Identity"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "2.1K", likes: "315" }
    },
    {
      id: 5,
      title: "The Pilot Chef",
      category: "Branding",
      image: "/the-pilot-chef.png",
      description: "Creative branding for culinary aviation theme",
      longDescription: "The Pilot Chef combines aviation and culinary themes in a unique brand identity. Features custom logo design, menu layouts, and brand applications that capture the spirit of adventure and fine dining.",
      technologies: ["Illustrator", "InDesign", "Brand Development", "Menu Design"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "1.7K", likes: "243" }
    },
    {
      id: 6,
      title: "Swank Stores",
      category: "Branding",
      image: "/swank-stores.png",
      description: "Modern retail brand identity and design system",
      longDescription: "Swank Stores brand identity emphasizes modern retail aesthetics with a focus on premium shopping experience. Includes storefront design, packaging, and digital brand guidelines.",
      technologies: ["Brand Strategy", "Retail Design", "Packaging Design", "Digital Assets"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "2.4K", likes: "367" }
    },
    {
      id: 7,
      title: "Pasuparthy",
      category: "Branding",
      image: "/pasuparthy.png",
      description: "Professional services brand identity",
      longDescription: "Pasuparthy Super Market branding focuses on trust, reliability, and expertise. The design system includes corporate materials, digital presence, and professional documentation.",
      technologies: ["Corporate Identity", "Professional Branding", "Print Design"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "1.5K", likes: "198" }
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            filteredProjects.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProjects(prev => [...prev, index])
              }, index * 150)
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
  }, [filteredProjects])

  useEffect(() => {
    setVisibleProjects([])
    // Re-trigger animations when filter changes
    setTimeout(() => {
      filteredProjects.forEach((_, index) => {
        setTimeout(() => {
          setVisibleProjects(prev => [...prev, index])
        }, index * 100)
      })
    }, 100)
  }, [activeFilter])

  return (
    <section id="portfolio" ref={sectionRef} className="section-padding bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-matrix-heading">
            <span className="text-white">Our Recent</span>{' '}
            <span className="cyan-gradient-text">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-matrix-body">
            Take a look at some of our latest projects and see how we&apos;ve helped businesses achieve their digital goals.
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 font-matrix-body ${
                activeFilter === filter
                  ? 'robot-primary-button hover-glow'
                  : 'metallic-glass text-gray-300 hover:text-white border border-gray-600 hover:border-cyan-500'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-2xl metallic-glass hover-glow transition-all duration-500 hover:scale-105 ${
                visibleProjects.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                

              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-cyan-400 font-semibold text-sm font-matrix-body bg-cyan-500/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <div className="flex gap-1">
                    {Array.from({ length: 3 }, (_, i) => (
                      <div key={i} className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 200}ms` }}></div>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 font-matrix-heading">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 font-matrix-body leading-relaxed">
                  {project.description}
                </p>

                {/* Expanded Content - Always Visible */}
                <div className="border-t border-cyan-500/20 pt-4 mb-4">
                  <p className="text-gray-300 text-sm mb-4 font-matrix-body">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded text-xs font-medium border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { value: 30, suffix: '+', label: 'Projects Completed', delay: 0 },
            { value: 30, suffix: '+', label: 'Happy Clients', delay: 200 },
            { value: 3, suffix: '+', label: 'Countries Served', delay: 400 },
            { value: 100, suffix: '%', label: 'Success Rate', delay: 600 }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${stat.delay}ms` }}
            >
              <div className="relative">
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  className="text-3xl font-bold cyan-gradient-text mb-2 group-hover:text-4xl transition-all duration-300"
                  duration={2000 + stat.delay}
                />
                <div className="absolute inset-0 bg-gradient-radial from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 font-matrix-body text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}

export default Portfolio 