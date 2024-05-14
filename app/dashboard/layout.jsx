import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'
import Navbar from '../ui/navbar/Navbar'

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex' style={{ height: "100vh"}}>
      {children}
    </div>
  )
}

export default DashboardLayout