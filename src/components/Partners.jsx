import React, { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

const PARTNERS = [
  {
    id: 1,
    name: 'D4Media',
    image: '/images/partners/D4.jpg',
    description: 'Multi Media Partner',
    color: 'from-orange-500 to-pink-600'
  },
  {
    id: 2,
    name: 'EventHex.ai',
    image: '/images/partners/EventHex.jpg',
    description: 'Event Tech Partner',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 3,
    name: 'Technodot',
    image: '/images/partners/Technodot.jpg',
    description: 'Edu Tech Partner',
    color: 'from-emerald-500 to-teal-600'
  }
]

const Partners = () => {
  const ref = useReveal()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance
  const minSwipeDistance = 50

  // Auto-scroll logic for carousel
  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % PARTNERS.length)
    }, 4000) // Increased to 4 seconds for better viewing
    
    return () => clearInterval(timer)
  }, [isPaused])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + PARTNERS.length) % PARTNERS.length)
  }, [])

  const goToNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % PARTNERS.length)
  }, [])

  // Touch handlers for swipe
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }
    if (isRightSwipe) {
      goToPrevious()
    }
  }

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrevious, goToNext])

  const CarouselWindow = () => (
    <div 
      className="mb-12 relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className="pro-card border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:border-indigo-500/30 transition-all duration-300">
        {/* Carousel Content */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-transparent">
          {PARTNERS.map((partner, idx) => (
            <div
              key={partner.id}
              className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out"
              style={{ 
                transform: `translateX(${(idx - currentSlide) * 100}%)`,
                opacity: idx === currentSlide ? 1 : 0,
                zIndex: idx === currentSlide ? 1 : 0
              }}
            >
              <div className="relative w-full h-full">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                {/* Dark shade overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Previous partner"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 hover:border-white/40 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Next partner"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 md:gap-3 z-10">
            {PARTNERS.map((_, idx) => (
              <button
                key={`${idx}-${currentSlide}`}
                onClick={() => goToSlide(idx)}
                className={`rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-transparent ${
                  idx === currentSlide 
                    ? 'bg-white w-8 h-2.5 shadow-lg shadow-white/20 animate-dot-pulse' 
                    : 'bg-white/40 hover:bg-white/60 w-2.5 h-2.5'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
                aria-current={idx === currentSlide ? 'true' : 'false'}
              />
            ))}
          </div>

          <style>{`
            @keyframes dotPulse {
              0% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
              }
              50% {
                transform: scale(1.15);
                box-shadow: 0 0 0 6px rgba(255, 255, 255, 0);
              }
              100% {
                transform: scale(1);
                box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
              }
            }
            .animate-dot-pulse {
              animation: dotPulse 0.6s ease-out;
            }
          `}</style>

          {/* Progress indicator */}
          {!isPaused && (
            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300" 
                 style={{ 
                   width: `${((currentSlide + 1) / PARTNERS.length) * 100}%`
                 }} />
          )}
        </div>
      </div>

      {/* Partner Info */}
      <div className="mt-4 text-center">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-1 transition-all duration-500">
          {PARTNERS[currentSlide].name}
        </h3>
        <p className="text-sm md:text-base text-gray-400 transition-all duration-500">
          {PARTNERS[currentSlide].description}
        </p>
      </div>
    </div>
  )

  return (
    <section ref={ref} id="partners" className="py-12 md:py-20 px-6 max-w-7xl mx-auto reveal" aria-label="Our Partners">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-white tracking-tight">Our Trusted Partners</h2>
        <p className="text-gray-400 max-w-lg mx-auto mb-6 md:mb-10 text-sm md:text-base">
          Collaborating with industry leaders to make a meaningful impact in our community.
        </p>
      </div>

      {/* Carousel Window Section */}
      <CarouselWindow />
    </section>
  )
}

export default Partners
