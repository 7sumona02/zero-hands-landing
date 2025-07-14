import React from 'react'
import FooterImg from './FooterImg'
import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Footer = () => {
  return (
    <div className='relative md:pt-36 md:pb-0 pb-64 md:px-0 px-10'>
        <div className='flex md:flex-row flex-col justify-between md:items-center items-start md:gap-0 gap-10 max-w-6xl mx-auto text-xl py-12 font-medium text-[#98A4BC]'>
        <div className='block md:hidden text-3xl font-medium text-black'><span className={`${pd.className}`}>zero</span> hands</div>
        <div>connect@futurixai.com</div>
            <div className='flex md:items-center md:flex-row flex-col md:gap-10 items-start'>
                <div>Terms of Service</div>
                <div>Privacy Policy</div>
            </div>
        </div>
        <FooterImg />
        {/* <div>
            <img src='/footer.svg' className='w-[40rem] absolute bottom-0 left-[24rem]' />
        </div> */}
    </div>
  )
}

export default Footer