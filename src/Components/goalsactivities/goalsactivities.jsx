import React, { useState } from "react";
import { Button, Modal } from "antd";
import { MdOutlineArrowCircleLeft } from "react-icons/md";
import { MdChat } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import walkingicon from "./../../assets/images/walkingicon.png";
import { FaEdit } from "react-icons/fa";
import { IoMdAlarm } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CiCircleCheck } from "react-icons/ci";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import walkpic from "./../../assets/images/walkingicon.png";
import cardicpic from "./../../assets/images/cardiopic.png";
import waterglasspic from "./../../assets/images/waterglasspic.png";
import { HiDotsVertical } from "react-icons/hi";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaToggleOn } from "react-icons/fa";
const Goalsactivities = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className=" bodymain flex flex-col relative max-w-[1920px] w-full h-full px-[55px] pt-[68px] pb-[35px] bg-[#FFF4EF] " >
        <div className="arrow ">
          <MdOutlineArrowCircleLeft className="w-[26px] h-[26px]  text-[#FFC378] absolute top-[30px] left-[30px] " />
        </div>

        <div className="mainouter bg-white  w-full pb-[265px]   px-[36px] shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
          <div className="flex justify-between pt-[31px]">
            <div className="goals ">
              <p className="h2 text-Button font-medium ">
                Goals Details :{" "}
              </p>
            </div>
            <div className="twobutton flex gap-[10px] max-w-[487px] w-full">
              <p className="max-w-[183px] text-sm   flex  w-full items-center justify-center gap-1  ">
                {" "}
                <span className="text-[#767F8C] text-sm font-Avenir">Next Reminder in:</span>{" "}
                <span className="text-[#E05151] text-sm font-Avenir flex items-center">00:20:10</span>
              </p>
              <button
                className="flex flex-row items-center  max-w-[136px] w-full bg-[#FCC378] text-white  px-[23px] py-[10px] text-[13px] leading-[14px] font-bold rounded-[6px] justify-center"
                onClick={showModal}
              >
                {" "}
                Add Reminder{" "}
              </button>

              <button className="flex  flex-row items-center  w-[138px] justify-between text-[#FCC378] border-[1px] px-[25px] py-[10px] text-[13px] font-bold rounded-[6px] gap-[5px]" >
                {" "}
                <MdChat />
                Go to chat
              </button>
            </div>
          </div>

          <div className="text flex justify-between pt-[20px]">
            <div className="flex flex-col">
              <p className="text-[22px] font-bold font-Avenir text-Dark">Headache Release Details</p>
              <p className="text-Button text-lg font-Manrope ">
                Duration :{" "}
                <span className="text-Dark text-lg font-Manrope">07 Days</span>
              </p>
            </div>
            <div className="flex flex-col py-[20px] ">
              <div className="firstrow flex gap-[5px] items-center">
                <div className="icon items-center flex  text-[14px] font-medium gap-1 ">
                <IoCalendarOutline className="w-[24px] h-[24px]" />{" "}
                  <p className="text-Dark font-Manrope font-medium "> Start Date</p>
                </div>
                <div className="leghttext">
                  <p className="text-Dark-Light text-sm font-medium font-Manrope">
                    Mon Oct 7, 2024 11:30 am
                  </p>
                </div>
              </div>
              <div className="second flex gap-[5px] items-center">
                <div className="icon items-center flex  text-[14px] font-medium gap-1 ">
                <IoCalendarOutline className="w-[24px] h-[24px]" />{" "}
                  <p className="text-Dark font-Manrope font-medium"> Start Date</p>
                </div>
                <div className="leghttext">
                  <p className="text-Dark-Light text-sm font-medium font-Manrope">
                    Mon Oct 7, 2024 11:30 am
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className=" top-10 bg-Button">
            <div className="w-full bg-[#FAD8D5] h-4 rounded-full overflow-hidden relative max-h-[22px]">
              <div className="bg-[#EC5C5C] rounded-full  h-full flex items-center justify-center text-white text-xs font-medium w-[40%]">
              <p className="absolute left-1/2 top-0 h-full  text-Heading text-xs font-medium "> 40% complete</p>
              </div> 
             
            </div>
          </div>
          <div className="test flex justify-between pt-[35px] pb-[22px]">
            <p className="text-[#FCC378] text-[22px] font-bold ">
              Goal activites:
            </p>
          </div>
          <div className="last flex flex-col gap-[28px]">
            <div className="firstrow flex justify-between ">
              <div className="leftportion flex gap-4 items-center">
                <div className="img&text flex  w-[60px] h-[60px]  border-[2.67px] border-[#F16A77] rounded-[50%] items-center justify-center">
                  <img src={walkpic} alt="" className="w-[25px] h-[25px]" />
                </div>
                <p className="text-[22px] font-bold font-Avenir">Walking</p>
              </div>
              <div className="rightside gap-[10px] flex items-center">
                <p className="text-lg text-Heading font-Manrope">
                  Daily walk:{" "}
                  <span className=" text-[#282828]">30 mins</span>
                </p>
                <p className="px-0.25 h-[17px] bg-[#282828]/15"></p>
                <HiDotsVertical />
                <div className="popup z-10 max-w-[144px] pl-[15px] pr-[17px] py-[16px] rounded-[13px] box-shadow shadow-[0px_0px_8px_0px_rgba(0,0,0,0.19)]">
                  <div className="firsticonrow flex gap-[10px] items-center">
                    <FaEdit /> <p>Edit</p>
                  </div>
                  <div className="firsticonrow flex gap-[10px] items-center">
                    <RiDeleteBin6Fill className="text-[#F16A77]" />{" "}
                    <p>Delete</p>
                  </div>
                  <div className="firsticonrow flex gap-[10px] items-center">
                    <IoMdAlarm className="text-[#FFC378]" />{" "}
                    <p className="text-[14px]">Set Reminder</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="firstrow flex justify-between ">
              <div className="leftportion flex gap-[10px] items-center">
                <div className="img&text flex gap-[10px] w-[60px] h-[60px]  border-[2.67px] border-[#F16A77] rounded-[50%] items-center justify-center">
                  <img src={cardicpic} alt="" className="w-[25px] h-[25px]" />
                </div>
                <p className="text-[22px] font-bold font-Avenir">Cardio</p>
              </div>
              <div className="rightside gap-[10px] flex items-center">
                <p className="text-lg text-Heading font-Manrope">
                  Daily walk:{" "}
                  <span className=" text-Dark">30 mins</span>
                </p>
                <p className="px-0.25 h-[17px] bg-[#282828]/15"></p>
                <HiDotsVertical />
              </div>
            </div>

            <div className="firstrow flex justify-between ">
              <div className="leftportion flex gap-[10px] items-center">
                <div className="img&text flex gap-[10px] w-[60px] h-[60px]  border-[2.67px] border-[#F16A77] rounded-[50%] items-center justify-center">
                  <img
                    src={waterglasspic}
                    alt=""
                    className="w-[25px] h-[25px]"
                  />
                </div>
                <p className="text-[22px] font-bold font-Avenir">Water intake</p>
              </div>
              <div className="rightside gap-[10px] flex items-center">
                <p className="text-lg text-Heading font-Manrope">
                  Daily walk:{" "}
                  <span className="text-[#282828]">30 mins</span>
                </p>
                <p className="px-0.25 h-[17px] bg-[#282828]/15"></p>
                <HiDotsVertical />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        width={464}
        
        open={isModalOpen}
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
              <CiCirclePlus className="w-[24px] h-[24px] text-[#FCC378] " />
              <FaEdit className="w-[24px] h-[24px]" />
            </p>
          </div>
          <div className="flex flex-col bg-[#FFF8F0] gap-[13px] rounded-[8px]">
            <p className="text-primary text-base font-Avenir">Headache</p>
            <div className="flex items-center justify-between">
              <div className="left flex flex-row items-center justify-between w-full">
                <div>
                  <p className="text-2xl font-Manrope font-bold">9:30 Am</p>
                </div>
                <div className="flex gap-[5px]">
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
    </>
  );
};

export default Goalsactivities;
