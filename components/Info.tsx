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
    <div className='h-screen flex items-center justify-center md:pt-[38rem] pt-[30rem] md:pb-[60rem] pb-[50rem] md:px-0 px-5 relative z-999'>
        <div className={`flex flex-col items-center justify-center md:text-2xl text-xl space-y-10 max-w-4xl mx-auto ${pd.className}`}>
            <p className='md:pb-4 font-sans text-lg text-center tracking-wide'>OUR AIM</p>
            <h1 className="md:text-5xl text-4xl font-medium text-center max-w-3xl pb-6 font-['Louize']">Attention is your currency</h1>
             <img src='/info.svg' alt='info' className='w-[32rem]' />
            <p className='font-sans pt-2'>Reclaim deep work in a world of constant pings.</p>
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
                className="w-full absolute md:pt-[35.5rem] pt-[70rem]"
            />
            
    </div>
  )
}

export default Info