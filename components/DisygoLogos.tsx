import React from 'react'
import Image from 'next/image'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

// Simple DISYGO text logo
export const DisygoTextLogo: React.FC<LogoProps> = ({ className = "", width = 120, height = 40 }) => (
  <div className={`flex items-center ${className}`}>
    <Image 
      src="/Disygo Logo offical.png" 
      alt="DISYGO" 
      width={width}
      height={height}
      className="object-contain"
    />
  </div>
)

// Full logo with icon and text (for main pages)
export const DisygoFullLogo: React.FC<LogoProps> = ({ className = "", width = 200, height = 60 }) => (
  <div className={`flex items-center ${className}`}>
    <Image 
      src="/Disygo Logo offical.png" 
      alt="DISYGO" 
      width={width}
      height={height}
      className="object-contain"
    />
  </div>
)

// Compact logo for header (horizontal layout)
export const DisygoHeaderLogo: React.FC<LogoProps> = ({ className = "", width = 120, height = 40 }) => (
  <div className={`flex items-center ${className}`}>
    <Image 
      src="/Disygo Logo offical.png" 
      alt="DISYGO" 
      width={width}
      height={height}
      className="object-contain"
    />
  </div>
)