import HeroSm from '@/components/shared/HeroSm'
import Portfolio from '@/components/shared/Portfolio'
import React from 'react'

const portfolioPage = () => {
  return (
    <section>
        <HeroSm header='portfolio' subHeader='our work' />
        <div className="sm:py-10">
            <Portfolio />
        </div>
    </section>
  )
}

export default portfolioPage