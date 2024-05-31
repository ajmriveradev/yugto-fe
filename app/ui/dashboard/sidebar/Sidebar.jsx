"use client"
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import React from 'react';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isCurrentPage = (path) => {
    console.log("PATH: ", pathname);

    if (path === pathname) return "bg-sky-600"
  }

  return (
    <div className="flex flex-col h-full w-60">
      <div className="flex flex-col bg-sky-800 h-full divide-y">
        <div className='flex items-center justify-center'>
          <h3 className="text-6xl font-bold mt-5 orelegaOne text-slate-50">Yugto</h3>
        </div>
        <div className='flex flex-col justify-between h-full mt-3'>
          <div>
            <div 
              onClick={() => router.push("/dashboard")}
              className={`flex items-center justify-left mt-5 ${isCurrentPage("/dashboard")} hover:bg-sky-600 cursor-pointer`}
            >
              <Link href="/dashboard"><h3 className="text-3xl font-semibold m-5 text-slate-50">Home</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/patients")}
              className={`flex items-center justify-left mt-5 ${isCurrentPage("/dashboard/patients")} hover:bg-sky-600 cursor-pointer`}
            >
              <Link href="/dashboard/patients"><h3 className="text-3xl font-semibold m-5 text-slate-50">Patients</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/history")}
              className={`flex items-center justify-left mt-5 ${isCurrentPage("/dashboard/history")} hover:bg-sky-600 cursor-pointer`}
            >
              <Link href="/dashboard/history"><h3 className="text-3xl font-semibold m-5 text-slate-50">History</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/profile")}
              className={`flex items-center justify-left mt-5 ${isCurrentPage("/dashboard/profile")} hover:bg-sky-600 cursor-pointer`}
            >
              <Link href="/dashboard/profile"><h3 className="text-3xl font-semibold m-5 text-slate-50">Profile</h3></Link>
            </div>
          </div>
          <div className='flex items-center justify-left m-5'>
            <Link href="/logout">
              <h3 className="text-3xl font-semibold mt-5 text-slate-50">Sign Out</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar