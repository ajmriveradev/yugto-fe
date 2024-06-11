"use client"
import React from 'react';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { HomeIcon, PersonIcon, ListBulletIcon, GearIcon, ExitIcon } from '@radix-ui/react-icons';

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isCurrentPage = (path, type) => {
    console.log("PATH: ", pathname);
    
    if (type === "text") {
      if (path === "dashboard" && pathname === "/dashboard") return "text-2xl font-bold"
      
      if (path !== "dashboard") {
        if (pathname.includes(path)) return "text-2xl font-bold"
        else return "text-lg font-regular"
      }
    } else {
      if (path === "dashboard" && pathname === "/dashboard") return "w-8 h-8"
      
      if (path !== "dashboard") {
        if (pathname.includes(path)) return "w-8 h-8"
        else return "w-6 h-6"
      }
    }
  }

  return (
    <div className="flex flex-col h-full w-60 bg-sky-700">
      <div className="flex flex-col h-full">
        <div className='flex items-center justify-center'>
          <h3 className="text-5xl font-semibold mt-8 text-slate-50">Yugto</h3>
        </div>
        <div className='bg-red-200 mt-8 mx-3'>
          <Separator />
        </div>
        <div className='flex flex-col justify-between h-full'>
          <div className='mt-3'>
            <div 
              onClick={() => router.push("/dashboard")}
              className={`flex flex-row items-center justify-left hover:bg-sky-600 cursor-pointer`}
            >
              <HomeIcon className={`${isCurrentPage("dashboard", "icon")} ml-3 text-slate-50 mt-1`} />
              <Link href="/dashboard"><h3 className={`${isCurrentPage("dashboard", "text")} m-5 text-slate-50`}>Home</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/patients")}
              className={`flex items-center justify-left hover:bg-sky-600 cursor-pointer`}
            >
              <PersonIcon className={`${isCurrentPage("patients", "icon")} ml-3 text-slate-50 mt-1`} />
              <Link href="/dashboard/patients"><h3 className={`${isCurrentPage("patients", "text")} m-5 text-slate-50`}>Patients</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/history")}
              className={`flex items-center justify-left hover:bg-sky-600 cursor-pointer`}
            >
              <ListBulletIcon className={`${isCurrentPage("history", "icon")} ml-3 text-slate-50 mt-1`} />
              <Link href="/dashboard/history"><h3 className={`${isCurrentPage("history", "text")} m-5 text-slate-50`}>History</h3></Link>
            </div>
            <div  
              onClick={() => router.push("/dashboard/profile")}
              className={`flex items-center justify-left hover:bg-sky-600 cursor-pointer`}
            >
              <GearIcon className={`${isCurrentPage("profile", "icon")} ml-3 text-slate-50 mt-1`} />
              <Link href="/dashboard/profile"><h3 className={`${isCurrentPage("profile", "text")} m-5 text-slate-50`}>Profile</h3></Link>
            </div>
          </div>
          <div className='flex items-center justify-left m-5'>
            <ExitIcon className='text-slate-50 w-6 h-6 mr-3 mt-1' />
            <Link href="/logout">
              <h3 className="text-xl font-regular text-slate-50">Sign Out</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar