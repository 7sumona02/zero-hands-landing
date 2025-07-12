import React from 'react'
import Info from '@/components/Info'
import LoadingCarousel from '@/components/loading-carousel'
import Testimonials from '@/components/Testimonials'
import Bento from '@/components/Bento'
import About from '@/components/About'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import { Hero1 } from '@/components/Hero1'

const page = () => {
  return (
    <div className='relative'>
        <Hero1 />
        {/* <Hero /> */}
        <Info />
        <Bento />
         <div className='pb-50 relative z-999 md:px-0 px-5'>
            <LoadingCarousel />
         </div>
         <Testimonials />
         <About />
         <Pricing />
         <CTA />
         <Footer />
    </div>
  )
}

export default page