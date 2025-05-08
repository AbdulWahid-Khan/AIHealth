import React from "react";
import navprofile from "./../../assets/images/Dshproimg.png";
import totalgoal from "./../../assets/images/totalgoals.png";
import comgoals from "./../../assets/images/goalscompleted.png";
import pengoals from "./../../assets/images/Goalspending.png";
import { FaBell } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { BiLeftArrowCircle } from "react-icons/bi";
import { BiRightArrowCircle } from "react-icons/bi";
import Calendar from "./Caleder";
import { HiDotsHorizontal } from "react-icons/hi";
import { CiCircleCheck } from "react-icons/ci";
import Piechart from "./Piechart";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="set  w-full flex flex-col bg-white items-between pb-[40px] ">
        <div className="nav ">
          <div className="flex  justify-between px-[28px]  pl-4  w-full items-center pt-[31px] ">
            <div className="text flex items-center  ">
              <p className="text-[24px] font-bold text-Button font-Avenir">
                Dashboard
              </p>
            </div>
            <div className="icons gap-4 flex flex-row items-center ">
              <GiAlarmClock className=" text-2xl text-bold text-Button" />
              <FaBell className=" text-2xl text-bold" />
              <img src={navprofile} alt="" className="w-[41px] h-[41px]" />
            </div>
          </div>
        </div>
        {/* <div className="class flex flex-col gap-[40px]  justify-self-end   "> */}
        <div className=" flex flex-col gap-[26px] justify-between  h-full pt-[25px]">
          <div className="secondcontrol    w-full   px-[30px] pb-[15px]   shadow shadow-[#FFC6AF]  border-solid border-b-[#FFC6AF]  border-b-[10px] rounded-[10px]">
            <div className="outer flex flex-row justify-between items-center ">
              <div className="textandcalender pt-[20px]">
                <p className="text-[24px] text-semibold text-Button font-Avenir">
                  Today <span className="text-Dark">Goals</span> to achieve
                </p>
              </div>
              <div className=" flex flex-row items-center gap-[7px]">
                {/* <Calendar /> */}
                <p className="flex flex-row items-start  text-[14px] font-Avenir">
                  {" "}
                  <span>Nov </span> (2024)
                </p>
                <BiLeftArrowCircle className="  text-[#FCC378] w-[19px] h-[19px] cursor-pointer" onClick={()=>navigate("/chatbot")} />
                <BiRightArrowCircle className="  text-[#FCC378] w-[19px] h-[19px] cursor-pointer" onClick={()=>navigate("/chatbot")} />
              </div>
            </div>
            <div className="flex flex-row justify-between gap-[24px] font-Avenir ">
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center  text-[14px] font-Avenir">
                  Mon
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir ">
                  1
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir ">
                  Tue
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir ">
                  2
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir ">
                  Wed
                </p>
                <p className="text-Button active:text-white justify-self-center text-[18px] font-Avenir ">
                  3
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir ">
                  Thu
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  4
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Fri
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  5
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Sat
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir ">
                  6
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Sun
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  7
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Mon
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir ">
                  8
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Tue
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  9
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Wed
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  10
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Thu
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  11
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Fri
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  12
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Sat
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  13
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Sun
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  14
                </p>
              </div>
              <div className="flex flex-col justify-center items-center active:bg-Button  rounded-[27px] w-[46px] h-[56px] px-[6.5px] py-[12.4px] font-[400]">
                <p className="text-Dark active:text-white text-center justify-  text-[14px] font-Avenir">
                  Mon
                </p>
                <p className="text-Button active:text-white justify-self-center  text-[18px] font-Avenir">
                  15
                </p>
              </div>
            </div>

            <div className="middlecontent  flex flex-col gap-[15px] ">
              <div className="verical flex flex-row gap-[13px]">
                <div className="time max-w-[100px] sm:w-[100px]   flex flex-row justify-center items-center ">
                  <p className=" text-Dark-Light font-[600] text-[20px] font-Avenir">
                    8:30 Am
                  </p>
                </div>
                <div className="content px-[20px] w-full bg-[#FFF4EF] rounded-[16px] pt-[17.5px] pb-[21.5px]">
                  <div className="upper flex flex-row justify-between">
                    <p className="text-[22px] font-[700] font-Avenir">
                      Headache Release
                    </p>
                    <HiDotsHorizontal />
                  </div>
                  <div className="upper flex flex-row justify-between ">
                    <p className="B3 text-Heading">
                      Duration: <span className="text-Dark ">07 days</span>
                    </p>

                    <div className="flex flex-row items-center text-[#02D86D] text-[16px] font-bold  bg-[#02D86D]/10 gap-[10px]  p-1 rounded-[8px]">
                      <CiCircleCheck /> <p className="">Goal completed</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="verical flex flex-row gap-[13px]">
                <div className="time max-w-[100px] sm:w-[100px]   flex flex-row justify-center items-center ">
                  <p className=" text-Dark-Light font-[600] text-[20px] font-Avenir">
                    8:30 Am
                  </p>
                </div>
                <div className="content px-[20px] w-full bg-[#FFF4EF] rounded-[16px] pt-[17.5px] pb-[21.5px]">
                  <div className="upper flex flex-row justify-between">
                    <p className="text-[22px] font-[700] font-Avenir ">
                      Headache Release
                    </p>
                    <HiDotsHorizontal />
                  </div>
                  <div className="upper flex flex-row justify-between ">
                    <p className="B3 text-Heading">
                      Duration: <span className="text-Dark ">07 days</span>
                    </p>

                    <div className="flex flex-row items-center text-[#02D86D] text-base font-bold  bg-[#02D86D]/10 gap-2  p-1 rounded-[8px]">
                      <CiCircleCheck /> <p>Goal completed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* how to get gap between these two div that are getting gap-[26px] therefor i have made a div */}

          <div className="secondcontrol  pt-[20px] shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]  ">
            <p className="text-[24px] font-semibold  text-primary pl-[20px] items-self-end font-Avenir">
              Statistics{" "}
            </p>
            <div className="w-full    pb-[51px] pr-[41px] pl-[55px] items-center flex flex-row justify-between  ">
              <div className="chart   boder-b border-solid border-b-[#FFC6AF]  rounded-[10px]">
                <div className="max-w-[227px] max-h-[224px] md:w-[227px] md:h-[224px] relative">
                  {" "}
                  <Piechart />
                  <p className="absolute top-[35%] left-[69%] text-[#BA7D64] text-[27px] font-[750px] font-Avenir">
                    10
                  </p>
                  <p className="absolute top-[70%] left-[38%] text-[#47B288] text-[27px] font-[750px] font-Avenir">
                    07
                  </p>
                  <p className="absolute top-[35%] left-[27%] text-[#A7434D] text-[27px] font-[750px] font-Avenir">
                    03
                  </p>
                </div>
              </div>

              <div className="leftsideboxes   w-full  flex flex-row justify-around items-center gap-[20px] ">
                <div className="flex flex-row justify-center items-center gap-[10px] max-w-[240px] md:w-[240px] shadow shadow-[#FFC6AF] h-[224px] boder-none border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
                  <div className="img">
                    <img src={totalgoal} alt="" />
                  </div>
                  <div className="text">
                    <p className="text-[18px] font-Avenir text-[400]">Total Goals</p>
                    <p className="text-[26px]  text-[#FFC6AF] font-bold font-Avenir">
                      10
                    </p>
                  </div>
                </div>
                <div className="flex  flex-row justify-center items-center gap-[10px] w-[240px] shadow shadow-[#FFC6AF] h-[224px] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
                  <div className="img">
                    <img src={comgoals} alt="" />
                  </div>
                  <div className="text">
                    <p className="text-[18px] font-Avenir text-[400] ">
                      Goal Completed{" "}
                    </p>
                    <p className="text-[22px] text-[#86FFCF] font-[750] font-Avenir">
                      7
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-center items-center gap-[10px] w-[240px] shadow shadow-[#FFC6AF] h-[224px] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
                  <div className="img">
                    <img src={pengoals} alt="" />
                  </div>
                  <div className="text">
                    <p className="text-[18px] font-Avenir text-[400]">
                      Pending Completed{" "}
                    </p>
                    <p className="text-[22px] text-[#F16A77] font-[750] font-Avenir">
                      03
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}

      <Outlet />
    </>
  );
};

export default Dashboard;
