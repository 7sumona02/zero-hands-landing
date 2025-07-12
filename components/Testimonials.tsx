'use client'
import {motion, useScroll, useTransform} from 'motion/react'
import { Playfair_Display } from 'next/font/google'
import { useRef } from 'react'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Testimonials = () => {
    const ref = useRef(null)
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const translateContent = useTransform(scrollYProgress, [0,1], [-120, 120])
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center relative'>
        <img src='/gradient.svg' className='w-full' />
        <div className={`absolute top-[40%] z-20 md:text-5xl text-3xl max-w-xl md:leading-[4rem] md:px-0 px-10 text-center font-medium text-white ${pd.className}`}>
            <h1>Trusted by fast movers & deep thinkers  everywhere.</h1>
        </div>
        <motion.div style={{y: translateContent}} className='absolute top-[16%] md:left-[50%] left-[30%] z-10'>
            <img src='/tcard1.svg' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
         <motion.div style={{y: translateContent}} className='absolute top-[28%] left-[10%] z-10'>
            <img src='/tcard2.svg' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[50%] md:left-[50%] left-[30%] z-10'>
            <img src='/tcard3.svg' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[62%] left-[10%] z-10'>
            <img src='/tcard4.svg' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
    </div>
  )
}

export default Testimonials