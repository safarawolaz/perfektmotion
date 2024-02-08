import React from 'react'

type percent = {
    percentage: number
}

const BackTop = ({percentage}:percent) => {
  return (
    <div className='w-24 h-24 bg-[#ffffff00] overflow-hidden rounded-full flex items-center justify-center text-base text-[#ff0008] border border-[#ff0008] border-dashed  fixed bottom-8 right-8 z-50'>
        {percentage.toFixed(0)}%
    </div>
  )
}

export default BackTop