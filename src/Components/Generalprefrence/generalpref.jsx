import React from "react";
import { FaToggleOn } from "react-icons/fa";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Generalpref = () => {
  return (
    <>
      {/* <div className="control w-full bg-white ">
        <div className="container flex flex-col justify-center items-start   gap-4 px-6 py-[20px]">
          <div className="GenSetting flex flex-col max-w-[428px] w-full items-between  bg-[#FFFFfF] ">
            <p className="text-[24px] text-[#F16A77] font-normal ">
              Notification{" "}
              <span className="text-[#282828] font-normal ">Settings</span>
            </p>
            <div className="icon&text flex flex-row items-center justify-between py-[12px] px-[14px]">
              <p className="text-[16px] text-[#282828] font-normal ">
                Email Notification
              </p>
              <button className="active:text-[#78fcab] t w-[44px] h-[26px]">
                <FaToggleOn className="text-[#FCC378] w-[40px] h-[22px]" />
              </button>
            </div>
          </div>
          <div className="GenSetting flex flex-col max-w-[428px] w-full items-between   bg-[#FFFFfF] ">
            <p className="text-[24px] text-[#F16A77] font-normal ">
              Chat bot{" "}
              <span className="text-[#282828] font-normal ">Settings</span>
            </p>
            <div className="icon&text flex flex-row items-center justify-between py-[12px] px-[14px]">
              <p className="text-[16px] text-[#282828] font-normal ">
                Enable Humor Response
              </p>
              <button className="toggle w-[44px] h-[26px]">
                <FaToggleOn className="text-[#FCC378] w-[40px] h-[22px]" />
              </button>
            </div>
          </div>
        </div>
      </div> */}
      <Outlet />
    </>
  );
};

export default Generalpref;
