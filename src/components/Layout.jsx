import { lazy, Suspense } from 'react'
import Nav from './Nav'

const Footer = lazy(() => import('./Footer'))

const Layout = ({ children }) => {
  return (
    <div className="App">
      <a href="#home" className="skip-to-content">
        Skip to main content
      </a>
      <div className="bg-glow" aria-hidden="true"></div>
      <Nav />
      <main id="main-content">
        {children}
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default Layout

