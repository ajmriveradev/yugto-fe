'use client'

import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div>Yugto Navbar</div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/patient">Patient</Link>
        <Link href="/search">Search</Link>
      </div>
    </div>
  )
}

export default Navbar