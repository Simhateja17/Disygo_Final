'use client'

import React, { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import OptimizedHeroSection from '../components/OptimizedHeroSection'
import ChatModal from '../components/ChatModal'
import { LazyWrapper } from '../components/PerformanceOptimizations'

const ServicesSection = dynamic(() => import('../components/ServicesSection'), {
  loading: () => (
    <div className="min-h-[400px] bg-black flex items-center justify-center">
      <div className="text-cyan-400 text-lg animate-pulse">Loading Services...</div>
    </div>
  )
})

const Portfolio = dynamic(() => import('../components/Portfolio'), {
  loading: () => (
    <div className="min-h-[400px] bg-black flex items-center justify-center">
      <div className="text-cyan-400 text-lg animate-pulse">Loading Portfolio...</div>
    </div>
  )
})

const TestimonialsSection = dynamic(() => import('../components/TestimonialsSection'), {
  loading: () => (
    <div className="min-h-[400px] bg-black flex items-center justify-center">
      <div className="text-cyan-400 text-lg animate-pulse">Loading Testimonials...</div>
    </div>
  )
})

const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => (
    <div className="min-h-[200px] bg-black flex items-center justify-center">
      <div className="text-cyan-400 text-lg animate-pulse">Loading Footer...</div>
    </div>
  )
})

export default function Home() {
  const [isChatModalOpen, setIsChatModalOpen] = useState(false)
  
  const openChatModal = () => setIsChatModalOpen(true)
  const closeChatModal = () => setIsChatModalOpen(false)

  return (
    <main className="min-h-screen bg-black">
      {/* Header loads immediately - critical */}
      <Header />
      
      {/* Hero Section with optimization */}
      <OptimizedHeroSection onOpenChat={openChatModal} />
      
      {/* Lazy load remaining sections */}
      <LazyWrapper fallback={
        <div className="min-h-[400px] bg-black flex items-center justify-center">
          <div className="text-cyan-400 animate-pulse">Loading Services...</div>
        </div>
      }>
        <div id="about">
          <ServicesSection />
        </div>
      </LazyWrapper>

      <LazyWrapper fallback={
        <div className="min-h-[400px] bg-black flex items-center justify-center">
          <div className="text-cyan-400 animate-pulse">Loading Portfolio...</div>
        </div>
      }>
        <Portfolio />
      </LazyWrapper>

      <LazyWrapper fallback={
        <div className="min-h-[400px] bg-black flex items-center justify-center">
          <div className="text-cyan-400 animate-pulse">Loading Testimonials...</div>
        </div>
      }>
        <TestimonialsSection />
      </LazyWrapper>

      <LazyWrapper fallback={
        <div className="min-h-[200px] bg-black flex items-center justify-center">
          <div className="text-cyan-400 animate-pulse">Loading Footer...</div>
        </div>
      }>
        <Footer />
      </LazyWrapper>
      
      {/* Chat Modal - Only load when needed */}
      {isChatModalOpen && (
        <Suspense fallback={null}>
          <ChatModal 
            isOpen={isChatModalOpen} 
            onClose={closeChatModal} 
          />
        </Suspense>
      )}
    </main>
  )
} 