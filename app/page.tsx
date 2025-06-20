'use client'

import React, { useState } from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import Portfolio from '../components/Portfolio'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import GoogleFormModal from '../components/GoogleFormModal'
import ChatModal from '../components/ChatModal'
import FloatingContact from '../components/FloatingContact'

export default function Home() {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false)
  const [isChatModalOpen, setIsChatModalOpen] = useState(false)

  const openFormModal = () => setIsFormModalOpen(true)
  const closeFormModal = () => setIsFormModalOpen(false)
  
  const openChatModal = () => setIsChatModalOpen(true)
  const closeChatModal = () => setIsChatModalOpen(false)

  return (
    <main className="min-h-screen bg-black">
      <Header onOpenModal={openFormModal} />
      <HeroSection onOpenChat={openChatModal} />
      {/* About Section - Using Services as About for now */}
      <div id="about">
        <ServicesSection onOpenModal={openFormModal} />
      </div>
      <Portfolio />
      <TestimonialsSection onOpenModal={openFormModal} />
      <Footer />
      
      {/* Floating Contact with Chat Option */}
      <FloatingContact onOpenChat={openChatModal} />
      
      {/* Modal Instances */}
      <GoogleFormModal 
        isOpen={isFormModalOpen} 
        onClose={closeFormModal} 
      />
      <ChatModal 
        isOpen={isChatModalOpen} 
        onClose={closeChatModal} 
      />
    </main>
  )
} 