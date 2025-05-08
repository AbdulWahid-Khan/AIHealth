import React from "react";
import Topicon from "./../../assets/images/Topmainicon.png";
import yellowframe from "./../../assets/images/Mainfraim.png";
import { useNavigate } from "react-router-dom";
const VerifyCode = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="  relative flex flex-col  items-center justify-center min-h-screen">
        <div className="image  w-full  ">
          <img
            src={Topicon}
            alt=""
            className="absolute w-[206px]  h-[60px] top-[40px] left-[40px]  "
          />
        </div>

        <div className="heading ">
          <h1 className=" h1 font-Manrope font-medium text-center align-self-center justify-self-center">
            Verify Code
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
          <div className="mainworking flex flex-col  gap-[12px]">
            <div className="mail">
              <label htmlFor="email" className="B6 font-Manrope">Verification Code</label>
              <input
                type="text"
                className="B5 font-Manrope w-full  bg-BgLight px-[16px] py-[12px] rounded-[8px]  outline-none"
                placeholder="Enter your verification code"
              />
            </div>

            <div className="btn  ">
              <button className="B4 font-Manrope font-medium w-full p-[12px] bg-Button rounded-[8px] cursor-pointer" onClick={() => navigate("/setnewpassword")}>
                {" "}
                Continue{" "}
              </button>
            </div>
          </div>
          
            <button className=" max-w-[128px] B4 w-full p-[12px] bg-Button rounded-[8px] absolute left-[10px] bottom-[8.5%] cursor-pointer" onClick={() => navigate("/signup")}>
              {" "}
              Get Back{" "}
            </button>
          
        </div>
      </div>
    </>
  );
};

export default VerifyCode;
