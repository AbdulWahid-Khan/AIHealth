import React from "react";
import Topicon from "./../../assets/images/Topmainicon.png";
import yellowframe from "./../../assets/images/Mainfraim.png";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
const Signup = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const togglepassword = () => {
    setIsPasswordVisible(!isPasswordVisible);
  }
 let  confirmTogglepassword=()=>{
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  }
  return (
    <>
      <div className=" relative flex flex-col   items-center justify-center   min-h-screen overflow-x-hidden overflow-y-hidden">
        <div className="image  sm:w-full absolute top-[40px] left-[40px] ">
          <img src={Topicon} alt="" className=" w-[206px]  h-[60px]   " />
        </div>

        <div className="heading flex flex-col pb-[2%] sm:pb-[0px]">
          <h1 className="h1 font-Manrope font-medium text-center   text-[30px] pb-[0px] align-self-end justify-self-end  md:align-self-center md:justify-self-center">
            Sign up
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
              <p className="B6 font-Manrope">  Email address</p>
              <label htmlFor="email B6 font-Manrope text-Dark">
              
              
              <input
                type="text"
                className="B5 w-full sm:max-w-[350px] font-Manrope  bg-BgLight px-[16px] py-[12px] outline-none rounded-[8px]"
                placeholder="Enter your Email address"
              />
              </label>
            </div>
            <div className="pass">
              <p className="B5 fonr-Manrope">Password</p>

              <label
                htmlFor="Password"
                className="bg-[#FFF4EF] sm:max-w-[350px] B6 font-Manrope px-[16px] py-[12px] h-full w-full flex items-center justify-between"
              >
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="Password"
                  className=" w-full  outline-none B5"
                  placeholder="Enter your password"
                />
                <FaRegEyeSlash className="w-[20px] h-[18px] cursor-pointer" onClick={() => togglepassword()}/>
              </label>
            </div>
            <div className="pass">
              <p className="B6 font-Manrope">Confirm Password</p>

              <label
                htmlFor="confirmPassword"
                className="bg-[#FFF4EF] sm:max-w-[350px] B6 font-Manrope px-[16px] py-[12px] h-full w-full flex items-center justify-between"
              >
                <input
                 type={isConfirmPasswordVisible? "text" : "password"}
                  id="confirmPassword"
                  className="B5 fonr-Manrope w-full  outline-none B5"
                  placeholder="Enter your password"
                />
                <FaRegEyeSlash className="w-[20px] h-[18px] cursor-pointer " onClick={() => confirmTogglepassword()} />
              </label>
            </div>
            <div className="btn mt-[12px] ">
              <button
                className="text-lg font-medium font-Manrope w-full sm:max-w-[350px]  h-[48px] bg-[#FCC378] rounded-[8px] cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {" "}
                Sign up{" "}
              </button>
            </div>
            <div className="flex justify-end w-full sm:max-w-[350px]">
              <a
                href="#"
                className="text-Heading underline font-Manrope "
                onClick={() => navigate("/login")}
              >
                {" "}
                Sign in{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
