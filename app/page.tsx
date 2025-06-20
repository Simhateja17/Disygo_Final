'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Portfolio from '../components/Portfolio'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import GoogleFormModal from '../components/GoogleFormModal'

export default function Home() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)

  const openFormModal = () => setIsFormModalOpen(true)
  const closeFormModal = () => setIsFormModalOpen(false)

  return (
    <main className="min-h-screen bg-black">
      <Header onOpenModal={openFormModal} />
      <HeroSection />
      {/* About Section - Using Services as About for now */}
      <div id="about">
        <ServicesSection onOpenModal={openFormModal} />
      </div>
      <Portfolio />
      <TestimonialsSection onOpenModal={openFormModal} />
      <Footer />
      
      {/* Single Modal Instance */}
      <GoogleFormModal 
        isOpen={isFormModalOpen} 
        onClose={closeFormModal} 
      />
    </main>
  )
} 