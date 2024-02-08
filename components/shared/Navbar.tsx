'use client'
import { cn } from '@/lib/utils'
import { AlignRight, ChevronDown, DotIcon, DribbbleIcon, FacebookIcon, InstagramIcon, PhoneIncoming, TwitterIcon, XIcon, YoutubeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import MobileLink from './MobileLink'

const links = [
    {
        id: 1,
        title: 'about',
        url: "/about"
    },
    {
        id: 2,
        title: 'portfolio',
        url: "/portfolio"
    },
    {
        id: 3,
        title: 'blogs',
        url: "/blogs"
    },
    {
        id: 5,
        title: 'contact',
        url: "/contact"
    },
]

const Navbar = () => {
    const [navBar, setNavbar] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    
        return () => {
          window.removeEventListener('scroll', changeBackground);
        };
      }, [])
    
      const changeBackground = () => {
        if (window.scrollY >= 70) {
          setNavbar(true)
        } else {
          setNavbar(false)
        }
      }
  return (
    <header className={cn(
        'max-w-[1440px] mx-auto fixed top-0 z-40 w-full ',
        navBar && 'fixed bg-black animate-slideIn transition-all'
        )}>
        <nav className='flex items-center py-6 lg:py-0 px-4 lg:px-10 justify-between bg-transparent shadow-lg  z-10'>
            <div className="flex gap-4  lg:gap-10 items-center">
                <Link href='/' className="h-[48px] w-[64px] relative z-10">
                   <Image src='/logo.png' fill alt='logo image' />
                </Link>
                <ul className='hidden lg:flex lg:gap-2 xl:gap-8 items-center'>
                    {
                        links.map(link => (
                    <li key={link.id} className='py-6 px-3 group-hover:text-[#ff0008]'>
                        <Link href={link.url} className={cn('uppercase font-medium text-base tracking-wider flex items-center text-white gap-1 hover:text-[#ff0008] transition-all', 
                            {
                            'text-[#ff0008] font-bold transition-all' : pathname === link.url, 
                            }) }>
                                <DotIcon className='text-white mr-[2px] hover:text-[#ff0008]' />
                          {link.title}
                        </Link>
                    </li>))
                    }
                </ul>
              
            </div>
            <div className="flex items-center gap-3">
                <Link href='/contact'>
                    <Button className='hidden sm:flex text-sm bg-[#ff0008] hover:bg-[#da2d24] text-white font-semibold tracking-widest rounded-none' size='lg'>GET A QUOTE</Button>
                </Link>
                <MobileLink />
            </div>
        </nav>  
    </header>
  )
}

export default Navbar