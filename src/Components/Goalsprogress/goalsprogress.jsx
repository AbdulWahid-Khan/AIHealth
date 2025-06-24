import React, { useState } from "react";
import { Button, DatePicker, Modal, TimePicker,Select } from "antd";
import { useNavigate } from "react-router-dom";
import navprofile from "./../../assets/images/Dshproimg.png";
import { FaBell } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import goalsimg from "./../../assets/images/Goalsprogress.png";
import { BiLeftArrowCircle } from "react-icons/bi";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { ImCalendar } from "react-icons/im";
import { IoCalendarOutline } from "react-icons/io5";
import { Title } from "chart.js";
import { IoCloseOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaEdit } from "react-icons/fa";
import { FaToggleOn } from "react-icons/fa";
import DataTable from "../shared/table";
import { BiSolidDownArrow } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
const Goalsprogress = () => {
  const navigate = useNavigate();
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



  const dataSourceAdvisory = [
    {
      adItem: "Headache Release", 
      alertIcon: "07 Days",
      recommendation: "Mon Oct 7, 2024 11:30 am",
      adEndDate: "Mon Oct 7, 2024 11:30 am",
      adAction:`true`
    },
    {
      adItem: "Headache Release",
      alertIcon: "07 Days",
      recommendation: "Mon Oct 7, 2024 11:30 am",
      adEndDate: "Mon Oct 7, 2024 11:30 am",
      adAction: "true",
    },
    {
      adItem: "Headache Release",
      alertIcon: "07 Days",
      recommendation: "Mon Oct 7, 2024 11:30 am",
      adEndDate: "Mon Oct 7, 2024 11:30 am",
      adAction: "true",
    },
    {
      adItem: "Headache Release",
      alertIcon: "07 Days",
      recommendation: "Mon Oct 7, 2024 11:30 am",
      adEndDate: "Mon Oct 7, 2024 11:30 am",
      adAction: "true",
    },
  ];
  const columnsAdvisory = [
    {
      title: <p className="text-Button ">Title</p>,
      dataIndex: "adItem",
      key: "adItem",
      render: (text, record) => (
        <>
          <p className="text-Dark ">{record?.adItem}</p>
        </>
      ),
    },
    {
      title: <p className="text-Button">Duration</p>, // "Duration",
      dataIndex: "alertIcon",
      key: "alertIcon",
      render: (text, record) => (
        <>
          <p className="text-Dark">{record?.alertIcon}</p>
        </>
      ),
    },
    {
      title: <p className="text-Button ">Started</p>,
      dataIndex: "recommendation",
      key: "recommendation",
      render: (text, record) => (
        <>
          <p className="text-Dark">{record?.recommendation}</p>
        </>
      ),
    },
    {
      title: <p className="text-Button">Ended</p>, //"Ended",
      dataIndex: "adEndDate",
      key: "adEndDate",
      render: (text, record) => (
        <>
          <p className="text-black">{record?.adEndDate}</p>
        </>
      ),
    },
    {
      title: <p className="text-Button text-center">Actions</p>, //"Actions",
      dataIndex: "adAction",
      key: "adAction",
      render: (text, record) => (
        <>
          <div className="text-Dark flex items-center gap-3  justify-center">
            {record?.adAction === "true" ? (
        <>
        
            <div className="border border-solid-[1px] border-Button p-[5px] rounded-md"> <IoIosInformationCircleOutline className="text-Button w-[17px] h-[17px] " /> </div>
            <div className="border border-solid-[1px] border-Button p-[5px] rounded-md"><RiDeleteBinLine  className="text-Heading w-[17px] h-[17px]"/></div> 
             </>
              
            ) : (
              <FaEdit className="text-Dark" alt="" />
              
            )}
            {/* {record?.adAction} */}
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-row justify-between px-[2%] max-w-[1920px] w-full  ">
        <div className="text ">
          <h1 className="h2  text-Button h-full">Goals</h1>
        </div>
        <div className="icons gap-4 flex flex-row items-center">
          <FaBell className=" text-2xl text-bold " />
          <img src={navprofile} alt="" className="w-[41px] h-[41px]" />
        </div>
      </div>
      <div className="pt-[10px] pl-[32px] pr-[27px] flex-row py-[12px] px-[47px] flex justify-between max-w-[1920px] w-full ">
        <div className="  flex flex-row max-w-[211px] gap-2 max-h-[49px] h-full justify-start   w-full">
          <div className=" image  border-[#FFC6AF] border-[2px] rounded-[6px] p-[6px] max-h-[49px] h-full max-w-[49px] w-full flex justify-center items-center ">
            <img src={goalsimg} alt="" className="w-[34px] h-[34px] " />
          </div>
          <div className="flex flex-col  justify-center items-between">
            <p className="text-[18px] text-[#282828] font-semibold w-full font-Avenir">
              {" "}
              Goals In Progress
            </p>
            <p className="text-[24px] text-[#FFC6AF] font-semibold font-Manrope">
              {" "}
              03
            </p>
          </div>
        </div>

        <div
          className=" bg-[#FCC378] cursor-pointer max-w-[158px] w-full py-[12px] text-white justify-center flex   gap-2 items-center rounded-[10px] "
          onClick={showModal}
        >
         
          
          <button className="w-full h-full cursor-pointer text-base font-Lato font-medium">+ Add goal</button>
        </div>
      </div>
      <div className="flex gap-4 px-[28px] justify-between ">
        <div className="goals relative max-w-[538px]  bg-red-400  shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px] ">
          <div className="lightyellow max-w-[538px] bg-[#FFF7F3] z-0 top-0 left-0 right-0 h-[85px] "></div>
          <div className="relative w-[538px] h-[90px] bg-white z-10">
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[269px] border-r-[269px] border-transparent border-b-[30px] border-b-[#FFFF] "></div>
          </div>
          <div className="absolute top-[10%] z-20 flex justify-center w-full pl-[12px] pr-[11px] ">
            <div className="above flex justify-between w-full">
              <div className="text flex flex-col ">
                <p className="text-Dark font-bold text-[22px] font-Avenir">
                  Headache release
                </p>
                <p className="text-[18px] text-[#FFC378] font-normal font-Manrope">
                  Durtion:{" "}
                  <span className="text-[#282828] text-[18px] font-normal font-Manrope">
                    07 Days
                  </span>
                </p>
              </div>
              <div className=" bg-[#FCC378] font-normal max-w-[112px] w-full max-h-[32px] h-full px-[10px] py-[4px] text-white justify-center flex   items-center rounded-[6px] text-[14px] ">
                <button
                  className=" h-full w-full font-Avenir cursor-pointer"
                  onClick={() => navigate("/goalsdeatails")}
                >
                  {" "}
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
          <div className="control absolute w-full bottom-[10%] z-20 pl-[12px] pr-[11px]">
            <div className="mt-6  top-10">
              <div className="relative flex justify-centerw-full bg-[#FAD8D5] h-4 rounded-full overflow-hidden">
                <div className="bg-[#EC5C5C] absolute rounded-full h-full flex items-center justify-center text-white text-xs font-medium w-[60%]">
                  <p className="font-Avenir absolute left-[50%]">
                    {" "}
                    60% complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals relative max-w-[538px]  bg-red-400  shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px] ">
          <div className="lightyellow max-w-[538px] bg-[#FFF7F3] z-0 top-0 left-0 right-0 h-[85px] "></div>
          <div className="relative w-[538px] h-[90px] bg-white z-10">
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[269px] border-r-[269px] border-transparent border-b-[30px] border-b-[#FFFF] "></div>
          </div>
          <div className="absolute top-[10%] z-20 flex justify-center w-full pl-[12px] pr-[11px] ">
            <div className="above flex justify-between w-full">
              <div className="text flex flex-col ">
                <p className="text-Dark font-bold text-[22px] font-Avenir">
                  Headache release
                </p>
                <p className="text-[18px] text-[#FFC378] font-normal font-Manrope">
                  Durtion:{" "}
                  <span className="text-[#282828] text-[18px] font-normal font-Manrope">
                    07 Days
                  </span>
                </p>
              </div>
              <div className=" bg-[#FCC378] font-normal max-w-[112px] w-full max-h-[32px] h-full px-[10px] py-[4px] text-white justify-center flex   items-center rounded-[6px] text-[14px] cursor-pointer">
                <button
                  className=" h-full w-full font-Avenir cursor-pointer"
                  onClick={() => navigate("/goalsdeatails")}
                >
                  {" "}
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
          <div className="control absolute w-full bottom-[10%] z-20 pl-[12px] pr-[11px]">
            <div className="mt-6  top-10">
              <div className="relative flex justify-centerw-full bg-[#FAD8D5] h-4 rounded-full overflow-hidden">
                <div className="bg-[#EC5C5C] absolute rounded-full h-full flex items-center justify-center text-white text-xs font-medium w-[60%]">
                  <p className="font-Avenir absolute left-[50%]">
                    {" "}
                    60% complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="goals relative max-w-[538px]  bg-red-400  shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px] ">
          <div className="lightyellow max-w-[538px] bg-[#FFF7F3] z-0 top-0 left-0 right-0 h-[85px] "></div>
          <div className="relative w-[538px] h-[90px] bg-white z-10">
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[269px] border-r-[269px] border-transparent border-b-[30px] border-b-[#FFFF] "></div>
          </div>
          <div className="absolute top-[10%] z-20 flex justify-center w-full pl-[12px] pr-[11px] ">
            <div className="above flex justify-between w-full">
              <div className="text flex flex-col ">
                <p className="text-Dark font-bold text-[22px] font-Avenir">
                  Headache release
                </p>
                <p className="text-[18px] text-[#FFC378] font-normal font-Manrope">
                  Durtion:{" "}
                  <span className="text-[#282828] text-[18px] font-normal font-Manrope">
                    07 Days
                  </span>
                </p>
              </div>
              <div className=" bg-[#FCC378] font-normal max-w-[112px] w-full max-h-[32px] h-full px-[10px] py-[4px] text-white justify-center flex   items-center rounded-[6px] text-[14px] cursor-pointer">
                <button
                  className=" h-full w-full font-Avenir cursor-pointer"
                  onClick={() => navigate("/goalsdeatails")}
                >
                  {" "}
                  Add Reminder
                </button>
              </div>
            </div>
          </div>
          <div className="control absolute w-full bottom-[10%] z-20 pl-[12px] pr-[11px]">
            <div className="mt-6  top-10">
              <div className="relative flex justify-centerw-full bg-[#FAD8D5] h-4 rounded-full overflow-hidden">
                <div className="bg-[#EC5C5C] absolute rounded-full h-full flex items-center justify-center text-white text-xs font-medium w-[60%]">
                  <p className="font-Avenir absolute left-[50%]">
                    {" "}
                    60% complete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slider flex justify-center items-center gap-1 py-[30px] text-[#FFC6AF]  ">
        <BiLeftArrowCircle className="w-[26px] h-[26px]  " />
        <div className="h-[2px] w-[10px] flex bg-[#FFC6AF]"></div>
        <div className="h-[2px] w-[3px] flex bg-[#FFC6AF]"></div>
        <div className="h-[2px] w-[3px] flex bg-[#FFC6AF]"></div>

        <MdOutlineArrowCircleRight className="w-[26px] h-[26px]  " />
      </div>
      <div className="tablesearch">
        <div className="flex-row py-[12px] px-[47px] flex justify-between">
          <div className="rightside flex flex-row items-center gap-[6px]">
            <div className="image  border-[#FFC6AF] border-[2px] rounded-[6px] p-[6px] ">
              <img src={goalsimg} alt="" />
            </div>
            <div className="flex-col">
              <p className="text-[18px] text-[#282828] font-semibold font-Avenir">
                {" "}
                Goals In Progress
              </p>
              <p className="text-[24px] text-[#FFC6AF] font-normal font-Manrope">
                {" "}
                07
              </p>
            </div>
          </div>

          <div className=" flex gap-[12px] items-center ">
            <div className="search max-w-[203px] flex flex-row   gap-2 bg-[#FFF4EF]  w-full py-[9px] px-[10px] justify-center items-center rounded-[10px] text-[text-[#FCC378] ">
              <label
                htmlFor="search"
                className="flex  items-center gap-2 pl-[10px]"
              >
                <IoIosSearch className="text-[#FFC378]" />
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Search goal"
                  className="outline-none text-[14px] font-normal"
                />
              </label>
            </div>
            <div className="calender bg-[#FCC378] text-white flex items-center p-[7px] w-[31px] h-[31px] rounded-[5px]">
              <ImCalendar className="w-[24px] h-[24px]" />
            </div>
          </div>
        </div>
      </div>

      {/* table part */}

      {/* <div className="abc">

      <DataTable columns={columns } data={data}>
      </DataTable>
</div> */}
      <div className="abc bg-white flex justify-between justify-self-between px-8">
        <DataTable columns={columnsAdvisory} dataSource={dataSourceAdvisory} />
      </div>
      {/* modal */}
    
      <Modal
        width={538}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
        footer={null}
        className="custommodal box-shadow shadow-[0px_0px_8px_0px_rgba(0,0,0,0.19)] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px]  rounded-[10px]  "
      >
        <div className="custom-modal goals relative     pb-[38px]">
          <p className="absolute text-[24px] font-normal text-[#282828] pt-[20px] pl-4 pb-[23px] ">
            Add Your <span className="text-[#F16A77] ">Goals</span>{" "}
          </p>
          <div className="lightyellow bg-[#FFF7F3] z-0 t left-0 right-0 h-[76px] w-full "></div>
          <div className="relative h-[0px] bg-white z-10">
            <div className="absolute -top-[30px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[269px] border-r-[269px] border-transparent border-b-[30px] border-b-[#FFFF] "></div>
          </div>
          <div className="inputfields pt-[23px] gap-2 px-4.5">
            <p className="text-base font-Manrope ">Goal Title</p>
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g: Health and Wellness Goals, Weight Loss Goals etc."
              className="py-[13px] pl-[10px] w-full bg-BgLight rounded-[8px] text-Manrope text-sm text-Dark-Light outline-none"
            />
          </div>
          <div className="inputfields pt-[23px] gap-2  px-4.5">
            <p className="text-base font-Manrope ">Estimated Time</p>
            <div className="flex gap-4 pt-2">
            <div className="flex flex-col gap-2 text-center w-[92px] h-[75px]">
              <label
                  htmlFor="hours"
                  className="w-[92px] h-[50px]  flex justify-center gap-2 items-center bg-[#FFF4EF]  rounded-[8px] text-[#718096]"
                >
                  <p>
                    <TimePicker format="h" suffixIcon={<BiSolidDownArrow />} style={{ background: "#FFF4EF" }}  className=" w-[92px] h-[50px] "/>
                  </p>
                </label>
                Hours
              </div>
              <div className="flex flex-col gap-2 text-center w-[92px] h-[75px]">
                <label
                  htmlFor="hours"
                  className="w-[92px] h-[50px]  flex justify-center gap-2 items-center bg-[#FFF4EF]  rounded-[8px] text-[#718096]"
                >
                  <p>
                    <TimePicker
                      format="m"
                      className=" w-[92px] h-[50px]  "
                      suffixIcon={<BiSolidDownArrow />}
                      style={{ background: "#FFF4EF" }}
                    />
                  </p>
                </label>
                <p>Minutes</p>
              </div>
              <div className="timerdiv flex flex-col gap-2 text-center w-[92px] h-[50px] bg-BgLight">
             
                <Select
                  defaultValue="am"
                  style={{ width: 92, height: 50 }}
                  className="timer rounded-[8px] bg-[#FFF4EF] text-[#0853c2]  "
                  
                >
                  <Option value="am"  style={{ width: 92, height: 50 ,background: "#FFF4EF"}} >AM</Option>
                  <Option value="pm"  style={{ width: 92, height: 50 ,background: "#FFF4EF"}}>PM</Option>
                </Select>
              
              </div>
            </div>
          </div>
          <div className="dates flex justify-between  px-4.5 w-full gap-5 pt-3">
            <div className="startingdate flex flex-col gap-2  w-full">
              <label htmlFor="start"> starting date </label>
              <DatePicker className="w-full bg-BgLight"  style={{ background: "#FFF4EF" }}/>
            </div>
            <div className="startingdate flex flex-col gap-2  w-full">
              <label htmlFor="start"> End date </label>
              <DatePicker style={{ background: "#FFF4EF" }}/>
            </div>
          </div>

          <div className="btn flex justify-between pt-[132px] px-4">
            <button className="max-w-[193px] w-full border-[1px] border-[#FDD9AB] bg-white text-[#282828] text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]">
              {" "}
              <p className="text-[14px] text-[#FCC378]">Cancel</p>
            </button>
            <button className="max-w-[193px] w-full  bg-[#FCC378]  text-[16px] font-[700] rounded-[8px] py-[10px] px-[25px]">
              {" "}
              <p className="text-[14px] text-white">Cancel</p>
            </button>
          </div>
        </div>
      </Modal>
    
    </>
  );
};

export default Goalsprogress;
