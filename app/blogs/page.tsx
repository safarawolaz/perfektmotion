import HeroSm from '@/components/shared/HeroSm'
import React from 'react'
import RecentPosts from '../landingPage/RecentPosts'

const blogPage = () => {
  return (
    <section>
        <HeroSm header='our recent news' subHeader='articles from blogs' />
        <div className="py-10 sm:py-20">
            <RecentPosts />
        </div>
    </section>
  )
}

export default blogPage