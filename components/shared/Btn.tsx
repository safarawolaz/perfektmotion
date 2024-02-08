
import { Button } from '../ui/button'

type textProps = {
    text: string,
}

const Btn = ({text}: textProps) => {
  return (
    <Button className='text-base bg-[#df332b] hover:bg-[#d31006]   text-white font-semibold tracking-widest rounded-none uppercase' size='lg'>
        {text}
    </Button>
  )
}

export default Btn