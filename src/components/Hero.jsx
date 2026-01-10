import { useReveal } from '../hooks/useReveal'

const Hero = () => {
  const leftRef = useReveal()
  const middleRef = useReveal()


  return (
    <header id="home" className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen flex items-center">
      <div className="w-full space-y-16">
        {/* Top Row: Left and Middle Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          <div ref={leftRef} className="reveal delay-[100ms]">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span>Kozhikode, Kerala &bull; 25-26 Jan 2026</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Science and <br/>
              <span className="gradient-text">Technology Fest</span>
            </h1>
            <p className="text-base md:text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
              Resisting both uncritical acceptance and blanket refusal of advances in science and technology, SIO seeks to critically engage with them - questioning, redefining, and reshaping their course, while remaining grounded in the foundations of Islam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://ufuqstfsiokerala.eventhex.ai/#tickets" target="_blank" rel="noopener noreferrer" className="btn-primary px-8 py-4 rounded-xl font-semibold text-center focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a]" aria-label="Register for UFUQ 2026">Register Now</a>
              <button className="px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all text-sm font-medium text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#03030a]" aria-label="View event brochure">View Brochure</button>
            </div>
          </div>

          {/* New Section - Lightweight Wireframe Cube */}
          <div ref={middleRef} className="hidden lg:flex items-center justify-center reveal delay-[200ms]">
            <div className="relative w-full max-w-2xl lg:max-w-3xl xl:max-w-4xl">
              {/* Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="wireframe-glow"></div>
              </div>
              
              {/* Enhanced Thematic Wireframe Cube */}
              <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center">
                <div className="wireframe-cube-container">
                  <div className="wireframe-cube">
                    {/* Front face with thematic elements */}
                    <div className="wireframe-face wireframe-front">
                      <div className="wireframe-edge wireframe-edge-top"></div>
                      <div className="wireframe-edge wireframe-edge-right"></div>
                      <div className="wireframe-edge wireframe-edge-bottom"></div>
                      <div className="wireframe-edge wireframe-edge-left"></div>
                      {/* Internal geometric planes with cosmic fills */}
                      <div className="wireframe-plane wireframe-plane-horizontal">
                        <div className="cosmic-fill cosmic-fill-horizontal"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-vertical">
                        <div className="cosmic-fill cosmic-fill-vertical"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-diagonal">
                        <div className="cosmic-fill cosmic-fill-diagonal"></div>
                      </div>
                      {/* Z-axis planes */}
                      <div className="wireframe-plane wireframe-plane-z-1">
                        <div className="cosmic-fill cosmic-fill-z1"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-z-2">
                        <div className="cosmic-fill cosmic-fill-z2"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-z-3">
                        <div className="cosmic-fill cosmic-fill-z3"></div>
                      </div>
                      {/* Thematic center elements */}
                      <div className="wireframe-center-element">
                        <div className="wireframe-core"></div>
                        <div className="wireframe-ring wireframe-ring-1"></div>
                        <div className="wireframe-ring wireframe-ring-2"></div>
                        <div className="wireframe-symbol">الف</div> {/* Arabic "Alif" for Islamic foundation */}
                      </div>
                      {/* Tech nodes */}
                      <div className="tech-node tech-node-1"></div>
                      <div className="tech-node tech-node-2"></div>
                      <div className="tech-node tech-node-3"></div>
                      <div className="tech-node tech-node-4"></div>
                    </div>
                    {/* Back face with thematic elements */}
                    <div className="wireframe-face wireframe-back">
                      <div className="wireframe-edge wireframe-edge-top"></div>
                      <div className="wireframe-edge wireframe-edge-right"></div>
                      <div className="wireframe-edge wireframe-edge-bottom"></div>
                      <div className="wireframe-edge wireframe-edge-left"></div>
                      {/* Internal geometric planes with cosmic fills */}
                      <div className="wireframe-plane wireframe-plane-horizontal-back">
                        <div className="cosmic-fill cosmic-fill-horizontal-back"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-vertical-back">
                        <div className="cosmic-fill cosmic-fill-vertical-back"></div>
                      </div>
                      {/* Z-axis planes on back */}
                      <div className="wireframe-plane wireframe-plane-z-back-1">
                        <div className="cosmic-fill cosmic-fill-z-back-1"></div>
                      </div>
                      <div className="wireframe-plane wireframe-plane-z-back-2">
                        <div className="cosmic-fill cosmic-fill-z-back-2"></div>
                      </div>
                      {/* Horizon elements */}
                      <div className="horizon-line"></div>
                      <div className="horizon-grid">
                        <div className="grid-line grid-line-1"></div>
                        <div className="grid-line grid-line-2"></div>
                        <div className="grid-line grid-line-3"></div>
                        <div className="grid-line grid-line-4"></div>
                      </div>
                      {/* Scientific symbols */}
                      <div className="wireframe-symbols">
                        <div className="wireframe-science-symbol">∞</div> {/* Infinity symbol */}
                        <div className="wireframe-tech-symbol">⚛</div> {/* Gear symbol */}
                      </div>
                      {/* UFUQ letter elements */}
                      <div className="ufuq-letters">
                        <div className="ufuq-letter ufq-u">U</div>
                        <div className="ufuq-letter ufq-f">F</div>
                        <div className="ufuq-letter ufq-u2">U</div>
                        <div className="ufuq-letter ufq-q">Q</div>
                      </div>
                    </div>
                    {/* Enhanced internal structural planes with cosmic elements */}
                    <div className="internal-structure">
                      <div className="structure-plane structure-plane-1">
                        <div className="cosmic-fill cosmic-fill-structure-1"></div>
                      </div>
                      <div className="structure-plane structure-plane-2">
                        <div className="cosmic-fill cosmic-fill-structure-2"></div>
                      </div>
                      <div className="structure-plane structure-plane-3">
                        <div className="cosmic-fill cosmic-fill-structure-3"></div>
                      </div>
                      <div className="structure-plane structure-plane-4">
                        <div className="cosmic-fill cosmic-fill-structure-4"></div>
                      </div>
                      <div className="structure-plane structure-plane-5">
                        <div className="cosmic-fill cosmic-fill-structure-5"></div>
                      </div>
                      <div className="structure-plane structure-plane-6">
                        <div className="cosmic-fill cosmic-fill-structure-6"></div>
                      </div>
                      {/* Z-axis structural elements */}
                      <div className="z-axis-structure">
                        <div className="z-plane z-plane-1">
                          <div className="cosmic-fill cosmic-fill-z-structure-1"></div>
                        </div>
                        <div className="z-plane z-plane-2">
                          <div className="cosmic-fill cosmic-fill-z-structure-2"></div>
                        </div>
                        <div className="z-plane z-plane-3">
                          <div className="cosmic-fill cosmic-fill-z-structure-3"></div>
                        </div>
                      </div>
                      {/* Cosmic core elements */}
                      <div className="cosmic-core">
                        <div className="core-layer core-layer-1"></div>
                        <div className="core-layer core-layer-2"></div>
                        <div className="core-layer core-layer-3"></div>
                        <div className="core-energy core-energy-1"></div>
                        <div className="core-energy core-energy-2"></div>
                        <div className="core-energy core-energy-3"></div>
                      </div>
                    </div>
                    {/* Connecting edges with data flow effect */}
                    <div className="wireframe-connector wireframe-connector-1">
                      <div className="data-flow data-flow-1"></div>
                      <div className="energy-node energy-node-1"></div>
                    </div>
                    <div className="wireframe-connector wireframe-connector-2">
                      <div className="data-flow data-flow-2"></div>
                      <div className="energy-node energy-node-2"></div>
                    </div>
                    <div className="wireframe-connector wireframe-connector-3">
                      <div className="data-flow data-flow-3"></div>
                      <div className="energy-node energy-node-3"></div>
                    </div>
                    <div className="wireframe-connector wireframe-connector-4">
                      <div className="data-flow data-flow-4"></div>
                      <div className="energy-node energy-node-4"></div>
                    </div>
                    {/* Enhanced corner dots with pulsing effect */}
                    <div className="wireframe-corner wireframe-corner-1">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-1"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-2">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-2"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-3">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-3"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-4">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-4"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-5">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-5"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-6">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-6"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-7">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-7"></div>
                    </div>
                    <div className="wireframe-corner wireframe-corner-8">
                      <div className="corner-pulse"></div>
                      <div className="corner-ring corner-ring-8"></div>
                    </div>
                    {/* Enhanced floating particles with cosmic elements */}
                    <div className="wireframe-particles">
                      <div className="particle particle-1">α</div> {/* Alpha */}
                      <div className="particle particle-2">β</div> {/* Beta */}
                      <div className="particle particle-3">γ</div> {/* Gamma */}
                      <div className="particle particle-4">δ</div> {/* Delta */}
                      <div className="particle particle-5">ε</div> {/* Epsilon */}
                      <div className="particle particle-6">λ</div> {/* Lambda */}
                      <div className="particle particle-7">π</div> {/* Pi */}
                      <div className="particle particle-8">Ω</div> {/* Omega */}
                      {/* Cosmic particles */}
                      <div className="cosmic-particle cosmic-particle-1">✦</div> {/* Star */}
                      <div className="cosmic-particle cosmic-particle-2">✧</div> {/* Sparkle */}
                      <div className="cosmic-particle cosmic-particle-3">⋆</div> {/* Asterisk */}
                      <div className="cosmic-particle cosmic-particle-4">∴</div> {/* Therefore */}
                      <div className="cosmic-particle cosmic-particle-5">∇</div> {/* Nabla */}
                      <div className="cosmic-particle cosmic-particle-6">∂</div> {/* Partial */}
                    </div>
                    {/* Enhanced orbital elements with cosmic trails */}
                    <div className="orbital-system">
                      <div className="orbit orbit-1">
                        <div className="orbit-node orbit-node-1"></div>
                        <div className="orbit-trail orbit-trail-1"></div>
                      </div>
                      <div className="orbit orbit-2">
                        <div className="orbit-node orbit-node-2"></div>
                        <div className="orbit-trail orbit-trail-2"></div>
                      </div>
                      <div className="orbit orbit-3">
                        <div className="orbit-node orbit-node-3"></div>
                        <div className="orbit-trail orbit-trail-3"></div>
                      </div>
                      {/* Additional cosmic orbits */}
                      <div className="cosmic-orbit cosmic-orbit-1">
                        <div className="cosmic-orbit-node cosmic-orbit-node-1"></div>
                      </div>
                      <div className="cosmic-orbit cosmic-orbit-2">
                        <div className="cosmic-orbit-node cosmic-orbit-node-2"></div>
                      </div>
                    </div>
                    {/* Enhanced energy waves with cosmic effects */}
                    <div className="energy-waves">
                      <div className="wave wave-1"></div>
                      <div className="wave wave-2"></div>
                      <div className="wave wave-3"></div>
                      <div className="wave wave-4"></div>
                      {/* Cosmic energy waves */}
                      <div className="cosmic-wave cosmic-wave-1">
                        <div className="wave-fill wave-fill-1"></div>
                      </div>
                      <div className="cosmic-wave cosmic-wave-2">
                        <div className="wave-fill wave-fill-2"></div>
                      </div>
                      <div className="cosmic-wave cosmic-wave-3">
                        <div className="wave-fill wave-fill-3"></div>
                      </div>
                    </div>
                    {/* Nebula effects */}
                    <div className="nebula-effects">
                      <div className="nebula-cloud nebula-1"></div>
                      <div className="nebula-cloud nebula-2"></div>
                      <div className="nebula-cloud nebula-3"></div>
                      <div className="nebula-cloud nebula-4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Hero

