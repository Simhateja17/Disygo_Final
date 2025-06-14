import React from 'react'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

// Simple DISYGO text logo
export const DisygoTextLogo: React.FC<LogoProps> = ({ className = "", width = 120, height = 40 }) => (
  <div className={`flex items-center ${className}`}>
    <span className="text-2xl font-bold gradient-text tracking-wide font-matrix-logo">
      DISYGO
    </span>
  </div>
)

// Full logo with icon and text (for main pages)
export const DisygoFullLogo: React.FC<LogoProps> = ({ className = "", width = 200, height = 60 }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="relative">
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M25 25 Q40 15 50 30 Q60 15 75 25 Q70 40 55 50 Q70 60 75 75 Q60 85 50 70 Q40 85 25 75 Q30 60 45 50 Q30 40 25 25 Z" 
          stroke="url(#fullGradient)" 
          strokeWidth="4" 
          fill="none"
        />
        <defs>
          <linearGradient id="fullGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <span className="text-3xl font-bold gradient-text tracking-wide font-matrix-logo">DISYGO</span>
  </div>
)

// Compact logo for header (horizontal layout)
export const DisygoHeaderLogo: React.FC<LogoProps> = ({ className = "", width = 140, height = 40 }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {/* Simplified symbol for header */}
    <div className="relative">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M25 25 Q40 15 50 30 Q60 15 75 25 Q70 40 55 50 Q70 60 75 75 Q60 85 50 70 Q40 85 25 75 Q30 60 45 50 Q30 40 25 25 Z" 
          stroke="url(#headerGradient)" 
          strokeWidth="3" 
          fill="none"
        />
        <defs>
          <linearGradient id="headerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    {/* Text */}
    <div className="flex flex-col">
      <span className="text-xl font-bold gradient-text tracking-wide font-matrix-logo">
        DISYGO
      </span>
      <span className="text-xs text-gray-400 tracking-wider -mt-1 font-matrix-body">
        DIGITAL SOLUTIONS
      </span>
    </div>
  </div>
) 