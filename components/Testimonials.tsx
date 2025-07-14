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

    const translateContent = useTransform(scrollYProgress, [0,1], [-100, 100])
  return (
    <div ref={ref} className='min-h-screen flex items-center justify-center relative'>
        <img src='/gradient.svg' className='w-full' />
        <div className={`absolute md:top-[40%] -top-24 z-20 md:text-6xl text-3xl max-w-2xl md:leading-[4rem] md:px-0 px-10 text-center font-medium text-white font-['Louize']`}>
            <h1 className='md:text-white text-black'>Trusted by fast movers & deep thinkers  everywhere.</h1>
        </div>
        <motion.div style={{y: translateContent}} className='absolute top-[16%] md:left-[50%] left-[30%] z-10'>
            <img src='/tcard1.svg' alt='profile' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
         <motion.div style={{y: translateContent}} className='absolute top-[28%] left-[10%] z-10'>
            <img src='/tcard2.svg' alt='profile' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[50%] md:left-[50%] left-[30%] z-10'>
            <img src='/tcard3.svg' alt='profile' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
        <motion.div style={{y: translateContent}} className='absolute top-[62%] left-[10%] z-10'>
            <img src='/tcard4.svg' alt='profile' className='w-[15rem] md:w-[30rem]' />
        </motion.div>
    </div>
  )
}

export default Testimonials