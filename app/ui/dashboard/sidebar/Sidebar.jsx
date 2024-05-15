import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full w-60">
      <div className="flex flex-col bg-blue-400 h-full divide-y">
        <div className='flex items-center justify-center'>
          <h3 className="text-6xl font-bold mt-5 orelegaOne text-slate-50">Yugto</h3>
        </div>
        <div className='flex flex-col justify-between h-full m-5'>
          <div>
            <div className='flex items-center justify-left mt-5'>
              <Link href="/dashboard"><h3 className="text-3xl font-semibold mt-5 text-slate-50">Home</h3></Link>
            </div>
            <div className='flex items-center justify-left mt-5'>
              <Link href="/dashboard/patients"><h3 className="text-3xl font-semibold mt-5 text-slate-50">Patients</h3></Link>
            </div>
            <div className='flex items-center justify-left mt-5'>
              <Link href="/dashboard/history"><h3 className="text-3xl font-semibold mt-5 text-slate-50">History</h3></Link>
            </div>
            <div className='flex items-center justify-left mt-5'>
              <Link href="/dashboard/profile"><h3 className="text-3xl font-semibold mt-5 text-slate-50">Profile</h3></Link>
            </div>
          </div>
          <div className='flex items-center justify-left mt-5'>
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