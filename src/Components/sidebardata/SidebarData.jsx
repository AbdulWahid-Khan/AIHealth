import React from 'react'
import SideBar from '../sideBar/SideBar'
import Dashboard from '../dashboard/Dashboard'
import { Outlet } from 'react-router-dom'

const SidebarData = () => {
  return (
    <div>
      
      <div className="p-[20px] relative flex flex-row min-h-screen   bg-[#FFF4EF] rounded-[20px] ">
      
      
      <SideBar className=""/>

      
  
       <Outlet />
       
      </div>
    </div>
  )
}

export default SidebarData
