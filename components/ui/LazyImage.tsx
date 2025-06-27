'use client'

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { useLazyLoading } from '../../lib/hooks/useLazyLoading';

interface LazyImageProps extends Omit<ImageProps, 'onLoad' | 'onError'> {
  fallbackSrc?: string;
  showPlaceholder?: boolean;
  placeholderBlur?: boolean;
  onImageLoad?: () => void;
  onImageError?: () => void;
  lazyOptions?: {
    threshold?: number;
    rootMargin?: string;
  };
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  fallbackSrc,
  showPlaceholder = true,
  placeholderBlur = true,
  onImageLoad,
  onImageError,
  lazyOptions,
  className = '',
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  
  const { targetRef, isIntersecting } = useLazyLoading({
    threshold: lazyOptions?.threshold || 0.1,
    rootMargin: lazyOptions?.rootMargin || '50px',
  });

  const handleLoad = () => {
    setIsLoading(false);
    onImageLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
    onImageError?.();
  };

  // Generate a simple placeholder data URL
  const createPlaceholder = (width: number, height: number) => {
    return `data:image/svg+xml;base64,${btoa(
      `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#1a1a1a"/>
        <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#666" font-family="Arial, sans-serif" font-size="14">
          Loading...
        </text>
      </svg>`
    )}`;
  };

  return (
    <div ref={targetRef} className={`relative overflow-hidden ${className}`}>
      {isIntersecting && (
        <Image
          src={imageSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          } ${className}`}
          placeholder={placeholderBlur && showPlaceholder ? 'blur' : 'empty'}
          blurDataURL={
            placeholderBlur && showPlaceholder
              ? createPlaceholder(
                  typeof props.width === 'number' ? props.width : 400,
                  typeof props.height === 'number' ? props.height : 300
                )
              : undefined
          }
          {...props}
        />
      )}
      
      {/* Loading placeholder */}
      {(!isIntersecting || isLoading) && showPlaceholder && (
        <div 
          className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center"
          style={{
            width: props.width || '100%',
            height: props.height || '100%',
          }}
        >
          <div className="text-gray-500 text-sm">Loading...</div>
        </div>
      )}
      
      {/* Error state */}
      {hasError && !fallbackSrc && (
        <div 
          className="absolute inset-0 bg-gray-900 flex items-center justify-center"
          style={{
            width: props.width || '100%',
            height: props.height || '100%',
          }}
        >
          <div className="text-gray-500 text-sm">Failed to load image</div>
        </div>
      )}
    </div>
  );
};

export default LazyImage; 