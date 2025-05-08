import React from "react";
import jack from "./../../assets/images/Jack.png";
import { RiPauseMiniFill } from "react-icons/ri";
import { MdKeyboardVoice } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import "./../styles/Animation.css";
import { useNavigate } from "react-router-dom";
const Handpage = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className="flex flex-col h-full w-full  justify-center items-center min-h-screen">
      <div className="flex justify-center  ">
        <div className="img flex flex-col  items-center">
          <img src={jack} alt="" className="w-[67px] h-[82px]" />
          <p className="text-base font-Avenir ">Jack</p>
        </div>
      </div>

      <div className="hand flex justify-center w-full  pt-[50px]">
        <div className="lines flex gap-0.25 items-center ">
          <div className="w-[62px] h-[95px] bg-Button rounded-full"></div>
          <div className="w-[62px] h-[122px] bg-Button rounded-full"></div>
          <div className="w-[62px] h-[146px] bg-Button rounded-full"></div>
          <div className="w-[62px] h-[95px] bg-Button rounded-full"></div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="textandicon gap-1 flex flex-col  items-center ">
          <MdKeyboardVoice className="w-[20px] h-[20px] text-Button" />
          <p className="text-Dark text-sm font-Avenir ">Tap to interrup</p>
        </div>
      </div>
<div className="icons flex flex-col justify-center items-center w-full h-full">
      <div className="icon flex pt-[40px]  justify-center items-center  w-full h-full">
        <div className="flex  max-w-[202px] w-full px-4 py-2 justify-between items-center h-full">
          <div className="pause border-[1px] border-Button rounded-full w-[40px] h-[40px] bg-BgLight pt-1">
            <RiPauseMiniFill className="text-Button  w-[30px] h-[30px]  justify-self-center" />
          </div>
          <div className="cross border-[1px] border-Heading rounded-full w-[67px] h-[67px] pt-4 bg-[#FFCDD2] justify-center items-center">
            <RxCross2 className="text-Heading justify-self-center w-[30px] h-[30px]" />
          </div>
        </div>
      </div>
      </div>
      </div>
    </>
  );
};
export default Handpage;
