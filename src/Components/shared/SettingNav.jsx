import navprofile from "./../../assets/images/Dshproimg.png";
import { FaBell } from "react-icons/fa";

const SettingNav = () => {
  return (
    <>
      <nav>
        <div className="flex flex-row   px-[2%]   max-w-[1920px] w-full   ">
          <div className="icons gap-4 flex flex-row items-center w-full justify-end ">
            <FaBell className=" text-2xl text-bold" />
            <img src={navprofile} alt="" className="w-[41px] h-[41px] " />
          </div>
        </div>
      </nav>
    </>
  )
}

export default SettingNav
