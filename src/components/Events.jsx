import { useState, memo, useMemo, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { throttleRAF } from '../utils/throttle'
import { motion, useMotionValue } from 'framer-motion'

const DRAG_BUFFER = 50
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }

const EVENTS = [
    {
      type: 'Pre Event',
      level: 'All Level',
      title: 'Exploring Intersections of Science, Technology, Society & Theology - Summer School',
      speakers: ['Dr. Abdussalam Ahmad', 'Dr. Arun Ashokan', 'Dr. Sunandan KN', 'Dr. Sadiq Mampad', 'Dr. Badeeuzzaman', 'Wafa Razak', 'TP Muhammad Shameem'],
      date: '27, 28, 29 May 2025',
      location: 'Al Jamia Al Islamia Santhapuram',
      duration: '03 Days'
    },
    {
      type: 'Pre Event',
      level: 'All Level',
      title: 'Workshop on Aqeeda, Philosophy and Science: Navigating Technology in the Modern Era',
      speakers: ['Thafasal Ijyas', 'Shuhaib C', 'Shameer Ali Hudawi'],
      date: '03 August 2025',
      location: 'Unity Centre, Kannur',
      duration: '01 Day'
    },
    {
      type: 'Pre Event',
      level: 'All Level',
      title: 'Science and Technology Fest Declaration Ceremony',
      speakers: ['Dr. Syed Mustafa Ali', 'Dr. Nahas Mala', 'Shameer Ali Hudawi', 'T Ismail', 'Adv. Abdul Vahid', 'Sahel Bas'],
      date: '17 August 2025',
      location: 'Ernakulam Town Hall',
      duration: null
    },
    {
      type: 'Pre Event',
      level: 'All Level',
      title: "Let's Ai It! AI Orientation Workshop",
      speakers: ['Amjad Ali EM', 'Ameen Ahsan'],
      date: '24 August 2025',
      location: 'Kozhikode',
      duration: null
    },
    {
      type: 'Pre Event',
      level: 'All Level',
      title: 'Workshop on Thinking Technology: Exploring Heideggerian Idea of Technology',
      speakers: ['Dr. Muhammed Shareef', 'Dr. Salih Malol'],
      date: '27 September 2025',
      location: 'Vidyarthi Bhavanam Hall, Kozhikode',
      duration: '01 Day'
    },
    {
      type: 'Pre Event',
      level: 'All Level',
      title: 'Hackathon for Social Good',
      speakers: [],
      date: 'September 29 - November 02, 2025',
      location: 'Online',
      duration: '04 Days'
    },
    // January 25: Presentations / Talks / Workshops / Quizzes
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Inauguration Ceremony',
      speakers: [],
      date: 'January 25 - 10:00 am – 12:00 pm',
      location: 'Inauguration Stage',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Workshop on Islam and Science: Philosophical and Theological Debates',
      speakers: [],
      date: 'January 25 - 2:30 pm – 4:30 pm',
      location: 'Workshop Stage',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Workshop on Sounding out the Past: Andalucismo, Flamenco, Worldmaking',
      speakers: [],
      date: 'January 25 - 2:30 pm – 5:00 pm',
      location: 'Workshop Stage 3',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'State-level Inter School Quiz Competition (HS)',
      speakers: [],
      date: 'January 25 - 1:15 pm – 3:30 pm',
      location: 'Quiz Stage',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'State-level Inter School Quiz Competition (HSS)',
      speakers: [],
      date: 'January 25 - 1:15 pm – 2:45 pm',
      location: 'Quiz Stage 2',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Nasweeha',
      speakers: [],
      date: 'January 25 - 3:50 pm – 4:00 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Nasweeha',
      speakers: [],
      date: 'January 25 - 7:00 pm – 7:10 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Aspiring Taqwa in an Advanced Technological World',
      speakers: [],
      date: 'January 25 - 7:15 pm – 8:00 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Technological Advancement: Discussing Future and Ethics',
      speakers: [],
      date: 'January 25 - 8:15 pm – 8:45 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Sci Talk – My Journey',
      speakers: [],
      date: 'January 25 - 8:15 pm – 8:45 pm',
      location: 'Stage 1',
      duration: null
    },
    // January 26: Presentations / Talks / Workshops / Quizzes
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Mega Quiz',
      speakers: [],
      date: 'January 26 - 11:15 am',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Nasweeha',
      speakers: [],
      date: 'January 26 - 11:45 am',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Tech Talk: Techies Assemble',
      speakers: [],
      date: 'January 26 - 12:00 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'From Classroom to Quantum Computing: Careers, Curiosity, and Living with Uncertainty',
      speakers: [],
      date: 'January 26 - 1:00 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Presentation',
      level: 'All Level',
      title: 'Conclusion Ceremony Speech',
      speakers: [],
      date: 'January 26 - 3:45 pm',
      location: 'Stage 1',
      duration: null
    },
    // Cultural Programs
    {
      type: 'Cultural Program',
      level: 'All Level',
      title: 'Ishal Night',
      speakers: [],
      date: 'January 25 - 8:45 pm – 11:00 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Cultural Program',
      level: 'All Level',
      title: 'Performative Play',
      speakers: [],
      date: 'January 26 - 3:00 pm',
      location: 'Stage 1',
      duration: null
    },
    // January 25: Panel Discussions
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Science and Society',
      speakers: [],
      date: 'January 25 - 11:45 am – 1:15 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'When Technology Leads Oppression and Genocide',
      speakers: [],
      date: 'January 25 - 12:15 pm – 1:10 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Thinking on Curriculum of Science and Technology',
      speakers: [],
      date: 'January 25 - 2:50 pm – 4:05 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Islam, Rationality and Atheism: Framing Dialogues',
      speakers: [],
      date: 'January 25 - 3:40 pm – 4:50 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Culture, Art, Resistance: Occupying New Arenas',
      speakers: [],
      date: 'January 25 - 4:10 pm – 5:30 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Islamic Studentdom: Developing Creative Campus Environments',
      speakers: [],
      date: 'January 25 - 4:30 pm – 5:45 pm',
      location: 'Stage 1',
      duration: null
    },
    // January 26: Panel Discussions
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Technology and Indigenous Crafts: Communitarian Expressions',
      speakers: [],
      date: 'January 26 - 9:30 am',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Islam, Science and Technology: Exploring Muslim Engagements',
      speakers: [],
      date: 'January 26 - 9:40 am',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Chat with Guest',
      speakers: [],
      date: 'January 26 - 11:15 am',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Nature, Culture and Gender: Scientific Discourses and Practices',
      speakers: [],
      date: 'January 26 - 11:30 am',
      location: 'Stage 3',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Chat with Habel Anwar',
      speakers: [],
      date: 'January 26 - 12:10 pm',
      location: 'Stage 2',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Islamic Legacy and Civilization: Imagining a Golden Age',
      speakers: [],
      date: 'January 26 - 12:30 pm',
      location: 'Stage 1',
      duration: null
    },
    {
      type: 'Panel Discussion',
      level: 'All Level',
      title: 'Reimagining Climate Change: Ethics, Ecology, and Secular Concerns',
      speakers: [],
      date: 'January 26 - 2:00 pm',
      location: 'Stage 2',
      duration: null
    },
  ]

const FILTERS = ['All Events', 'Pre Event', 'Panel Discussion', 'Presentation', 'Cultural Program']

const Events = () => {
  const headerRef = useReveal()
  const [activeFilter, setActiveFilter] = useState('All Events')
  const containerRef = useRef(null)
  const [itemWidth, setItemWidth] = useState(280)
  const [position, setPosition] = useState(0)
  const x = useMotionValue(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const filteredEvents = useMemo(() => {
    if (activeFilter === 'All Events') {
      return EVENTS.slice(0, 9)
    }
    return EVENTS.filter(event => event.type === activeFilter)
  }, [activeFilter])

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

  // Reset position when filter changes
  useEffect(() => {
    setPosition(0)
    x.set(0)
  }, [activeFilter, x])

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
      const max = Math.max(0, filteredEvents.length - 1)
      return Math.max(0, Math.min(next, max))
    })
  }

  const dragConstraints = {
    left: -trackItemOffset * Math.max(filteredEvents.length - 1, 0),
    right: 0
  }

  const canGoPrev = position > 0
  const canGoNext = position < filteredEvents.length - 1

  const goToPrev = useCallback(() => {
    if (canGoPrev) {
      setPosition(prev => Math.max(0, prev - 1))
    }
  }, [canGoPrev])

  const goToNext = useCallback(() => {
    if (canGoNext) {
      setPosition(prev => Math.min(filteredEvents.length - 1, prev + 1))
    }
  }, [canGoNext, filteredEvents.length])

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
    <section id="events" className="py-20 px-6 max-w-7xl mx-auto">
      <div ref={headerRef} className="mb-16 reveal">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured Events</h2>
        <p className="text-gray-400 max-w-3xl text-lg leading-relaxed">
          Engage with thought-provoking discussions, workshops, and exhibitions that explore the intersection of Islamic thought and scientific inquiry, challenging conventional paradigms and inspiring ethical innovation.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-10">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a] ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/40 scale-105'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white hover:scale-105 border border-white/10 backdrop-blur-sm'
            }`}
            aria-pressed={activeFilter === filter}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Mobile: Horizontal Scrollable Carousel */}
      <div 
        ref={containerRef}
        className="block md:hidden relative overflow-hidden"
        style={{ padding: '0 12px' }}
      >
        {/* Navigation Buttons */}
        {filteredEvents.length > 1 && (
          <>
            <button
              onClick={goToPrev}
              disabled={!canGoPrev}
              className={`carousel-nav-btn carousel-nav-btn-prev ${!canGoPrev ? 'disabled' : ''}`}
              aria-label="Previous event"
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
              aria-label="Next event"
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
          aria-label="Events carousel"
          aria-live="polite"
          whileDrag={{ cursor: 'grabbing' }}
        >
          {filteredEvents.map((event, index) => (
            <div
              key={`${event.title}-${event.date}`}
              style={{
                width: itemWidth,
                flexShrink: 0,
                minWidth: itemWidth
              }}
            >
              <EventCard event={event} index={index} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Desktop: Grid Layout */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEvents.map((event, index) => (
          <EventCard key={`${event.title}-${event.date}`} event={event} index={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="mt-12 md:mt-16 flex justify-center">
        <a
          href="https://ufuqstfsiokerala.eventhex.ai/sessions"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary px-6 py-3 md:px-8 md:py-4 rounded-xl font-semibold text-sm md:text-base text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a] inline-flex items-center gap-2 min-h-[44px] touch-manipulation"
          aria-label="View all events"
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

export const EventCard = memo(({ event, index }) => {
  const uniqueId = `event-${index}`
  const isHackathon = event.title === 'Hackathon for Social Good'

  return (
    <div className="pro-card rounded-2xl overflow-hidden group hover:border-indigo-500/40 active:border-indigo-500/60 active:scale-[0.98] touch-manipulation h-full flex flex-col select-none transition-all duration-200">
      {/* Header with Gradient */}
      <div className="event-card-header relative px-6 py-6 bg-gradient-to-br from-indigo-600/25 via-purple-600/20 to-transparent border-b border-white/10">
        {/* Wavy Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 400 150" preserveAspectRatio="none">
            <defs>
              <linearGradient id={`wave1-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#818cf8" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id={`wave2-${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366f1" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#818cf8" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path d="M0,60 Q50,30 100,60 T200,60 T300,60 T400,60 L400,0 L0,0 Z" fill={`url(#wave1-${uniqueId})`}/>
            <path d="M0,90 Q80,70 160,90 T320,90 T400,90 L400,150 L0,150 Z" fill={`url(#wave2-${uniqueId})`}/>
            <path d="M0,40 Q120,10 240,40 T400,40 L400,0 L0,0 Z" fill={`url(#wave1-${uniqueId})`} opacity="0.4"/>
          </svg>
        </div>
        
        {/* Badges */}
        <div className="relative flex justify-between items-start mb-4">
          <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 backdrop-blur-sm">
            {event.type}
          </span>
          <span className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-xs font-bold border border-white/10 backdrop-blur-sm">
            {event.level}
          </span>
        </div>

        {/* Title */}
        <h3 className="relative text-base md:text-lg font-bold text-white leading-snug">
          {event.title}
        </h3>
      </div>

      {/* Body */}
      <div className="px-6 py-6 flex-1 flex flex-col">
        {/* Speakers */}
        {event.speakers.length > 0 && (
          <div className="mb-6 flex-1">
            {event.speakers.map((speaker, idx) => (
              <p key={idx} className="text-gray-300 font-medium text-sm mb-2 group-hover:text-gray-200 transition-colors">
                {speaker}
              </p>
            ))}
          </div>
        )}

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>

        {/* Date and Location */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center gap-2 text-gray-300">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
            <time dateTime={event.date} className="text-sm font-medium">{event.date}</time>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span className="text-sm font-medium">{event.location}</span>
          </div>
        </div>

        {/* Duration */}
        {event.duration && (
          <>
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-3"></div>
            <p className="text-indigo-300 font-bold text-sm">{event.duration}</p>
          </>
        )}

        {/* Hackathon Link - Pushed to bottom */}
        {isHackathon && (
          <div className="mt-auto pt-4">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-4"></div>
            <Link 
              to="/hackathon"
              className="w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-sm text-center hover:from-indigo-500 hover:to-purple-500 active:from-indigo-700 active:to-purple-700 active:scale-95 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/40 flex items-center justify-center gap-2 touch-manipulation min-h-[44px]"
            >
              View Hackathon Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
})

EventCard.displayName = 'EventCard'

export default Events

