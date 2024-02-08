import Btn from '@/components/shared/Btn'
import HeroSm from '@/components/shared/HeroSm'
import { DotIcon } from 'lucide-react'
import Image from 'next/image'


const page = () => {
  return (
    <section>
        <HeroSm header='About' subHeader='Our Story' />
        <div className="min-h-screen w-full px-4 lg:px-10 py-20 grid sm:grid-cols-2 gap-8">
             <div className="">
                <Image src='/aboutImg.jpg' width={768} height={680} alt="about image"/>
             </div>
            <div className="">
                <DotIcon className='text-[#ff0008] text-center' />
                    <p className='text-[#727272] text-base font-normal tracking-wider  uppercase  mt-3'>
                        here is our story
                    </p>
                    <h3 className='text-white text-4xl lg:text-5xl font-bold capitalize tracking-tight mt-3'>
                        About us
                    </h3>
                    <p className='text-[#ff0008] text-lg mt-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum eos odio quo omnis corporis perferendis.</p>
                    <p className='text-base leading-[1.7] mt-4 text-[#4b4b4b]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi id aliquam quasi eaque suscipit nesciunt maxime reiciendis delectus voluptates quia aperiam tempora dolore voluptate iste dolores mollitia omnis. Nesciunt.</p>
                    <p className='text-base leading-[1.7] text-[#4b4b4b] mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, eligendi id aliquam quasi eaque suscipit </p>
                    <Btn text="get in touch" />
                </div>
           
        </div>
    </section>
  )
} 

export default page