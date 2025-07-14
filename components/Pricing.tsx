import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const Pricing = () => {
  return (
    <div className='min-h-screen max-w-4xl mx-auto flex items-center justify-center relative z-10 md:pb-20 px-4 sm:px-6 lg:px-8'>
        <img 
          src='/pricing.svg' 
          className='absolute top-0 w-full max-w-md md:max-w-lg mx-auto' 
        />
        <div className={`flex flex-col items-center justify-center text-2xl space-y-10 pt-20 md:pt-40 font-['Louize']`}>
            <h1 className='text-4xl sm:text-6xl font-medium text-center max-w-3xl pb-10 sm:pb-16'>
              What kind of inbox<br className='hidden sm:block'/> do you command?
            </h1>
            <div className='mt-8 flex flex-col md:flex-row items-center gap-24 lg:gap-4 w-full'>
                <div className='h-auto w-full max-w-sm md:h-[36rem] md:w-[20rem] bg-neutral-100 rounded-3xl shadow-2xl relative md:translate-x-7 md:translate-y-9 p-8'>
                    <img src='flow.svg' alt='' className='absolute -top-12 w-20 md:w-28 inset-0 left-1/2 -translate-x-1/2' />
                    <div className='flex flex-col justify-center items-center pt-20 md:pt-20'>
                        <p className='text-2xl md:text-3xl'>Flow Starter</p>
                        <p className='text-[#3D8EFE] mt-2 md:mt-4'>free for all</p>
                        <button className='mt-4 md:mt-6 text-white font-sans text-base md:text-lg bg-[#3D8EFE] py-2 md:py-3 px-6 md:px-8 rounded-full'>
                          Choose Flow Starter
                        </button>
                        <div className='mt-4 md:mt-6'>
                            <img src='/p1.svg' className='w-40 md:w-40' />
                        </div>
                    </div>
                </div>
                <div className='h-auto w-full max-w-sm md:h-[42rem] md:w-[24rem] bg-neutral-100 rounded-3xl shadow-2xl relative z-10 p-8'>
                    <img src='inbox.svg' alt='' className='absolute -top-12 w-24 md:w-32 inset-0 left-1/2 -translate-x-1/2' />
                    <div className='flex flex-col justify-center items-center pt-20 md:pt-20'>
                        <p className='text-2xl md:text-3xl'>Inbox Master</p>
                        <p className='text-[#3D8EFE] mt-2 md:mt-4'>$99.99/mon</p>
                        <button className='mt-4 md:mt-6 text-white font-sans text-base md:text-lg bg-[#3D8EFE] py-2 md:py-3 px-6 md:px-8 rounded-full'>
                          Choose Inbox Master
                        </button>
                        <div className='mt-4 md:mt-8'>
                            <img src='/p1.svg' className='w-40 md:w-50' />
                        </div>
                    </div>
                </div>
                <div className='h-auto w-full max-w-sm md:h-[36rem] md:w-[20rem] bg-neutral-100 rounded-3xl shadow-2xl relative md:-translate-x-7 md:translate-y-9 p-8'>
                    <img src='zero.svg' alt='' className='absolute -top-12 w-20 md:w-28 inset-0 left-1/2 -translate-x-1/2' />
                    <div className='flex flex-col justify-center items-center pt-20 md:pt-20'>
                        <p className='text-2xl md:text-3xl'>Zero Mode</p>
                        <p className='text-[#3D8EFE] mt-2 md:mt-4'>Custom</p>
                        <button className='mt-4 md:mt-6 text-white font-sans text-base md:text-lg bg-[#3D8EFE] py-2 md:py-3 px-6 md:px-8 rounded-full'>
                          Choose Zero Mode
                        </button>
                        <div className='mt-4 md:mt-6'>
                            <img src='/p1.svg' className='w-40 md:w-40' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Pricing