import React, { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

const PARTNERS = [
  {
    id: 1,
    name: 'EventHex.ai',
    image: '/images/partners/EventHex.jpg',
    description: 'Event Tech Partner',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    id: 2,
    name: 'Technodot',
    image: '/images/partners/Technodot.jpg',
    description: 'Edu Tech Partner',
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    name: 'Entri',
    image: '/images/partners/Entri.jpg.jpeg',
    description: 'Learning Platform Partner',
    color: 'from-cyan-500 to-blue-600'
  },
  {
    id: 4,
    name: 'Nexora',
    image: '/images/partners/Nexora.jpg.jpeg',
    description: 'Innovation Partner',
    color: 'from-pink-500 to-rose-600'
  },
  {
    id: 5,
    name: 'Rapidrops',
    image: '/images/partners/Rapidrops.jpg.jpeg',
    description: 'Tech Solutions Partner',
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 6,
    name: 'D4Media',
    image: '/images/partners/D4.jpg',
    description: 'Multi Media Partner',
    color: 'from-orange-500 to-pink-600'
  },
  {
    id: 7,
    name: 'Rec',
    image: '/images/partners/Rec.jpg.jpeg',
    description: 'Media Partner',
    color: 'from-red-500 to-orange-600'
  },
  {
    id: 8,
    name: 'Animation Campus',
    image: '/images/partners/Animation Campus.jpg.jpeg',
    description: 'Animation & Design Partner',
    color: 'from-purple-500 to-violet-600'
  },
  {
    id: 9,
    name: 'Varikka',
    image: '/images/partners/Varikka.jpg.jpeg',
    description: 'Creative Partner',
    color: 'from-amber-500 to-yellow-600'
  },
  {
    id: 10,
    name: 'Campus Alive',
    image: '/images/partners/Campus Alive.jpg.jpeg',
    description: 'Campus Engagement Partner',
    color: 'from-green-500 to-emerald-600'
  },
]

const Partners = () => {
  const ref = useReveal()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [swipeOffset, setSwipeOffset] = useState(0)
  const [isSwiping, setIsSwiping] = useState(false)

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

  // Touch handlers for swipe with visual feedback
  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsSwiping(true)
    setIsPaused(true)
  }

  const onTouchMove = (e) => {
    if (!touchStart) return
    const currentTouch = e.targetTouches[0].clientX
    setTouchEnd(currentTouch)
    
    // Calculate swipe offset for visual feedback
    const offset = currentTouch - touchStart
    // Limit the offset to prevent excessive swiping
    const maxOffset = 100
    const boundedOffset = Math.max(-maxOffset, Math.min(maxOffset, offset))
    setSwipeOffset(boundedOffset)
  }

  const onTouchEnd = () => {
    setIsSwiping(false)
    
    if (!touchStart || !touchEnd) {
      setSwipeOffset(0)
      setIsPaused(false)
      return
    }
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
    
    // Reset swipe offset with animation
    setSwipeOffset(0)
    
    // Resume auto-scroll after a delay
    setTimeout(() => {
      setIsPaused(false)
    }, 300)
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
      name="partners"
      className="mb-12 relative group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ touchAction: 'pan-y pinch-zoom' }}
    >
      <div className="pro-card border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:border-indigo-500/30 transition-all duration-300">
        {/* Carousel Content */}
        <div className="relative aspect-[21/9] w-full overflow-hidden bg-gradient-to-br from-indigo-900/10 via-purple-900/10 to-transparent select-none">
          {PARTNERS.map((partner, idx) => {
            const isCurrentSlide = idx === currentSlide
            const baseTranslate = (idx - currentSlide) * 100
            // Add swipe offset only to visible slides during swiping
            const swipeAdjustment = isSwiping && Math.abs(idx - currentSlide) <= 1 
              ? (swipeOffset / window.innerWidth) * 100 
              : 0
            
            return (
              <div
                key={partner.id}
                className={`absolute inset-0 w-full h-full ${isSwiping ? 'transition-none' : 'transition-all duration-700 ease-in-out'}`}
                style={{ 
                  transform: `translateX(${baseTranslate + swipeAdjustment}%)`,
                  opacity: isCurrentSlide ? 1 : 0,
                  zIndex: isCurrentSlide ? 1 : 0
                }}
              >
                <div className="relative w-full h-full">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02] pointer-events-none"
                    loading={idx === 0 ? "eager" : "lazy"}
                    draggable="false"
                  />
                  {/* Dark shade overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
                </div>
              </div>
            )
          })}

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
