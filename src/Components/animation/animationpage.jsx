import React from "react";
import "./../styles/animationpage.css";
import { RiPauseMiniFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import jack from "./../../assets/images/Jack.png";
import { MdKeyboardVoice } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Animationpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="main   w-full h-full ">
        <div className="simple flex flex-col h-full min-h-screen  justify-center ">
          <div className="img flex h-full justify-center pb-[20px] items-center">
            <img src={jack} alt="" className="w-[67px] h-[82px]" />
          </div>

          <div className="animation  flex justify-center pt-[60px] items-center ">
            <div className="starting   "></div>
          </div>
<div className="flex flex-col  justify-center items-center h-full pt-[100px] ">
          <div className="speaker flex flex-col ">
            <div className="speakericon flex items-center gap-2 text-center justify-center h-full">
              <MdKeyboardVoice className="w-[20px] h-[20px] text-Button" />
              <div className="lines flex gap-0.25 items-center">
                <div className="w-[11px] h-[17px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[22px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[28px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[17px] bg-Button rounded-full"></div>
              </div>
              
            </div>
            <p className="text-Dark text-sm font-Avenir text-center">
              {" "}
              Start speaking{" "}
            </p>
          </div>
          <div className="btncontrol w-full flex h-full justify-center items-center pt-[20px]">
            <div className="   h-full  max-w-[202px] w-full  justify-between flex flex-row  px-4 py-2  ">
              <label className="text-Button bg-BgLight rounded-full p-2 border-[1px] border-Button">
                <RiPauseMiniFill />{" "}
              </label>
              <label className="text-Heading bg-[#FFCDD2] rounded-full p-2 border-[1px] border-Heading hover:cursor-pointer" onClick={() => navigate("/chatbot")}>
                <RxCross2 />
              </label>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Animationpage;
