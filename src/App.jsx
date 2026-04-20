import Header from './components/Header'
import Hero from './components/Hero'
import AboutContent from './components/AboutContent'
import Statistics from './components/Statistics'
import WhatWeDo from './components/WhatWeDo'
import Philosophy from './components/Philosophy'
import Team from './components/Team'
import ServicesBanner from './components/ServicesBanner'
import Testimonials from './components/Testimonials'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutContent />
      <Statistics />
      <WhatWeDo />
      <Philosophy />
      <Team />
      <ServicesBanner />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App
