import Link from 'next/link'
import React from 'react'
import { ColorModeToggle } from './ColorModeToggle/ColorModeToggle'

const Header = () => {
  return (
    <div className="flex text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <div className="flex-grow">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
        .
      </div>
      <div className="flex-none"><ColorModeToggle/></div>
    </div>
  )
}

export default Header
