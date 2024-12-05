import React from 'react'
import Layout from './components/layout'
import HeroSection from './components/hero-section'
import FloatingCards from './components/floating-cards'
import Footer from './components/footer'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FloatingCards />
      <Footer />
    </Layout>
  )
}

