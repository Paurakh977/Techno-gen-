"use client";

import React from 'react'
import Layout from './components/layout'
import HeroSection from './components/hero-section'
import FloatingCards from './components/floating-cards'

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FloatingCards />
    </Layout>
  )
}

