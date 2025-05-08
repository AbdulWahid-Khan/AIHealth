import React from 'react'
import "./../styles/finishcallanimation.css"
import jackpic from "./../../assets/images/jacimg.png";
import { MdKeyboardVoice } from "react-icons/md";
import { RiPauseMiniFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
const Finishcallanimation = () => {
  return (
    <>
    {/* <div className="main bg-white  flex flex-col justify-center items-center"> */}
    <div className="flex h-full bg-Heading w-full">
    <div className="outer flex flex-col justify-center items-center bg-green-300 h-full">
      <div className="img flex h-full justify-center  ">
       <label htmlFor="" className='flex flex-col items-center'> <img src={jackpic} alt="" className="w-[67px] h-[82px]" />
        <p className='text-base font-Avenir'>Jack</p>
        </label>
      </div>
      {/* <div className="animation py-[90px]">
        <div className="black-circle flex justify-self-center  items-center">

        </div>
      </div> */}

      <div className="speaker flex flex-row w-full gap-2 justify-center items-center">
        <MdKeyboardVoice className="w-[20px] h-[20px] text-Button" />
        <div className="lines flex gap-0.25 items-center">
                <div className="w-[11px] h-[17px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[22px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[28px] bg-Button rounded-full"></div>
                <div className="w-[11px] h-[17px] bg-Button rounded-full"></div>
              </div>
      </div>
      <p className='text-Dark text-sm font-Avenir text-center '>Finish speaking to send </p>
        <div className="icon flex pt-[20px]  justify-self-center items-center max-w-[202px] w-full">
            <div className="flex  w-full justify-between items-center">
            <div className="pause border-[1px] border-Button rounded-full w-[40px] h-[40px] bg-BgLight pt-1">
                <RiPauseMiniFill className='text-Button  w-[30px] h-[30px]  justify-self-center'/>
            </div>
            <div className="cross border-[1px] border-Heading rounded-full w-[67px] h-[67px] pt-4 bg-[#FFCDD2] justify-center items-center">
                <RxCross2 className='text-Heading justify-self-center w-[30px] h-[30px]'/>
            </div>
            </div>
        </div>
        </div> 
        </div>
        {/* </div> */}
    </>
  )
}

export default Finishcallanimation
