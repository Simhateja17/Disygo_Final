'use client'

import React, { useState, useEffect, useRef } from 'react'
import { ExternalLink, Eye, Github } from './Icons'
import AnimatedNumber from './AnimatedNumber'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const [selectedProject, setSelectedProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  const filters = ['All', 'Web Development', 'Mobile Development', 'Branding', 'Data Visualization']

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      description: "Modern e-commerce solution with advanced features",
      longDescription: "A comprehensive e-commerce platform built with modern technologies including React, Node.js, and MongoDB. Features include real-time inventory management, secure payment processing, and advanced analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "2.5K", likes: "324" }
    },
    {
      id: 2,
      title: "Restaurant App",
      category: "Mobile Development", 
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      description: "Food delivery app with real-time tracking",
      longDescription: "A comprehensive food delivery application with real-time order tracking, integrated payment systems, and restaurant management dashboard. Built with React Native for cross-platform compatibility.",
      technologies: ["React Native", "Firebase", "Stripe", "Google Maps", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "1.8K", likes: "256" }
    },
    {
      id: 3,
      title: "Corporate Identity",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Complete brand identity and design system",
      longDescription: "A complete brand identity package including logo design, brand guidelines, marketing materials, and digital design system. Created comprehensive visual identity that reflects company values.",
      technologies: ["Adobe Suite", "Figma", "Branding", "Print Design", "Web Design"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "3.2K", likes: "445" }
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      category: "Data Visualization",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      description: "Real-time analytics and reporting dashboard",
      longDescription: "Interactive analytics dashboard providing real-time insights with beautiful data visualizations. Features include custom reports, data filtering, and export capabilities.",
      technologies: ["D3.js", "React", "Python", "PostgreSQL", "Chart.js"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "4.1K", likes: "578" }
    },
    {
      id: 5,
      title: "Social Media Platform",
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      description: "Modern social networking platform",
      longDescription: "A full-featured social media platform with real-time messaging, content sharing, and community features. Built with scalable architecture and modern UI/UX principles.",
      technologies: ["Next.js", "PostgreSQL", "Socket.io", "AWS", "Tailwind"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "5.3K", likes: "732" }
    },
    {
      id: 6,
      title: "Fitness Mobile App",
      category: "Mobile Development",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
      description: "Comprehensive fitness tracking application",
      longDescription: "A comprehensive fitness application with workout tracking, nutrition monitoring, and social features. Includes AI-powered recommendations and progress analytics.",
      technologies: ["Flutter", "Firebase", "TensorFlow", "Health APIs", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      stats: { views: "2.9K", likes: "389" }
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
              className={`group relative overflow-hidden rounded-2xl metallic-glass hover-glow transition-all duration-500 cursor-pointer ${
                visibleProjects.includes(index) ? 'animate-scale-in' : 'opacity-0 translate-y-10'
              } ${selectedProject === project.id ? 'ring-2 ring-cyan-500 scale-105' : 'hover:scale-105'}`}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Image Container */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex gap-2">
                      <button className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/40 hover:scale-110 transition-all duration-300">
                        <Eye size={16} />
                      </button>
                      <button className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/40 hover:scale-110 transition-all duration-300">
                        <ExternalLink size={16} />
                      </button>
                      <button className="w-10 h-10 bg-cyan-500/20 backdrop-blur-sm rounded-full flex items-center justify-center text-cyan-400 hover:bg-cyan-500/40 hover:scale-110 transition-all duration-300">
                        <Github size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 text-xs text-gray-300">
                    <Eye size={12} />
                    <span>{project.stats.views}</span>
                    <span className="text-cyan-400">❤</span>
                    <span>{project.stats.likes}</span>
                  </div>
                </div>
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

                {/* Expanded Content */}
                <div className={`transition-all duration-500 overflow-hidden ${
                  selectedProject === project.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
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

                    <div className="flex gap-2">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                        Live Demo
                      </button>
                      <button className="flex-1 border border-cyan-500/50 text-cyan-400 py-2 px-4 rounded-lg text-sm font-medium hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105">
                        View Code
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="text-gray-300 font-semibold hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2 font-matrix-body group/btn text-sm">
                  {selectedProject === project.id ? 'HIDE DETAILS' : 'VIEW DETAILS'}
                  <span className={`transition-transform duration-300 ${
                    selectedProject === project.id ? 'rotate-180' : 'group-hover/btn:translate-x-1'
                  }`}>
                    {selectedProject === project.id ? '↑' : '→'}
                  </span>
                </button>
              </div>


            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            { value: 150, suffix: '+', label: 'Projects Completed', delay: 0 },
            { value: 50, suffix: '+', label: 'Happy Clients', delay: 200 },
            { value: 25, suffix: '+', label: 'Countries Served', delay: 400 },
            { value: 98, suffix: '%', label: 'Success Rate', delay: 600 }
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

        {/* Interactive CTA */}
        <div className="text-center">
          <button className="robot-primary-button px-8 py-4 rounded-lg hover-glow transition-all duration-300 font-medium transform hover:scale-105 hover:-translate-y-1 button-pulse group">
            <span className="flex items-center gap-3">
              VIEW ALL PROJECTS
              <div className="w-4 h-4 border-2 border-current rounded-full animate-spin group-hover:animate-none group-hover:scale-125 transition-all duration-300"></div>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio 