import React from "react";
import Topicon from "./../../assets/images/Topmainicon.png";
import yellowframe from "./../../assets/images/Mainfraim.png";
import { useNavigate } from "react-router-dom";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
const SetNewPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const togglepassword = () => {
    setPassword(!password);
  };
  const confirmtogglepassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className=" relative flex flex-col  items-center justify-center min-h-screen">
        <div className="image  w-full  ">
          <img
            src={Topicon}
            alt=""
            className="absolute w-[206px]  h-[60px] top-[40px] left-[40px]  "
          />
        </div>

        <div className="heading flex flex-col ">
          <h1 className="h1 font-Manrope font-medium text-center  align-self-center justify-self-center">
            Set New Password
          </h1>
        </div>
        <div
          className="relative w-full max-w-[805px] max-h-[584px]  h-full px-[228px] pt-[128px] pb-[228px] flex justify-center items-center  "
          style={{
            backgroundImage: `url(${yellowframe})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mainworking flex flex-col  gap-[12px] ">
            <div className="working w-[350px]">
              <p className="B6 font-Manrope ">New Password</p>
              <label
                htmlFor="password "
                className="px-[16px] py-[12px]  bg-[#FFF4EF] flex justify-between items-center h-full"
              >
                <input
                  type={password ? "text" : "password"}
                  className="B5 w-full sm:max-w-[350px]    outline-none rounded-[8px]"
                  placeholder="Enter your password"
                />
                <FaRegEyeSlash className="cursor-pointer w-[20px] h-[18px] " onClick={togglepassword}/>
              </label>
            </div>
            <div className="working">
              <p htmlFor="password">Confirm New Password</p>
              <label
                htmlFor="password "
                className="px-[16px] py-[12px]  bg-[#FFF4EF] flex justify-between items-center h-full"
              >
                <input
                  type={showPassword ? "text" : "password"}
                  className="B5 w-full sm:max-w-[350px]    outline-none rounded-[8px]"
                  placeholder="Enter your password"
                />
               <FaRegEyeSlash className="cursor-pointer w-[20px] h-[18px] " onClick={confirmtogglepassword} />
              </label>
            </div>

            <div className="btn ">
              <button
                className="w-[350px] p-[12px] bg-Button rounded-[8px] font-Manrope font-medium cursor-pointer"
                onClick={() => navigate("/login")}
              >
                {" "}
                Continue{" "}
              </button>
            </div>
          </div>
          <div className="btn  gap=[10px]">
            <button
              className="max-w-[128px] w-full h-[48px] bg-[#FCC378] rounded-[8px] absolute left-[10px] bottom-[10%] cursor-pointer "
              onClick={() => navigate("/verifycode")}
            >
              {" "}
              Get Back{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SetNewPassword;
