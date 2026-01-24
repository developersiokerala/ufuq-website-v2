import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout'

const Home = lazy(() => import('./pages/Home'))
const Hackathon = lazy(() => import('./pages/Hackathon'))

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-400">Loading...</div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hackathon" element={<Hackathon />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  )
}

export default App

