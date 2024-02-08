import BlogCard from '@/components/shared/BlogCard'
import { DotIcon } from 'lucide-react'
import { blogProps } from '@/components/shared/BlogCard'

const posts = [
    {
        imgUrl: "/post-1.jpg",
        date: "31 Jul",
        category: "design",
        comments: "2 comments",
        heading: "Basic rules of running a design agency"
    },
    {
        imgUrl: "/post-2.jpg",
        date: "26 Jul",
        category: "design",
        comments: "2 comments",
        heading: "Why a company needs branding"
    },
    {
        imgUrl: "/post-3.jpg",
        date: "25 Jul",
        category: "design",
        comments: "2 comments",
        heading: "Basic rules of hiring the best candidates"
    },
]

const RecentPosts = () => {
  return (
    <section className='w-full mb-20 lg:mb-0 pb-32 bg-black flex items-center justify-center flex-col'>
        <DotIcon className='text-[#ff0008] text-center' />
        <p className='text-[#727272] text-base font-normal tracking-wider  uppercase text-center mt-3'>our recent posts</p>
        <h3 className='text-white text-4xl lg:text-5xl font-bold capitalize tracking-tight text-center mt-3'>
            our recent news & <br /> articles from the blogs
        </h3>
        <div className="grid lg:grid-cols-3 gap-8 h-[1200px] lg:h-[400px] w-full px-4 lg:px-10 mt-12">
        {
            posts.map((post: blogProps) => (
                <BlogCard key={post.imgUrl} imgUrl={post.imgUrl} date={post.date} category={post.category} comments={post.comments} heading={post.heading}/>
            ))
        }
        </div>

    </section>
  )
}

export default RecentPosts