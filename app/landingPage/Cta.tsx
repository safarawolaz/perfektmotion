import Btn from '@/components/shared/Btn'
import React from 'react'

const Cta = () => {
  return (
    <section className='my-20 lg:my-32 min-h-[75vh] bg-cta bg-fixed bg-cover w-full flex flex-col items-center gap-8 justify-center  bg-black'>
        <h3 className='text-white text-5xl lg:text-6xl font-bold text-center'>Lets schedule a meeting <br /> & discuss your project</h3>
        <Btn text="get in touch" />
    </section>
  )
}

export default Cta