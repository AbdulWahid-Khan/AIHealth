import React from "react";
import { FaBell } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import navprofile from "./../../assets/images/Dshproimg.png";
import { FiPlus } from "react-icons/fi";
import Button from "../shared/Button";
import { FaRegBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="relative bg-white  max-w-[1920px] w-full ">
        <div className="flex pbflex-row  max-h-[61px] h-full justify-between pt-[10px] pl-[32px] pr-[27px] max-w-[1920px] w-full  ">
          <div className="text ">
            <h2 className="h2  text-Button h-full">Goals</h2>
          </div>
          <div className="max-w-[114px] h-full w-full gap-3 p-[10px] flex flex-row items-center rounded-[30px] bg-white shadow-[14px_17px_40px_4px_rgba(0,0,0,0.08)]">
            <FaRegBell className=" w-[24px] h-[24px]" />
            <img src={navprofile} alt="" className="w-[41px] h-[41px]" />
          </div>
        </div>

        
          <div
          className="button  flex justify-end pt-[32px] pr-[27px] items-center"
            
          > 
          <button htmlFor="" className="bg-Button  py-[17px] px-[37px] text-white flex gap-2 items-center rounded-[10px] font-Manrope text-[16px] font-medium cursor-pointer"
            onClick={() => navigate("/goalsprogress")}>
            <FiPlus />
            Add goal</button>
            
          </div>
      

        <p className="text-[36px] text-Button font-semibold opacity-50  text-center absolute top-[50%] left-[40%] ">
          {" "}
          No goals added yet
        </p>
      </div>
    </>
  );
};

export default Goals;
