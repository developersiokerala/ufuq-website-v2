import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const INSTAGRAM_URL = 'https://www.instagram.com/ufuq.stf/'
const LOGO_PATH = '/images/instagram/insta-logo.jpg'
const POST_IMAGES = [
  '/images/instagram/post-1.jpg',
  '/images/instagram/post-2.jpg',
  '/images/instagram/post-3.png'
]

const InstagramSection = () => {
  const ref = useReveal()
  const [imageError, setImageError] = useState(false)
  const [postErrors, setPostErrors] = useState({})

  const stats = [
    { value: '255', label: 'Posts' },
    { value: '693', label: 'Followers' },
    { value: '2', label: 'Following' },
  ]

  return (
    <section ref={ref} className="pt-0 pb-20 px-6 max-w-7xl mx-auto reveal" aria-label="Follow us on Instagram">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Follow us on Instagram
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Your backstage pass is one click away! Follow us on Instagram for all the exclusive fest vibes and updates
        </p>
      </div>

      {/* Instagram Card */}
      <div className="flex justify-center">
        <article className="pro-card rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 hover-lift max-w-[420px] md:max-w-[500px] lg:max-w-[550px] w-full">
        <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
          {/* Profile Top */}
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6">
            {/* Profile Avatar */}
            <div className="relative flex-shrink-0">
              <div className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] md:w-[80px] md:h-[80px] lg:w-[90px] lg:h-[90px] rounded-full p-[2px] md:p-[3px] insta-gradient group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-full bg-[#03030a] flex items-center justify-center border-2 border-[#03030a] overflow-hidden">
                  {!imageError ? (
                    <img 
                      src={LOGO_PATH} 
                      alt="UFUQ Science and Technology Fest Logo" 
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      width="90"
                      height="90"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white leading-none tracking-tighter">
                      UFUQ
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 min-w-0">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-3">ufuq.stf</div>
              {/* Stats */}
              <div className="flex gap-3 sm:gap-4 md:gap-5 lg:gap-6" role="list" aria-label="Instagram statistics">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col" role="listitem">
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white leading-tight" aria-label={`${stat.value} ${stat.label}`}>
                      {stat.value}
                    </span>
                    <span className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider mt-0.5 md:mt-1">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/10">
            <p className="text-xs sm:text-[13px] md:text-sm lg:text-base text-white font-semibold mb-1 md:mb-2 leading-snug">
              UFUQ - Science & Technology Fest
            </p>
            <p className="text-xs sm:text-[13px] md:text-sm lg:text-base text-gray-300 mt-1 md:mt-2 leading-snug md:leading-relaxed">
              A space to Gather, Rethink, Revisit, Learn & Unlearn.
            </p>
            <p className="text-xs sm:text-[13px] md:text-sm text-gray-300 font-medium mt-1.5 md:mt-2">
              2026 January 25, 26
            </p>
            <p className="text-xs sm:text-[13px] md:text-sm text-gray-300 font-medium mt-1.5 md:mt-2">
              Aspin Courtyards, Calicut Beach
            </p>
          </div>

          {/* Follow Button */}
          <a 
            href={INSTAGRAM_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary w-full py-3.5 sm:py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-white font-semibold text-sm md:text-base text-center min-h-[48px] md:min-h-[52px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a] touch-manipulation transition-all duration-300"
            aria-label="Follow ufuq.stf on Instagram"
          >
            Follow
          </a>

          {/* Preview Grid */}
          <div className="grid grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-5 pt-4 md:pt-5 border-t border-white/10">
            {POST_IMAGES.map((postImage, index) => (
              <a
                key={index}
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square rounded-md md:rounded-lg bg-white/5 border border-white/10 overflow-hidden group relative cursor-pointer transition-all duration-300 hover:border-indigo-500/50 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/20"
              >
                {!postErrors[index] ? (
                  <>
                    <img 
                      src={postImage}
                      alt={`UFUQ Instagram post ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                      onError={() => setPostErrors(prev => ({ ...prev, [index]: true }))}
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Instagram icon overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[9px] md:text-[10px] lg:text-xs text-gray-400 uppercase tracking-wider text-center p-1 md:p-2">
                    Post {index + 1}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </article>
      </div>
    </section>
  )
}

export default InstagramSection

