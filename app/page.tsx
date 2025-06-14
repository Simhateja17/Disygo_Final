import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Portfolio from '../components/Portfolio'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-dark-900">
      <Header />
      <HeroSection />
      <ServicesSection />
      <Portfolio />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 