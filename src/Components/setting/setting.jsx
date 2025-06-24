import React from "react";
import { useState } from "react";
import SettingNav from "../shared/SettingNav";
import SettingBtnsBar from "./../shared/SettingBtnsBar";
import { NavLink, Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaToggleOn } from "react-icons/fa";
import { FaImages } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import navprofile from "./../../assets/images/Dshproimg.png";

const Setting = () => {
  const [tab, setTab] = useState(1);

  function updateTab(tab) {
    setTab(tab);
  }

  return (
    <>
      <div className="control flex flex-col   max-w-[1920px] w-full bg-white  ">
       
<SettingNav/>
        <div className="pb-[40px] px-[20px]">
          <ul className="buttons flex flex-row max-w-[1920px] w-fit   justify-start items-center bg-[#FFF4EF] px-[6px] py-[4px]">
            <button
              className={`w-[171px] px-[6px] py-[4px] font-normal text-B5 text-Dark font-Manrope rounded-[4px] ease-out duration-300 cursor-pointer ${
                tab === 1 ? "bg-[#FCC378]" : ""
              }`}
              onClick={() => updateTab(1)}
            >
              {" "}
              General Preference{" "}
            </button>

            <button
              className={` w-[141px]  px-[6px] py-[4px]  text-B5 text-Dark font-Manrope  rounded-[4px] ease-out duration-300 cursor-pointer ${ tab===2 ?"bg-[#FCC378]":""}`}
              onClick={() => updateTab(2)}
            >
              {" "}
              Profile Setting{" "}
            </button>
            <button
              className={` w-[141px] px-[6px] py-[4px]  text-B5 text-Dark font-Manrope  rounded-[4px] ease-out duration-300 cursor-pointer ${ tab===3 ?"bg-[#FCC378]":""}`}              onClick={() => updateTab(3)}
            >
              {" "}
              Security Setting{" "}
            </button>
          </ul>
        </div>

        {/* Genral Reference  */}

        <div className={tab === 1 ? "block " : "hidden"}>
          <div className="control w-full px-[20px] ">
            <div className="container flex flex-col justify-center items-start   gap-4 px-6 py-[20px]">
              <div className="GenSetting flex flex-col max-w-[428px] w-full items-between  bg-[#FFFFfF] ">
                <p className="text-[24px] text-Heading font-normal font-Manrope ">
                  Notification{" "}
                  <span className="text-[#282828] font-normal ">Settings</span>
                </p>
                <div className="icon&text flex flex-row items-center justify-between py-[12px] px-[14px]">
                  <p className="text-[16px] text-[#282828] font-normal font-sans ">
                    Email Notification
                  </p>
                  <button className="active:text-[#78fcab] t w-[44px] h-[26px]">
                    <FaToggleOn className="text-[#FCC378] w-[40px] h-[22px]" />
                  </button>
                </div>
              </div>
              <div className="GenSetting flex flex-col max-w-[428px] w-full items-between   bg-[#FFFFfF] ">
                <p className="text-[24px] text-Heading font-normal font-Manrope ">
                  Chat bot{" "}
                  <span className="text-Dark font-normal ">Settings</span>
                </p>
                <div className="icon&text flex flex-row items-center justify-between py-[12px] px-[14px]">
                  <p className="text-[16px] text-[#282828] font-normal font-sans ">
                    Enable Humor Response
                  </p>
                  <button className="toggle w-[44px] h-[26px]">
                    <FaToggleOn className="text-[#FCC378] w-[40px] h-[22px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Setting */}
        <div className={tab === 2 ? "block" : "hidden"}>
          <div className=" px-[20px]">
            <div className="container flex flex-col justify-center text-start max-w-[401px] w-fu1l    gap-[18px]   ">
              <p className="text-[24px] text-Heading font-normal font-Manrope max-w-[401px] w-fu1l">
                Profile{" "}
                <span className="text-[#282828] font-normal ">Settings</span>
              </p>
              <div className="textedfile text-B6  font-Manrope   max-w-[401px] w-full    flex flex-col  justify-center text-start gap-[18px] ">
                Update Profile image
                <label
                  htmlFor="inputfile"
                  className="flex flex-row items-center gap-[12px] px-[16px] py-[14px] bg-[#FFF4EF] text-[#282828] font-normal w-full font-sans rounded-[8px]"
                >
                  <FaImages className="text-[#FCC378] " />
                  <input
                    type="file"
                    name="inputfile"
                    id=""
                    placeholder="Upload Profile image"
                    className="outline-none  "
                  />
                </label>
                <p className="text-B6 font-Manrope">User Name      </p>
                <label
                  htmlFor="username"
                  className="flex flex-row items-center gap-[12px] px-[16px] py-[14px] bg-[#FFF4EF] text-Dark"
                >
                  <input
                    type="dropdowntext"
                    name=" username"
                    id=""
                    placeholder="Jenny Williams"
                    className="outline-none"
                  />
                </label>
                <p className="text-B6 font-Manrope">Email</p>
                <label
                  htmlFor="inputemail"
                  className="flex font-Manrope flex-row items-center gap-[12px] px-[16px] py-[14px] bg-[#FFF4EF] text-[#282828] outline-none"
                >
                  <input
                    type="email"
                    name="inputemail"
                    id=""
                    placeholder="@gmail.com"
                    className="outline-none"
                  />
                </label>
                <p className="text-B6 font-Manrope">Phone no</p>
                <label
                  htmlFor="inputnumber"
                  className="flex flex-row items-center gap-[12px] px-[16px] py-[14px] bg-[#FFF4EF] text-[#282828] "
                >
                  <input
                    type="text"
                    name="inputnumber"
                    id=""
                    placeholder="+123456789"
                    className="outline-none"
                  />
                </label>
                <div className="buttons flex flex-row justify-betwen gap-[18px] items-center py">
                  <button className=" w-full p-[12px] font-Manrope  font-normal text-[16px] ease out  text-[#FCC378]  rounded-[4px] ease-out duration-300 outline-[1px] outline-[#FCC378]">
                    Discard
                  </button>
                  <button className=" w-full p-[12px] font-Manrope  font-normal text-[16px] ease out  text-[#FFFFFF]  rounded-[4px] ease-out duration-300 outline-[1px] outline-[#FCC378] bg-[#FCC378]">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Security Setting */}
        <div className={tab === 3 ? "block" : "hidden"}>
          <div className=" px-[20px]">
            <div className="container flex flex-col justify-center text-start max-w-[401px] w-fu1l   gap-[18px]  ">
              <p className="text-[24px] text-Heading font-Manrope font-normal max-w-[401px] w-fu1l ">
                Security{" "}
                <span className="text-[#282828] font-normal ">Settings</span>
              </p>
              <div className="textedfile max-w-[401px] w-fu1l    flex flex-col  justify-center text-start gap-[18px] ">
               <p className="text-B6 font-Manrope">Old Password</p> 
                <label
                  htmlFor="oldpassword"
                  className=" w-fu1l text-B5 flex flex-row items-center justify-between gap-[12px] px-[16px] py-[12px] bg-[#FFF4EF]"
                >
                  <input
                    type="password"
                    name="oldpassword"
                    id="1"
                    placeholder="************"
                    className="outline-none"
                  />
                  <FaRegEyeSlash />
                </label>
                <p className="text-B6 font-Manrope">New Password</p>
                <label
                  htmlFor="Newpassword"
                  className="max-w-[401px] font-Manrope w-fu1l flex flex-row items-center justify-between gap-[12px] px-[16px] py-[12px] bg-[#FFF4EF]"
                >
                  <input
                    type="password"
                    name="Newpassword"
                    id="2"
                    placeholder="************"
                    className="outline-none"
                  />
                  <FaRegEyeSlash />
                </label>
                <p className="text-B6 font-Manrope"> Confirm Password </p>
                <label
                  htmlFor=" Confirmpassword"
                  className="max-w-[401px] font-Manrope w-fu1l flex flex-row items-center justify-between gap-[12px] px-[16px] py-[12px] bg-[#FFF4EF]"
                >
                  <input
                    type="password"
                    name="Confirmpassword"
                    id="3"
                    placeholder="************"
                    className="outline-none"
                  />
                  <FaRegEyeSlash />
                </label>
                <div className="buttons flex flex-row justify-betwen gap-[18px] items-center py">
                  <button className=" w-full p-[12px] font-Manrope  font-normal text-[16px] ease out  text-[#FCC378]  rounded-[4px] ease-out duration-300 outline-[1px] outline-[#FCC378] cursor-pointer">
                    Discard
                  </button>
                  <button className=" w-full p-[12px] font-Manrope   font-normal text-[16px] ease out  text-[#FFFFFF]  rounded-[4px] ease-out duration-300 outline-[1px] outline-[#FCC378] bg-[#FCC378] cursor-pointer">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
