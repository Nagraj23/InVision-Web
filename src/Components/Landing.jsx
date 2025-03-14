import React from 'react'
import Header from "./Header"
import Hero from "./Intro"
import Features from "./Features"
import Working from "./Working"
// import Testimonials from "./components/Testimonials"
// import Pricing from "./components/Pricing"
// import CTA from "./components/CTA"
import FAQ from "./FAQ"
import Footer from "./Footer"

function Landing() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Working />
        {/* <Testimonials /> */}
        {/* <Pricing /> */}
        {/* <CTA /> */}
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default Landing;

