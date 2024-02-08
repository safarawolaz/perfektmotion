'use client'

import BackTop from "@/components/shared/BackTop"
import Portfolio from "@/components/shared/Portfolio"
import { Percent } from "lucide-react"
import { useEffect, useState } from "react"
import Cta from "./landingPage/Cta"
import Hero from "./landingPage/Hero"
import RecentPosts from "./landingPage/RecentPosts"
import Ribbon from "./landingPage/Ribbon"
import Services from "./landingPage/Services"


export default function Home() {
  const [percentage, setPercentage] = useState(0)
  
  
  
  useEffect(() => {
    window.addEventListener("scroll", handlePercentage)
  }, [])

  const handlePercentage = () => {
    const bodyHeight = document.body.scrollHeight
    const windowHeight = window.innerHeight
    const scrollEndPos = bodyHeight - windowHeight
    const totalScrollPercent = (window.scrollY / scrollEndPos) * 100
    setPercentage(totalScrollPercent)
  }
  return (
    <div className='bg-black'>
      <Hero />
      <Services />
      <Ribbon />
      <Portfolio />
      <Cta />
      <RecentPosts />
      <BackTop percentage={percentage} />
    </div>
  )
}
