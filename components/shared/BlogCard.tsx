import Image from 'next/image'
import React from 'react'

export type blogProps = {
     imgUrl: string,
     date: string,
     category: string,
     comments: string,
     heading: string
   }

const BlogCard = (posts: blogProps) => {
  return (
    <div className='bg-[#101010] w-full h-full'>
        <div className="relative h-[300px]">
            <Image src={posts.imgUrl} objectFit='cover' fill alt='post 1 img' />
            <p className='bg-[#ff0008] p-1 text-white absolute top-2 left-2'>{posts.date}</p>
        </div>
        <div className="flex items-center justify-between px-6 mt-4">
            <p className="text-white capitalize">{posts.category}</p>
            <p className="text-white capitalize">{posts.comments}</p>
        </div>
        <h3 className='text-white px-6 pb-6 text-xl font-bold mt-4'>{posts.heading}</h3>
    </div>
  )
}

export default BlogCard