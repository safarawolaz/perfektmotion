import { DribbbleIcon, FacebookIcon, InstagramIcon, LinkedinIcon, MailCheckIcon } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
   <section className='min-h-[80vh] py-20 bg-footer bg-cover object-cover w-full bg-fixed flex flex-col items-center justify-center'>
        <h3 className='text-3xl sm:text-6xl text-white font-bold capitalize text-center'>have a project in mind, <br />get in touch with us</h3>
        <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex gap-4">
                <FacebookIcon className='w-4 h-4 text-white' />
                <DribbbleIcon className='w-4 h-4 text-white' />
                <InstagramIcon className='w-4 h-4 text-white' />
                <LinkedinIcon className='w-4 h-4 text-white' />
            </div>
            <div className="text-white text-xl flex items-center"><MailCheckIcon className='mr-2 w-5 h-5' />info@perfectmotion.co.za</div>
        </div>
   </section>
  )
}

export default Footer