import React from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
 
const SettingBtnsBar = () => {
  const navigate = useNavigate();
  const search  = useLocation()
  // pathname = search.pathname;
  console.log(search.pathname)
  // console.log(search.pathname)
  return (
    <>
      {/* <div className="buttons flex flex-row max-w-[1920px] w-fit   justify-start items-center bg-[#FFF4EF] px-[6px] py-[4px]">
            <button className={`w-[171px]  px-[6px] py-[4px]  font-normal text-[16px] text-[#282828] active:bg-[#FCC378] rounded-[4px] ease-out duration-300 cursor-pointer active:text-[#282828]  ${search.pathname === '/settings/generalpreference'? 'bg-[#FCC378]':''}`}  onClick={ () => navigate("/settings/generalpreference")} > General Preference  </button>
            <button className={`w-[141px]  px-[6px] py-[4px]  font-normal text-[16px] text-[#282828] active:bg-[#FCC378] rounded-[4px] ease-out duration-300 cursor-pointer ${search.pathname === '/settings/profilesetting'? 'bg-[#FCC378]':''}`} onClick={() => navigate("/settings/profilesetting")}>  Profile Setting  </button>
            <button className={`w-[141px] px-[6px] py-[4px]  font-normal text-[16px] text-[#282828] active:bg-[#FCC378] rounded-[4px] ease-out duration-300 cursor-pointer ${search.pathname === '/settings/securitysetting'? 'bg-[#FCC378]':''}`}   onClick={ () => navigate("/settings/securitysetting")} > Security Setting </button>
        </div> */}
    </>
  )
}

export default SettingBtnsBar
