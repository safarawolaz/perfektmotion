import Btn from '@/components/shared/Btn'
import { Button } from '@/components/ui/button'
import { ArrowUpRight, Camera, DotIcon, LucideBadgeX, LucideGlobe, LucidePencilRuler, LucideShirt, PersonStanding, PrinterIcon, UsersRound, Video } from 'lucide-react'

const services = [
    {
        icon: <LucidePencilRuler className='text-[#ff0008] w-14 h-14'/>,
        heading: "Graphic Design",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
    {
        icon: <UsersRound  className='text-[#ff0008] w-14 h-14'/>,
        heading: "Digital Marketing",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
    {
        icon: <PrinterIcon  className='text-[#ff0008] w-14 h-14'/>,
        heading: "Digital Printing",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
    {
        icon: <LucideShirt  className='text-[#ff0008] w-14 h-14'/>,
        heading: "Clothing Printing",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
    {
        icon: <Camera  className='text-[#ff0008] w-14 h-14'/>,
        heading: "Photography",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
    {
        icon: <Video  className='text-[#ff0008] w-14 h-14'/>,
        heading: "Videography",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, soluta tempore eaque velit, in eos adipisci rem, id facilis nemo hic? Enim, architecto quidem cumque quisquam vel provident numquam molestias.",
    },
]

const Services = () => {
  return (
    <section className='w-full py-20 lg:py-20 bg-black flex items-center justify-center flex-col'>
        <DotIcon className='text-[#ff0008] text-center' />
        <p className='text-[#727272] text-base font-normal tracking-wider  uppercase text-center mt-3'>what we are offering</p>
        <h3 className='text-white text-4xl lg:text-5xl font-bold capitalize tracking-tight text-center mt-3'>
            services we are offering <br /> to our customers
        </h3>
        <div className="grid md:grid-cols-3 gap-8 w-full mt-12 px-4 lg:px-10">
            {
                services.map(service => <div key={service.heading} className='bg-[#101010] p-6 w-full'>
                    <div className="">
                        {service.icon}
                    </div>
                    <h3 className='text-white font-medium text-2xl mt-8'>{service.heading}</h3>
                    <p  className='text-[#4b4b4b] mt-4'>{service.desc}</p>

                    <Button className='flex text-[#4b4b4b] items-center uppercase tracking-widest hover:bg-[#101010] hover:text-white mt-8' variant='ghost' size='lg'>
                       <span className='hover:mr-1 transition-all'>read more</span><ArrowUpRight className='text-[#ff0008] w-4 h-4 ml-2 transition-all' />
                    </Button>
                </div>)
            }
        </div>
    </section>
  )
}

export default Services