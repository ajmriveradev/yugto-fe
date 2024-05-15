import React from 'react'
import Sidebar from '../ui/dashboard/sidebar/Sidebar'

const DashboardLayout = ({ children }) => {
  return (
    <div className='flex' style={{ height: "100vh", width: "100vw"}}>
      <Sidebar />
      {children}
    </div>
  )
}

export default DashboardLayout