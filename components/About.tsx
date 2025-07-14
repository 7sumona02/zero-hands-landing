import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const About = () => {
  return (
    <div className='min-h-screen flex flex-col-reverse items-center justify-center relative md:px-0 px-10 md:pt-0 pt-10 md:pb-50 pb-30'>
        <div className={`flex flex-col items- justify-center md:text-3xl text-2xl space-y-10 mt-10 max-w-lg mx-auto md:text-center text-left font-['Louize']`}>
            <p>We&apos;re building something different with Zero Hands. It&apos;s a calm, intentional way to manage your communication. One place for clarity, focus, and flow.</p>
            <p>We put your time and attention first.</p>
            <p>We obsess over thoughtful, minimalist design that works the way your brain does, not the other way around.</p>
            <p>We believe:</p>
            <p>Because we&apos;d rather you spend less time in your inbox, and more time doing what matters.</p>
        </div>
        <img src='/about.svg' className='md:w-[70%] w-full mx-auto' />
    </div>
  )
}

export default About