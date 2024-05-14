'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AccountCircle } from '@nine-thirty-five/material-symbols-react/rounded';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  return (
    <div className="flex p-3 justify-between w-full h-16 bg-blue-800">
      <div>
        <h2 className="text-3xl font-bold text-slate-200">Yugto</h2>
      </div>
      { isLoggedIn &&
        <div className="flex mr-2 justify-center items-center">
          <Link href="/dashboard" className="text-3xl font-bold mx-2 text-slate-200">Home</Link>
          <Link href="/dashboard/patients" className="text-3xl font-bold mx-2 text-slate-200">Patient</Link>
          <Link href="/search" className="text-3xl font-bold mx-2 text-slate-200">Search</Link>
          <Link href="/profile" className="text-3xl font-bold mx-2 text-slate-200">
            <AccountCircle className="" height={32} width={32} />
          </Link>
        </div>
      }
    </div>
  )
}

export default Navbar