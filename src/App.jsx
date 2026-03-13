import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogList from './pages/BlogList'
import BlogPost from './pages/BlogPost'

export default function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function NotFound() {
  return (
    <main className="flex-1 flex items-center justify-center min-h-screen bg-[#07070f]">
      <div className="text-center px-6">
        <div className="font-display text-8xl font-bold gradient-text mb-4">404</div>
        <p className="text-slate-400 mb-8">This page doesn't exist.</p>
        <a href="/" className="px-6 py-3 bg-[#00e5a0] text-[#07070f] rounded-xl font-semibold text-sm hover:bg-[#00cc8f]">
          Go home
        </a>
      </div>
    </main>
  )
}
