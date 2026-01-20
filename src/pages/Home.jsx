import { lazy, Suspense } from 'react'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import InstagramSection from '../components/InstagramSection'
import Stats from '../components/Stats'

// Lazy load below-the-fold components for better initial load performance
const Objectives = lazy(() => import('../components/Objectives'))
const Events = lazy(() => import('../components/Events'))
const Speakers = lazy(() => import('../components/Speakers'))
const RecentActivity = lazy(() => import('../components/RecentActivity'))
const QuoteSection = lazy(() => import('../components/QuoteSection'))
const Partners = lazy(() => import('../components/Partners'))

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <InstagramSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <Objectives />
        <Events />
        <Speakers />
        <RecentActivity />
        <Partners />
        <QuoteSection />
      </Suspense>
    </>
  )
}

export default Home

