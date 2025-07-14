import { Input2 } from '@/components/ui/input2'
import { Playfair_Display } from 'next/font/google'
 
const pd = Playfair_Display({ subsets: ['latin'] })

const CTA = () => {
  return (
    <div className={`font-['Louize'] h-[40rem] max-w-6xl mx-auto flex flex-col justify-center items-center`}>
        <div className='md:text-8xl text-6xl font-medium text-center md:max-w-full max-w-xs'>Start Exploring</div>
        <div className='mt-16'>
            <div className="*:not-first:mt-2 cursor-pointer">
      <div className="relative md:w-[40rem] w-[20rem]">
        <Input2
          className="peer ps-6 pe-12 md:shadow-2xl shadow-lg bg-[#83B2F550] rounded-lg border-none text-black md:py-10 py-7 md:text-3xl font-sans"
          placeholder="name@gmail.com"
          type="text"
        />
       <div>
         <span className="bg-[#3D8EFE] rounded-lg text-white font-sans font-medium pointer-events-none absolute inset-y-2 end-2 flex items-center justify-center md:h-16 md:px-10 px-5 peer-disabled:opacity-50 md:text-2xl">
          Sign Up
        </span>
       </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default CTA