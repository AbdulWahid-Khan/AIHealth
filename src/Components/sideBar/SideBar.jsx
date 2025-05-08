import React from "react";
import ReactDOM from "react-dom";

import Topmainicon from "./../../assets/images/Topmainicon.png";
import { MdDashboard } from "react-icons/md";
import { TbMessageChatbot } from "react-icons/tb";
import { GiStairsGoal } from "react-icons/gi";
import { RiUserCommunityFill } from "react-icons/ri";
import { TbSettings } from "react-icons/tb";
import Dashboard from "../dashboard/Dashboard";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="  flex flex-col       bg-white">
        <div className="img bg-[#FFF4EF] rounded-br-[20px] py-[5px] px-[3px] ">
          <img src={Topmainicon} className="w-[206px] h-[60px]  " alt="" />
        </div>

        <div className="navbar   max-w-[222px] w-full px-3 pt-3 navbar flex flex-col items-center justify-between h-full   rounded-xl">
          <div className="ul ">
            <ul className=" flex  flex-col w-[198px] items-center    justify-between gap-2">
              <li className=" hover:shadow box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15)     items-center justify-start  gap-[8px] w-full  rounded-[8px] ">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `flex items-center gap-[10px] px-[16px] py-[12px]  B4 ${
                      isActive
                        ? " B4    text-Button shadow-[#FCC378] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] w-[100%] h-[100%] px-[16px] py-[12px] rounded-[8px]  "
                        : " B4   text-Dark-Light  px-[16px] py-[12px]  w-full  ease-out duration-300 "
                    }`
                  }
                >
                  {" "}
                  <MdDashboard /> Dashboard
                </NavLink>
              </li>
              <li className="nav-ai hover:shadow box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15)  rounded-[8px]   items-center justify-start  gap-[8px] w-full  ">
                <NavLink
                  to="chatbot"
                  className={({ isActive }) =>
                    `flex items-center gap-[10px] px-[16px] py-[12px] ${
                      isActive
                        ? "B4 rounded-[8px] text-Button shadow-[#FCC378] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] w-[100%] h-[100%] px-[16px] py-[12px]"
                        : "text-Dark-Light  px-[16px] py-[12px] B4 ease-out duration-300"
                    }`
                  }
                >
                  <TbMessageChatbot /> AI Health Coach{" "}
                </NavLink>
              </li>
              <li className="hover:shadow box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15) rounded-[8px]    items-center justify-start  gap-[8px] w-full ">
                <NavLink
                  to="goals"
                  className={({ isActive }) =>
                    `flex items-center gap-[10px] px-[16px] py-[12px] ${
                      isActive
                        ? "B4 text-Button shadow-[#FCC378] rounded-[8px] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] w-[100%] h-[100%] px-[16px] py-[12px]"
                        : "text-Dark-Light  px-[16px] py-[12px] B4 ease-out duration-300 "
                    }`
                  }
                >
                  {" "}
                  <GiStairsGoal /> Goals
                </NavLink>
              </li>
              <li className="hover:shadow box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15)  rounded-[8px]   items-center justify-start  gap-[8px] w-full ">
                <NavLink
                  to="/community"
                  className={({ isActive }) =>
                    `flex items-center gap-[10px] px-[16px] py-[12px] ${
                      isActive
                        ? "B4 text-Button rounded-[8px] shadow-[#FCC378] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] w-[100%] h-[100%] px-[16px] py-[12px]"
                        : "text-Dark-Light  px-[16px] py-[12px] B4 ease-out duration-300 rounded-[8px]"
                    }`
                  }
                >
                  {" "}
                  <RiUserCommunityFill /> Community
                </NavLink>
              </li>
              <li className="hover:shadow box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.15) rounded-[8px]    items-center justify-start  gap-[8px] w-full ">
                <NavLink
                  to="settings"
                  className={({ isActive }) =>
                    `flex items-center gap-[10px] px-[16px] py-[12px]  B4  ${
                      isActive
                        ? "B4 text-Button rounded-[8px] shadow-[#FCC378] shadow-[0px_2px_5px_0px_rgba(0,0,0,0.15)] w-[100%] h-[100%] px-[16px] py-[12px]"
                        : "text-Dark-Light  px-[16px] py-[12px] B4 ease-out duration-300 "
                    }`
                  }
                >
                  {" "}
                  <TbSettings /> Settings
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="button flex flex-row items-center w-full  justify-center">
            <button
              className="py-[10px]  max-w-[198px] w-full B1 outline-1 outline-Button  text-Button rounded-[8px] "
              onClick={() => navigate("/login")}
            >
              <a href="#">Logout</a>
            </button>
          </ div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
