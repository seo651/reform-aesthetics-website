import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import AboutContent from './components/AboutContent'
import Statistics from './components/Statistics'
import Philosophy from './components/Philosophy'
import Team from './components/Team'
import BookingForm from './components/BookingForm'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <AboutContent />
      <Statistics />
      <Philosophy />
      <Team />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
