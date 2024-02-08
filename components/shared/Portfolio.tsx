import { DotIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Portfolio = () => {
  return (
    <section className='min-h-screen bg-black flex items-center justify-center flex-col px-4 lg:px-10 py-10'>
         <DotIcon className='text-[#ff0008] text-center' />
        <p className='text-[#727272] text-base font-normal tracking-wider  uppercase text-center mt-3'>some work we did for our clients</p>
        <h3 className='text-white text-4xl  lg:text-5xl font-bold capitalize tracking-tight text-center mt-3'>
            our portfolio
        </h3>
        <div className="grid lg:grid-cols-3 w-full gap-8 h-[2700px] lg:h-[900px] mt-12">
            <div className="bg-[#101010] h-full w-full relative">
                <Image src='/work-1.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
            <div className="bg-[#101010] relative">
              <Image src='/work-2.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
            <div className="bg-[#101010] relative">
              <Image src='/work-3.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
            <div className="bg-[#101010] relative">
              <Image src='/work-4.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
            <div className="bg-[#101010] relative">
              <Image src='/work-5.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
            <div className="bg-[#101010] relative">
              <Image src='/work-6.jpg' fill objectFit='cover'  alt='work img 1' />
            </div>
        </div>
    </section>
  )
}

export default Portfolio