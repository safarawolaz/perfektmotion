import { Dot } from "lucide-react"

const roll = [
    {
      id: 1,
      desc: 'Graphic Design'
    },
    {
      id: 2,
      desc: 'VideoGraphy'
    },
    {
      id: 3,
      desc: 'Photography'
    },
    {
      id: 4,
      desc: 'Digital Printing'
    },
  ]
  
  const Ribbon = () => {
    return (
      <section className='px-4 lg:px-10 bg-[#000000] whitespace-nowrap overflow-hidden -mt-20'>
        <div className="animate-roll py-20 w-full flex gap-8 items-center leading-[.6] ">
            {
              roll.map(text => <div key={text.id}>
                <div className="text-[140px] lg:text-[220px] text-[#cfcece] font-bold capitalize tracking-wider whitespace-nowrap">
                 {text.desc}  
                </div>
              </div>)
            }
        </div>
         
          
      </section>
    )
  }
  
  export default Ribbon