'use client'
import React from 'react'
import Link from "next/link";
import Logo from '@/assets/aique-logo.png'
import Image from "next/image";
import { usePathname } from "next/navigation";
import '@/styles/navigation.scss'

function NavigationBar() {
  const pathname = usePathname();

  return (
    <div className=" nav flex justify-between items-center p-5 max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-8">
      <Image src={Logo} alt="Logo" width={32} height={32} />
      <div className="links">
        <Link href="/" className={`link ${pathname === "/" ? "active" : ""}`}>
          Home
        </Link>
        <Link href="/" className={`link ${pathname === "/about" ? "active" : ""}`}>
          About
        </Link>
        <Link href="/" className={`link ${pathname === "/contact" ? "active" : ""}`}>
          Contact
        </Link>
      </div>
    </div>
  )
}

export default NavigationBar
