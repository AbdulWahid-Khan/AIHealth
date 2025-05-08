import React from 'react'
import SettingNav from '../shared/SettingNav'
import SettingBtnsBar from './../shared/SettingBtnsBar'
import {Outlet} from "react-router-dom"
const Settinghomepage = () => {
  return (
    <div>
      <div className="control flex flex-col   min-h-screen lg:w-[1151px] bg-white h-full ">
     
      {/* <SettingNav /> */}
      <SettingBtnsBar  />
      <Outlet />
      </div>
    </div>
  )
}

export default Settinghomepage
