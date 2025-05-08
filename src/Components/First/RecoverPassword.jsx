import React from 'react'
import Topicon from "./../../assets/images/Topmainicon.png";
import yellowframe from "./../../assets/images/Mainfraim.png";
import { useNavigate } from 'react-router-dom';
const RecoverPassword = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
            <div className="  relative flex flex-col  items-center justify-center min-h-screen">
              <div className="image  w-full  ">
                      <img
                        src={Topicon}
                        alt=""
                        className="absolute w-[206px]  h-[60px] top-[40px] left-[40px]  "
                      />
                      </div>
      
              <div className="heading ">
                <h1 className="h1 font-Manrope font-medium text-center    align-self-center justify-self-center">
                  Recover Password
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
              <label htmlFor="email" className='B6 font-Manrope '>Email address</label>
              <input
                type="text"
                className="B5 font-Manrope w-full px-[16px] bg-[#FFF4EF] py-[12px] outline-none rounded-[8px]"
                placeholder="Enter your Email address"
              />
            </div>
                 
            <div className="btn  ">
              <button className="w-full B4 font-Manrop font-medium  p-[12px] bg-Button rounded-[8px] cursor-pointer" onClick={()=>navigate("/verifycode")}>
                {" "}
                Continue{" "}
              </button>
            </div>
                 
                </div>
                <div className="btn  gap=[10px]">
                    <button className= " B4 font-Manrop font-medium  max-w-[128px] w-full h-[48px] bg-[#FCC378] rounded-[8px] absolute left-[10px] bottom-[8.5%] cursor-pointer " onClick={()=>navigate("/signup")}>
                      {" "}
                      Get Back{" "}
                    </button>
                  </div>

              </div>
      
              
      
            </div>
          </div>
    </>
  )
}

export default RecoverPassword
