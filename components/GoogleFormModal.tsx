'use client'

import React from 'react'
import { X } from './Icons'

interface GoogleFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const GoogleFormModal: React.FC<GoogleFormModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  return (
    <div className="fixed inset-0 z-[9999] overflow-auto bg-black/80 backdrop-blur-sm">
      {/* Backdrop */}
      <div 
        className="absolute inset-0"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative flex items-start justify-center min-h-screen p-4 py-8">
        <div className="relative bg-black/95 backdrop-blur-md border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 w-full max-w-5xl my-4">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20 sticky top-0 bg-black/95 backdrop-blur-md rounded-t-2xl z-10">
            <div>
              <h2 className="text-2xl font-bold text-white font-matrix-heading">
                <span className="cyan-gradient-text">START YOUR PROJECT</span>
              </h2>
              <p className="text-gray-400 mt-1 font-matrix-body">
                Tell us about your project and let's build something amazing together!
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg group flex-shrink-0"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
          
          {/* Form Container */}
          <div className="relative">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSd9lIANK4Q1nX7Rt2BFasKjcn0HICYydOYt_kLCr05MI0YEsA/viewform?embedded=true" 
              width="100%" 
              height="1800" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="border-none rounded-b-2xl"
              title="Project Form"
              loading="lazy"
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleFormModal 