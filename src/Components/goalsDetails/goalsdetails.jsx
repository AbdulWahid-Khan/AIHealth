import React, { useState } from "react";
import { Button, Modal, TimePicker, } from "antd";

import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { IoCalendarSharp } from "react-icons/io5";
import walkingicon from "./../../assets/images/walkingicon.png";
import { FaEdit } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaToggleOn } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Goalsdetails = () => {
  const navigate = useNavigate();
 const [activeModal, setActiveModal] = useState(null);

 



  const showModal = (modalName) => {
    setActiveModal(modalName);
  };
  const handleOk = () => {
    setActiveModal(null);
  };
  const handleCancel = () => {
    setActiveModal(null);
  };
  
 
  return (
    <>
      <div className="bodymain  flex flex-col relative max-w-[1920px] w-full h-full px-[55px] pt-[68px]  bg-[#FFF4EF] ">
        <div className="arrow ">
          <MdOutlineArrowCircleLeft className="w-[26px] h-[26px]  text-[#FFC378] absolute top-[30px] left-[30px] cursor-pointer" onClick={()=> navigate("/goalsprogress")}/>
        </div>
        <div className="mainouter bg-white  w-full pb-[100px]   px-[36px] shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
        <div className="flex justify-between pt-[31px]">
          <div className="goals ">
            <p className="text-[34px] text-[#FCC378] font-normal font-Manrope">
              Goals Details :{" "}
            </p>
          </div>
          <div className="twobutton flex max-w-[286px] w-full  gap-[14px] justify-between items-center"  >
            <button className="flex cursor-pointer flex-row items-center max-h-[34px] h-full  max-w-[136px] w-full bg-[#FCC378] text-white  px-[2px] py-[10px] text-[14px] font-Avenir  font-semibold rounded-[6px] justify-center"  onClick={() => showModal("modal1")}>
              {" "}
            Add Reminder{" "}
            </button>

            <button className="flex cursor-pointer flex-row items-center  max-h-[34px] h-full  max-w-[136px] w-full justify-between text-[#FCC378] border-[1px] px-[24px] py-[10px] text-[14px] font-Avenir  font-semibold rounded-[6px] gap-[5px]" >
              {" "}
              <MdChat />
              Go to chat
            </button>
          </div>
        </div>

        <div className="text flex justify-between pt-[20px]">
          <div className="flex flex-col">
            <p className="text-[22px] font-bold ">Headch Release</p>
            <p className="text-[#FCC378] text-[18px] ">
              Duration :{" "}
              <span className="text-[#282828] text-[18px]">07 Days</span>
            </p>
          </div>
          <div className="flex flex-col py-[20px] ">
            <div className="firstrow flex gap-[5px] items-center">
              <div className="icon flex  text-[14px] font-medium font-Manrope gap-2 ">
              <IoCalendarOutline className="w-[24px] h-[24px]" />{" "}
                <p> Start Date</p>
              </div>
              <div className="leghttext">
                <p className="text-[#282828]/30 text-[14px] font-medium">
                  Mon Oct 7, 2024 11:30 am
                </p>
              </div>
            </div>
            <div className="second flex gap-[5px] items-center">
              <div className="icon items-center flex  text-[14px] font-medium font-Manrope gap-2  ">
              <IoCalendarOutline className="w-[24px] h-[24px]" />{" "}
                <p> Start Date</p>
              </div>
              <div className="leghttext">
                <p className="text-Dark-Light text-B6 font-medium font-Manrope">
                  Mon Oct 7, 2024 11:30 am
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-[40px] top-10 ">
          
          <div className="reltive flex w-full bg-[#FAD8D5] h-4 rounded-full  justify-start items-center">
          <p className="flex left-[50%] absolute z-10 text-[#F48F99] font-Avenir text-[14px]">40% complete</p>
            <div className="bg-[#EC5C5C] rounded-full h-full flex items-center justify-center text-white text-xs font-medium w-[40%]">
            {/* <p className="flex justify-self-center text-[#EC5C5C]">40% complete</p> */}
            </div>
           
          </div>
         
        </div>
        <div className="test flex justify-between pt-[38px] pb-[22px]">
          <div className="para py-[10px]">
            <p className="text-Button text-[22px] font-bold font-Avenir">
              Sub Goal Details:
            </p>
          </div>
        
            <button className="flex flex-row items-center h-full max-w-[136px] w-full bg-[#FCC378] text-white  px-[20px] py-[10px] text-[14px] font-Avenir  font-medium rounded-[6px] justify-center  cursor-pointer" onClick={() => showModal("modal2")}>
              Add Sub Goals
            </button>
         
        </div>
<div className="main flex flex-col gap-[23px]">
        <div className="middle pt-[24px] pb-[29px] pl-[27px] box-shadow shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)]  boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
            <div className="firstrow flex justify-between">
          <div className="leftportion flex justify-between gap-[12px]">
            <div className="icon border-[2.67px] h-[60px] w-[60px] rounded-[50%]  flex items-center justify-center text-[#F16A77] px-[17px]py-[15px]">
              <img src={walkingicon} alt="" className="w-[28px] h-[28px] " />
            </div>
            <div className="flex flex-col">
              <p className="text-[22px] font-bold font-Avenir">walking</p>
              <p className="text-[18px] text-[#F16A77] font-Manrope">
                Daily walk:{" "}
                <span className="text-[#282828] text-[18px] font-Manrope">30 mins</span>
              </p>
            </div>
          </div>
          
          <div className="rightsideportion flex flex-col iems-start gap-[15px]">
            <div className="iconportion flex items-start  justify-center gap-2 pr-[8px]">
              <FaEdit />
              <IoMdAlarm className="text-[#FFC378]" />
              <RiDeleteBin5Line className="text-[#F16A77]" />
            </div>
            <p className="text-[14px] font-semibold pr-[5px]">Nov (2024)</p>
          </div>
        </div>

        <div className="flex flex-row justify-between gap-[24px] pl-[72px] ">
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[#FFFFFF] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px active:text-[#FFFFFF]">
              Mon
            </p>
            <p className="font-Avenir font-bold text-Dark-Light justify-self-center pb-0.1 text-[18px] active:text-[#ffffff]">
              1
            </p>
            <CiCircleCheck className="flex justify-self-center " />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Tue
            </p>
            <p className="font-Avenir font-bold text-Dark-Light justify-self-center pb-0.1 text-[18px]">
              2
            </p>
            <CiCircleCheck className="flex justify-self-center " />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Wen
            </p>
            <p className="font-Avenir font-bold text-Dark-Light justify-self-center pb-0.1 text-[18px]">
              3
            </p>
            <CiCircleCheck className="flex justify-self-center " />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Thu
            </p>
            <p className="font-Avenir font-bold text-Dark-Light justify-self-center pb-0.1 text-[18px]">
              4
            </p>
            <CiCircleCheck className="flex justify-self-center " />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenirtext-[#282828] text-center justify- pt-0.5 text-[14px">
              Fri
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              5
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className= "font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Sat
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              6
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Sat
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              7
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Sun
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              8
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content] align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Mon
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              9
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content  align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenirtext-[#282828] text-center justify- pt-0.5 text-[14px">
              Tue
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              10
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Wed
            </p>
            <p className="font-Avenir font-boldtext-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              11
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Thu
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              12
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Fri
            </p>
            <p className="font-Avenir font-boldtext-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              13
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenirtext-[#282828] text-center justify- pt-0.5 text-[14px">
              Sat
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              14
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
          <div className="content align-self-center active:bg-[#FCC378] active:text-[white] rounded-4xl">
            <p className="font-Avenir text-[#282828] text-center justify- pt-0.5 text-[14px">
              Sun
            </p>
            <p className="font-Avenir font-bold text-[#FCC378] justify-self-center pb-0.1 text-[18px]">
              15
            </p>
            <CiCircleCheck className="flex justify-self-center text-[#FFC378]" />
          </div>
        </div>
        <div className="smalltext">
          <p className="text-[#282828]/50 text-[12px] font-Avenir">
            Click on date when you completed the sub goal
          </p>
        </div>
        <div className="flex justify-center">
          <IoIosArrowUp />{" "}
        </div>

        </div>


       <div className="flex    justify-center flex-col box-shadow shadow-[0px_0px_4px_0px_rgba(0,0,0,0.25)] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
        <div className="firstrow flex justify-between ">
          <div className="leftportion flex justify-between pl-[27px] gap-2 pt-[25px]">
            <div className="icon border-[2.67px] w-[60px] h-[60px] rounded-[50%]  justify-center text-[#F16A77] px-[15px] py-[17px]">
              <img src={walkingicon} alt="" className="w-[28px] h-[28px]" />
            </div>
            <div className="flex flex-col ">
              <p className="text-[22px] font-bold font-Avenir">Cardio</p>
              <p className="text-[18px] text-[#F16A77] font-Manrope">
                Daily walk:{" "}
                <span className="text-[#282828] text-[18px]">30 mins</span>
              </p>
            </div>
          </div>
          
          <div className="rightsideportion flex flex-col iems-start gap-[15px]">
            <div className="iconportion flex items-start  justify-end gap-2 pr-[8px] pt-[10px]">
              <FaEdit />
              <IoMdAlarm className="text-[#FCC378]" />
              <RiDeleteBin5Line className="text-[#F16A77]" />
            </div>
            <div className="second flex flex-row gap-[10px] pr-[5px]">
            <p className="text-[14px] font-semibold font-Avenir">Nov (2024)</p>
            <p className="flex flex-row items-center text-[#FFC378] gap-1">
              <FaRegArrowAltCircleLeft />
            <FaRegArrowAltCircleRight/></p>
            </div>
          </div>
          
        </div >
     
        <div className="flex justify-center pt-[34px]"><IoIosArrowDown /></div>
        </div>
        </div>
        </div>


      </div>



       <Modal
              width={464}
              
              open={activeModal === "modal1"}
              onOk={handleOk}
              onCancel={handleCancel}
              closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
              footer={null}
              className="your-custom-modal box-shadow shadow-[0px_0px_8px_0px_rgba(0,0,0,0.19)] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]"
            >
              <div className="  h-[674px]  ">
                <div className="head flex items-end py-[12px]">
                  <div className="text-[22px] text-Dark font-bold font-Avenir">
                    What health activity do you want a reminder for?
                  </div>
                  <p className="text-[10px] justify-self-end flex gap-2">
                    <CiCirclePlus className="w-[24px] h-[24px] text-[#FCC378] " onClick={() => showModal("modal3")} />
                    <FaEdit className="w-[24px] h-[24px]" />
                  </p>
                </div>
                <div className="flex flex-col bg-[#FFF8F0] gap-[13px] rounded-[8px]">
                  <p className="text-[#FFC6AF] font-Avenir text-[16px]">Headache</p>
                  <div className="flex items-center justify-between">
                    <div className="left flex flex-row items-center justify-between w-full">
                      <div>
                        <p className="text-[24px] font-bold font-Avenir">9:30 Am</p>
                      </div>
                      <div className="flex gap-[5px] font-Avenir">
                        <p className="text-[14px] font-semibold opacity-30">M</p>
                        <p className="text-[14px] font-semibold opacity-30">T</p>
                        <p className="text-[14px] text-[#F16A77] font-semibold ">T</p>
                        <p className="text-[14px] text-[#F16A77] font-semibold ">W</p>
                        <p className="text-[14px] text-[#F16A77] font-semibold ">F</p>
                        <p className="text-[14px] font-semibold opacity-30">S</p>
                        <p className="text-[14px] font-semibold opacity-30">S</p>
                      </div>
                    </div>
                    <div className="icon flex text-[#FCC378]  ">
                      <FaToggleOn className="w-[40px] h-[22px]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className=""></div>
            </Modal>

{/* secondModal start from here */}
<Modal
              width={538}
              
              open={activeModal === "modal2"}
              onOk={handleOk}
              onCancel={handleCancel}
              closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
              footer={null}
              centered
              className="your-custom-modal box-shadow shadow-[0px_0px_8px_0px_rgba(0,0,0,0.19)] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]"
            >
              <div className="  h-[514px]  ">
                <div className="head flex items-end py-[12px]">
                  <div className="text-[24px] text-[#282828] font-normal font-Manrope">
                    <p>Add <span className="text-[#F16A77] ">Sub Goals</span> </p>
                  </div>
                  
                </div>
                <div className="flex flex-col gap-[13px] ">
                <p className="text-[#282828] text-[14px] font-Manrope">Sub Goal Name</p>
                  <div className="inputfield rounded-[8px] bg-[#FFF4EF] pl-[10px] py-[13px]">
                  
                  <input type="text" placeholder="e.g walking swimming running etc" className="outline-none w-full  px-[12px] text-Dark-Light font-Manrope " />
                  </div>
                  <p className="text-[#282828] text-[14px] font-Avenir">Estimated Time</p>
                  <div className="flex justify-between rounded-[8px] bg-[#FFF4EF]  py-[13px] pl-[10px] pr-[17px]">
                  
                  <input type="text" placeholder="00h:00m:00s" className="outline-none w-full  px-[12px] text-Dark-Light font-Manrope" />
                  <IoIosArrowDown />
                  </div>
                </div>
              </div>
              <div className="btn flex justify-between pt-[182px]">
                <button className="max-w-[193px] w-full border-[1px] border-[#FDD9AB] bg-[#FFFAE5] text-[#282828] text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]"> <p className="text-[14px] text-[#FCC378]">Cancel</p></button>
                <button className="max-w-[193px] w-full  bg-[#FCC378]  text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]"> <p className="text-[14px] text-white">Cancel</p></button>
                </div>
              <div className=""></div>
            </Modal>

{/* thirdmodal */}
<Modal
              width={464}
              
              open={activeModal === "modal3"}
              onOk={handleOk}
              onCancel={handleCancel}
              closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
              footer={null}
              centered
              className="your-custom-modal box-shadow shadow-[0px_0px_8px_0px_rgba(0,0,0,0.19)] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]"
            >
              <div className="mainv ">
                <div className="heading text-[22px] text-[#282828] font-[700] ">
                  Set Goal Reminder

                </div>
               <div className="flex flex-col max-w-[250px] h-[150px] items-center justify-center w-full">
               <TimePicker format="HH:mm" className="w-full"  suffixIcon={null} />
               </div>
               

              </div>
              <div className="morking p-[10px]">
              <p className="text-[#143A62] text-[14px]">Every Mon ,Tue,wed</p>
              <div className="days  flex flex-row justify-between py-[11.5px]">
                
                <div className="circle border-[1px] text-[#FFC378] border-[#FFC378] rounded-[50%] w-[20px] h-[20px] items-center flex justify-center font-[500] p-[4px]">
                <p className=" text-[14px] ">M</p>
                </div>
                <div className="circle border-[1px] text-[#FFC378] border-[#FFC378] rounded-[50%] w-[20px] h-[20px] items-center flex justify-center p-[4px]">
                <p className="] text-[14px]">T</p>
                </div>
                <div className="circle border-[1px] text-[#FFC378] border-[#FFC378] rounded-[50%] w-[20px] h-[20px] items-center flex justify-center p-[4px]">
                <p className=" text-[14px]">W</p>
                </div>

                <div className="circle border-[1px] text-[#282828] border-none w-[20px] h-[20px] items-center flex justify-center p-[4px]">
                <p className=" text-[14px]">T</p>
                </div>
                <div className="circle border-[1px] text-[#282828] border-none w-[20px] h-[20px] items-center flex justify-center">
                <p className=" text-[14px]">F</p>
                </div>
                <div className="circle border-[1px] text-[#282828] border-none w-[20px] h-[20px] items-center flex justify-center">
                <p className=" text-[14px]">S</p></div>
                <div className="circle border-[1px] text-[#F16A77] border-none w-[20px] h-[20px] items-center flex justify-center">
                <p className=" text-[14px]">S</p>
                </div>
              </div>
              <div className="name bg-[#FFF8F0]  ">
                <input type="text" placeholder="Reminder Name" className="w-full  px-[10px] py-[17px]" />
              </div>
              Notify me Via
              <div className="flex flex-row py-[10px]  text-[18px] font-[700] items-center  justify-between text-[#FCC378]">
                <p>Call</p>
                <FaToggleOn className="w-[31px]  h-full"/>
                </div>
                <div className="flex flex-row py-[10px] text-[18px] font-[700] items-center  justify-between text-[#FCC378]">
                <p>Message</p>
                <FaToggleOn className="w-[31px] h-full"/>
                </div>
                <div className="flex flex-row py-[10px]  text-[18px] font-[700] items-center  justify-between text-[#FCC378]">
                <p>Email</p>
                <FaToggleOn className="w-[31px] h-full "/>
                </div>
                <div className="btn flex justify-between pt-[20px]">
                <button className="max-w-[136px] w-full border-[1px] border-[#FDD9AB] bg-[#FFFAE5] text-[#282828] text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]"> <p className="text-[14px] text-[#FCC378]">Cancel</p></button>
                <button className="max-w-[136px] w-full  bg-[#FCC378]  text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]"> <p className="text-[14px] text-white">Cancel</p></button>
                </div>
                </div>
            </Modal>
    </>
  );
};

export default Goalsdetails;
