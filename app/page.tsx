import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Portfolio from '../components/Portfolio'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      {/* About Section - Using Services as About for now */}
      <div id="about">
        <ServicesSection />
      </div>
      <Portfolio />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 