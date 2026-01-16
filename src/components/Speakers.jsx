import { useReveal } from '../hooks/useReveal'
import SpeakerCard from './SpeakerCard'
import { getImagePath } from '../utils/imagePath'
import { useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { throttleRAF } from '../utils/throttle'
import { motion, useMotionValue } from 'framer-motion'

const DRAG_BUFFER = 50
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }

const Speakers = () => {
  const headerRef = useReveal()
  const containerRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(280)
  const [position, setPosition] = useState(0)
  const x = useMotionValue(0)
  const [isAnimating, setIsAnimating] = useState(false)

  // Memoize speakers data to prevent recalculation on re-renders
  const speakers = useMemo(() => [
    {
      initials: 'CH',
      name: 'Charles Hirschkind',
      affiliation: 'University of California, Berkeley',
      description: 'Chair of Anthropology at UC Berkeley. His work explores religious practice, media, and political community in the Middle East and Europe. He is the author of The Ethical Soundscape and co-editor of Powers of the Secular Modern.',
      gradient: 'from-indigo-500 to-purple-600',
      image: getImagePath('/images/speakers/charles-hirschkind.webp')
    },
    {
      initials: 'MK',
      name: 'Dr. M. Zaki Kirmani',
      affiliation: 'Founder, Centre for Studies on Science',
      description: 'Founder-chairman of the Centre for Studies on Science. Shifted from heterocyclic chemistry to developing a philosophical foundation for science based on Qur\'anic values, advocating for ethically responsible science rooted in Islamic principles.',
      gradient: 'from-purple-500 to-pink-600',
      image: getImagePath('/images/speakers/dr-m-zaki-kirmani.webp')
    },
    {
      initials: 'MA',
      name: 'Dr. Mohammad Saud Afzal',
      affiliation: 'Associate Professor, IIT Kharagpur',
      description: 'Associate Professor specializing in Computational Fluid Dynamics, Coastal Engineering, and Water Resource Management. Holds a PhD from Norwegian University of Science and Technology and a Masters from Delft University of Technology.',
      gradient: 'from-emerald-500 to-teal-600',
      image: getImagePath('/images/speakers/dr-mohammad-saud-afzal.webp')
    },
    {
      initials: 'CR',
      name: 'C.P. Rajendran',
      affiliation: 'National Institute of Advanced Studies, Bengaluru',
      description: 'Geologist and adjunct professor specializing in seismotectonics and tsunami hazards in the Indian subcontinent. Director of the Consortium for Sustainable Development, Connecticut, U.S.A.',
      gradient: 'from-blue-500 to-indigo-600',
      image: getImagePath('/images/speakers/cp-rajendran.webp')
    },
    {
      initials: 'SH',
      name: 'Shameerali Hudawi',
      affiliation: 'Darul Huda Islamic University',
      description: 'Former Head of the Department of Civilizational Studies. He has expertise in philosophy of science and civilizational studies.',
      gradient: 'from-orange-500 to-red-600',
      image: getImagePath('/images/speakers/shameerali-hudawi.webp')
    },
    {
      initials: 'TS',
      name: 'Dr. T. V. Sajeev',
      affiliation: 'Chief Scientist, Kerala Forest Research Institute',
      description: 'Chief Scientist with 26+ years in environmental science, specializing in forest health and invasive species management.',
      gradient: 'from-cyan-500 to-blue-600',
      image: getImagePath('/images/speakers/dr-tv-sanjeev.webp')
    },
    {
      initials: 'SK',
      name: 'Sunandan K N',
      affiliation: 'Azim Premji University',
      description: 'Researches the history and sociology of caste, knowledge production, and science; holds advanced degrees in sociology and science policy.',
      gradient: 'from-indigo-500 to-purple-600',
      image: getImagePath('/images/speakers/sunandan-k-n.webp')
    },
    {
      initials: 'KW',
      name: 'Karuna Dietrich Wielenga',
      affiliation: 'Historian, Azim Premji University',
      description: 'Historian specializing in the economic and social history of modern South Asia, with a focus on labour history and the informal sector. Former Newton International Fellow at the University of Oxford.',
      gradient: 'from-purple-500 to-pink-600',
      image: getImagePath('/images/speakers/karuna-dietrich-wielenga.webp')
    },
    {
      initials: 'SH',
      name: 'Syed Sadatullah Husaini',
      affiliation: 'Ameer, Jamaat-e-Islami Hind',
      description: 'President (Ameer) of Jamaat-e-Islami Hind and Vice President of All India Muslim Personal Law Board. Former National President of Students\' Islamic Organisation of India. Director of JIH\'s Study and Research Department. Electronics engineering graduate and columnist.',
      gradient: 'from-emerald-500 to-teal-600',
      image: getImagePath('/images/speakers/syed-sadatullah-husaini.webp')
    },
  ], [])

  // Update item width on resize (mobile only) - optimized with throttling
  useEffect(() => {
    const updateWidth = throttleRAF(() => {
      if (containerRef.current && window.innerWidth < 768) {
        const containerWidth = containerRef.current.offsetWidth
        setItemWidth(containerWidth - 48) // 24px padding on each side
      }
    })
    
    updateWidth()
    window.addEventListener('resize', updateWidth, { passive: true })
    return () => {
      updateWidth.cancel()
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const trackItemOffset = itemWidth + GAP

  const handleAnimationStart = () => {
    setIsAnimating(true)
  }

  const handleAnimationComplete = () => {
    setIsAnimating(false)
  }

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0

    if (direction === 0) return

    setPosition(prev => {
      const next = prev + direction
      const max = Math.max(0, speakers.length - 1)
      return Math.max(0, Math.min(next, max))
    })
  }

  const dragConstraints = {
    left: -trackItemOffset * Math.max(speakers.length - 1, 0),
    right: 0
  }

  const canGoPrev = position > 0
  const canGoNext = position < speakers.length - 1

  const goToPrev = useCallback(() => {
    if (canGoPrev) {
      setPosition(prev => Math.max(0, prev - 1))
    }
  }, [canGoPrev])

  const goToNext = useCallback(() => {
    if (canGoNext) {
      setPosition(prev => Math.min(speakers.length - 1, prev + 1))
    }
  }, [canGoNext, speakers.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (window.innerWidth < 768) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault()
          goToPrev()
        } else if (e.key === 'ArrowRight') {
          e.preventDefault()
          goToNext()
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [goToPrev, goToNext])

  return (
    <section id="speakers" className="py-20 px-6 max-w-7xl mx-auto bg-white/[0.02] relative">
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-indigo-900/10 blur-[100px] rounded-full -z-10"></div>
      
      <div ref={headerRef} className="text-center mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Speakers</h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">Learn from industry leaders and renowned researchers reimagining the conventional paradigms of Modern Science.</p>
      </div>

      {/* Mobile: Horizontal Scrollable Carousel */}
      <div 
        ref={containerRef}
        className="block md:hidden relative overflow-hidden"
        style={{ padding: '0 12px' }}
      >
        {/* Navigation Buttons */}
        {speakers.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              disabled={!canGoPrev}
              className={`carousel-nav-btn carousel-nav-btn-prev ${!canGoPrev ? 'disabled' : ''}`}
              aria-label="Previous speaker"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              disabled={!canGoNext}
              className={`carousel-nav-btn carousel-nav-btn-next ${!canGoNext ? 'disabled' : ''}`}
              aria-label="Next speaker"
              type="button"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        <motion.div
          className="flex gap-4"
          drag={isAnimating ? false : 'x'}
          dragConstraints={dragConstraints}
          dragElastic={0.1}
          style={{
            x,
            cursor: 'grab',
            userSelect: 'none',
            WebkitUserSelect: 'none'
          }}
          onDragStart={(e) => {
            if (e.target.tagName === 'IMG') {
              e.preventDefault()
            }
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={SPRING_OPTIONS}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
          role="region"
          aria-label="Speakers carousel"
          aria-live="polite"
          whileDrag={{ cursor: 'grabbing' }}
        >
          {speakers.map((speaker, index) => (
            <div
              key={`${speaker.name}-${speaker.initials}`}
              style={{
                width: itemWidth,
                flexShrink: 0,
                minWidth: itemWidth
              }}
            >
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {speakers.map((speaker, index) => (
          <SpeakerCard key={`${speaker.name}-${speaker.initials}`} speaker={speaker} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <a
          href="https://ufuq.siokerala.org/speakers"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a] inline-flex items-center gap-2 min-h-[44px] touch-manipulation"
          aria-label="View all speakers"
        >
          View All
          <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      </div>
    </section>
  )
}


export default Speakers

