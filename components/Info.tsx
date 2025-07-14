import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const noList = [
  {
    id: 1,
    text: 'to the infinite feed'
  },
  {
    id: 2,
    text: 'to cognitive overload'
  },
  {
    id: 3,
    text: 'to manufactured urgency'
  },
  {
    id: 4,
    text: 'to digital scavenger hunts'
  },
  {
    id: 5,
    text: 'to illusion of productivity'
  },
  {
    id: 6,
    text: 'to feature bloat'
  },
]

const Info = () => {
  return (
    <div className='h-screen flex items-center justify-center md:pt-[32rem] pt-[30rem] md:pb-[60rem] pb-[50rem] md:px-0 px-5 relative z-999'>
        <div className={`flex flex-col items- justify-center md:text-2xl text-xl space-y-10 max-w-4xl mx-auto ${pd.className}`}>
            <p className='md:pb-10 font-sans text-lg text-center tracking-wide'>OUR AIM</p>
            <p><span className='md:text-3xl text-2xl font-medium italic'>In</span> an era defined by constant connection, when every notification bids for our attention,  when our productivity is measured by the speed of our response, we have little space left for deep work.</p>
            <p>Our focus has been fractured –</p>
            <p>by endless threads, by manufactured urgency,  and by platforms designed for data streams, not for human thought. What was promised as a tool for connection is now yours to command.</p>
            <p>We believe:</p>
            {/* <div className='mx-auto pt-10'>
                <img src='/no.svg' alt='img' className='w-[24rem]' />
            </div> */}
            <div className={`font-['Louize'] mx-auto pt-10 space-y-3`}>
              {noList.map((item) => {
                return <div key={item.id} className='flex gap-2.5 items-end'><span className='md:text-3xl text-2xl font-bold text-[#3D8EFE] font-sans -translate-y-0.5'>NO</span><p className='md:text-3xl text-2xl font-medium'>{item.text}</p></div>
              })}
            </div>
        </div>
        <img
                src="/sep.svg" 
                alt="Cropped Image"
                className="w-full absolute md:pt-80 pt-[70rem]"
            />
            
    </div>
  )
}

export default Info