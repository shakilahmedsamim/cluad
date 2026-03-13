import Hero from '../components/Hero'
import Services from '../components/Services'
import CaseStudies from '../components/CaseStudies'
import About from '../components/About'
import VideoFrame from '../components/VideoFrame'
import Blog from '../components/Blog'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <CaseStudies />
      <About />
      <VideoFrame />
      <Blog />
      <FAQ />
      <Contact />
    </main>
  )
}
