import React, { useState } from "react";
import Topicon from "./../../assets/images/Topmainicon.png";
import yellowframe from "./../../assets/images/Mainfraim.png";
import { FaRegEyeSlash } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import { TbHandClick } from "react-icons/tb";
import Password from "antd/es/input/Password";
const Login = () => {
 const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
 const togglePassword = () => {
  
  setShowPassword(!showPassword);
    
 
 };
  return (
    <>
      <div className=" relative flex flex-col w-full   items-center justify-center   min-h-screen overflow-hidden">
        <div className="image sm:w-full absolute top-[40px] left-[40px] ">
          <img src={Topicon} alt="" className=" w-[206px]  h-[60px]    " />
        </div>

        <div className="heading flex flex-col ">
          <h1 className=" h1  font-Manrope font-medium text-center text-[#282828]  pb-[40px] sm:pb-[0px] align-self-start justify-self-start  md:align-self-center md:justify-self-center">
            Sign in
          </h1>
        </div>

        <div
          className=" sm:bg-[url('./assets/images/Mainfraim.png')] bg-none sm:block w-full max-w-[805px] max-h-[584px]  h-full px-[10%]   sm:px-[170px] sm:pb-[160px] sm:pt-[80px] md:px-[228px] md:pb-[180px] md:pt-[80px]    "
          style={{
            // backgroundImage: `url(${yellowframe})`,

            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mainworking flex flex-col  gap-[12px] ">
            <div className="mail">
              <p className="B6 font-Manrope">Email address</p>
              <label htmlFor="email" className="B6 font-Manrope bg-[#FFF4EF] ">
               
              <input
                type="text"
                className="B5 w-full sm:max-w-[350px] font-Manrope  bg-BgLight px-[16px] py-[12px] outline-none rounded-[8px]"
                placeholder="Enter your Email address"
              />
              </label>
            </div>
            <div className="password">
              <p>Password</p>
             
              
              <label htmlFor="Password" className="bg-[#FFF4EF] sm:max-w-[350px] B6 font-Manrope px-[16px] py-[12px] h-full w-full flex items-center justify-between">
                <input
                type={showPassword ? "text" : "password"} 
                id="password"

                className="B5 fonr-Manrope w-full  outline-none B5"
                placeholder="Enter your password"
              />
              <FaRegEyeSlash className="w-[20px] h-[18px] hover:cursor-pointer" onClick={()=> togglePassword()}/>
              </label>
           
              
            </div>
            
            <div className="btn mt-[12px] ">
              <button className="B4 font-Manrope fonr-medium w-[100%] sm:w-full sm:max-w-[350px]  h-[48px] bg-[#FCC378] rounded-[8px] cursor-pointer" onClick={() => navigate("/dashboard")}>
                {" "}
                Sign in{" "}
              </button>
            </div>
            <div className="flex justify-between">
              <a href="#" className="text-Dark text-sm font-Manrope" onClick={() => navigate("/recoverpassword")}>
                {" "}
                Forgot Your Password
              </a>

              <a href="#" className="text-Heading underline text-xs font-Manrope cursor-pointer" onClick={() => navigate("/signup")}>
                {" "}
                Sign up{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
