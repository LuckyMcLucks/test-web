'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';


const HeaderOne = () => {
    const pathname = usePathname()
    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 10);
            setLastScrollPosition(scrollPosition);
        };

        // Add event scroll when component mounted
        window.addEventListener('scroll', handleScroll);

        // Remove event scroll when component mounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    return (
        <>
            <div id="header" className='header'>
                <div className={`header-main h-20 w-full bg-white min-[1322px]:px-10 px-4 flex items-center justify-between ${fixedHeader ? 'fixed box-shadow' : ''}`}>
                    <Link href={'/'} className="logo">
                        <Image
                            src={'/images/logo.png'}
                            width={2000}
                            height={1000}
                            alt='logo'
                            priority={true}
                            className='sm:w-[220px] w-[160px]'
                        />
                    </Link>
                    <div className="menu-main h-full max-lg:hidden">
                        <ul className='flex items-center xl:gap-[50px] gap-10 h-full'>
                            <li className='h-full relative'>
                                <Link href="/" className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/' ? 'active' : ''}`}>
                                    Home
                                </Link>
                            </li>
                            <li className='h-full relative'>
                                <Link
                                    href="/camp/topmap-sidebar"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/camp/topmap-sidebar' ? 'active' : ''}`}>
                                
                                    Hotel   
                                </Link>
                                
                            </li>
                            <li className='h-full relative'>
                                <Link href="/camp/tent-detail" className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/camp/tent-detail' ? 'active' : ''}`}>
                                    Hotel Details
                                </Link>
                            </li>
                            
                            <li className='h-full relative'>
                                <Link
                                   href="/pages/contact"
                                    className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname === '/pages/contact' ? 'active' : ''}`}
                                >
                                    Pages
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="right flex items-center gap-3">

                        <Link href={'/login'} className="text-button max-sm:hidden">Sign In</Link>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default HeaderOne