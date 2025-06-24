import React from "react";
import { useState} from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5";
import { CiCirclePlus } from "react-icons/ci";
import { FaToggleOn } from "react-icons/fa";
import { IoCalendarOutline } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import MDICON from "./../../assets/images/Mdicon.png";
import veritcal from "../../assets/images/leftvertical.png";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import jackimg from "./../../assets/images/Jack.png";
import jackchat from "./../../assets/images/jackpofile.png";
import bgicon from "./../../assets/images/bgicon.png";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";
import { BsPlus } from "react-icons/bs";
import { FaPeopleGroup } from "react-icons/fa6";
import { MdOutlineStickyNote2 } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import navprofile from "./../../assets/images/Dshproimg.png";
import { BsSendFill } from "react-icons/bs";
import  waiticon from "./../../assets/images/waiticon.svg";
import { IoSearch } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { HiDotsHorizontal } from "react-icons/hi";


import { FaBell } from "react-icons/fa";
import { GiAlarmClock } from "react-icons/gi";
import { Button, Divider, Modal, Select } from "antd";


const Aiworking = () => {
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
    <div className="relative mainouter flex flex-col max-w-[1920px] w-full  ">
      < FaRegArrowAltCircleLeft className="absoulte text-[#FCC378] absolute  w-[28px] h-[28px] top-[30px] left-[30px] cursor-pointer" onClick={()=>navigate("/chatbot")}/>
     
      
        <div className="flex min-h-screen flex-row pt-[83px] pb-5 gap-[20px] pl-[100px] max-w-[1920px]  w-full pr-[20px] justify-between">
       {/* leftSidebar */}
      <div className="main  w-[210px] bg-white   flex flex-col  justify-start items-end shadow-[0_0px_04px_rgba(0,0,0,0.25)]  boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]  " >
        <div className="container w-[210px] flex flex-col items-center ">
          <h1 className="text-Dark text-bold text-[25px] font-Lato pt-[23px] px-[19px] w-full pb-[18px]">
            AI health coach{" "}
          </h1>
          <button className="text-Button  font-semibold max-w-[183px] w-full border-[1px] border-Button p-[10px] font-Lato  bg-[#FFEEE7] bg-opacity-20 rounded-[14px]">
            Ask Question
          </button>
        </div>
       

        <Divider className=" bg-Dark-Light h-[1px] w-full  " />
        <div className=" historymain   w-[210px]  pl-3 pr-2 ">
         
      
          <div className=" felx   py-2 flex flex-row justify-between items-center w-full">
           
            <div className="head flex items-center gap-2 ">
              <img src={MDICON} alt="" className="w-[23px] h-[29px]" />
              <h4 className="text-Dark text-5 font-Avenir">History</h4>
            </div>
            <MdKeyboardDoubleArrowRight className="text-[#FCC378] cursor-pointer" onClick={() => showModal("modal2")}/>
          </div>
        </div>

        <div className="buttonouter flex  w-full px-[17px] gap-[10px] justify-between ">
          <img src={veritcal} alt="" className="justify-self-start pb-4" />
          <div className=" justify-between w-[160px] pt-1  flex flex-col  bg-dark bg-opacity-30 gap-[6px]">
            <button className="text-[12px] p-[10px] rounded-[4px] text-Dark w-[160px] h-[34px] bg-[#F7F7F7] font-Lato">
              Tell me about services y...
            </button>
            <button className="text-[12px] p-[10px] rounded-[4px] text-Dark w-[160px] h-[34px] bg-[#F7F7F7] font-Lato ">
              Tell me about services y...
            </button>
            <button className="text-[12px] p-[10px] rounded-[4px] text-Dark w-[160px] h-[34px] bg-[#F7F7F7] font-Lato">
              Tell me about services y...
            </button>
          </div>
        </div>
      </div>

      {/* mainchatportion */}
<div className="maincenter">
      <div className="flex flex-col    justify-between h-full px-[10px] pb-[40px]  max-w-[1660px] w-full  shadow-[0_0px_04px_rgba(0,0,0,0.25)]   border-b-[#FFC6AF] border-b-[10px] rounded-[10px]   ">
       <div className="main flex flex-col w-full h-full ">
        <div className="img flex flex-row justify-center mt-[50px]">
          <img src={jackimg} alt="" className="   py-[2%] " />
        </div>

        <div className="chat flex flex-row justify-between gap-[16px] max-w-[1296px] w-full ">
          <div className="img">
            <img src={jackchat} alt="" />
          </div>
          <div className="textchat flex flex-col bg-BgLight w-full px-[16px] py-[8px] gap-[10px] rounded-[12px]">
            <p className="text-[14px] font-[400px] font-Avenir  w-full">
            Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select 
            your persona then it can’t be changed.
            </p>
            <div className="chatbtns bg-BgLight flex gap-1 max-w-[140px]">
              <button className="font-Avenir w-[62px] h-[28px] bg-[#FCC378] text-[14px] font-normal rounded-[32px]">
                Suzy
              </button>
              <button className="font-Avenir  w-[62px] h-[28px] bg-Button text-[14px] font-normal rounded-[32px]">
                Jack
              </button>
            </div>
          </div>
        </div>

        <div
          className="flex flex-row h-[300px] bg-no-repeat bg-center bg-contain justify-center items-center opacity-15 "
          style={{ backgroundImage: `url(${bgicon}) ` }}
        >
      

        </div>
        </div>
        
        <div className="   shadow-[0_2px_8px_0px_rgba(0,0,0,0.10)]  flex justify-between px-[20px] py-[10px] rounded-[12px]">
        <input type="text" placeholder="Type a message" className="outline-none " />
      <BsSendFill className="text-[#FCC378]"/>
      </div>
        
        
        
        
       
      </div>
      </div>
      {/* RightSidebar */}

      <div className="Rightsidebar   px-[8px] bg-white flex flex-col max-w-[324px] w-full items-center  gap-[10px] shadow-[0_0px_04px_rgba(0,0,0,0.25)]   boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
        <div className="one flex max-w-[276px] flex-row items-center  justify-between w-full py-[28px] px-[24px]  ">
          <h1 className="text-Dark text-[20px] font-normal font-Avenir">
            Memorizing
          </h1>
          <CiCircleInfo className="text-[#FCC378] h-[24px] w-[24px]" />
        </div>
       
        <div className="line ">
          <hr className="  flex w-full  border-t-2 border-[#282828]  opacity-[30%]  pb-0" />
        </div>
        <div className="max-w-[274px] second flex flex-row py-[4%] justify-between w-full items-center ">
        
          <IoIosArrowUp className="w-[15px] h-[15px] text-[#FCC378]" />
          <div className="text flex w-[195px] ">
            <GoPersonFill className="w-[20px] h-[20px]" />
            <p className="text-[14px] font-bold text-Dark font-Avenir">Accountability Buddy</p>
          </div>
          <div className=" max-w-[59px]   w-full bg-[#FCC378] flex items-center justify-center  gap-[4px] rounded-[4px]">
          
          <button className=" text-[12px] font-normal font-Manrope cursor-pointer " onClick={() => showModal("modal1")}>Add</button>
          <BsPlus className="text-white" />
         
        </div>
        </div>
        <div className="textdetails font-Avenir flex flex-col gap-1 max-w-[270px] w-full  px-3 py-[10px]   border-[1px] border-[#EAEAEA]  "
       >
          <p className="text-[12px] font-normal ">
            Name: <span className="font-bold text-[14px]">Joseph</span>
          </p>
          <p className="text-[12px] font-normal ">
            phone no: <span className="font-bold text-[14px]">+123456789</span>
          </p>
          <p className="text-[12px] font-normal ">
            Email: <span className="font-bold text-[14px]">@gmail.com</span>
          </p>
        </div>

        <div className="  communitybox max-w-[274px] w-full border-y-[1px]  py-[2%] border-[#282828]/30
        ">

            
          <div className="firstrow gap-[10px] flex items-center py-[10px] px-[1%]">
            <IoIosArrowUp className="w-[15px] h-[15px] text-[#FCC378]" />
            <div className="center flex justify-between gap-[10px] items-center">
              <FaPeopleGroup className="" />
              <p className="font-bold text-[14px] font-Avenir"> Community </p>
            </div>
          </div>
          <div className="  max-w-[274px] bg-Black">

          {/* max-w-[270px] w-full py-[12px] pl-[10px] pr-[8px] flex max-h-[34px] justify-between bg-[#FFF4EF] items-center rounded-[4px] */}
            
            {/* <input
              className=" text-Dark-Light outline-none items-center text-[12px] font-Avenir"
              placeholder=" Choose a Community"
              
            />  */}
            <Select name="community" id="community" placeholder=" Choose a Community" className="custom-select-dropdown text-Dark-Light  items-center text-[12px] font-Avenir w-full  h-full px-[16px] py-[14px] bg-[#FFF4EF] border-none shadow-none  outline-none " 
           
            suffixIcon={<IoIosArrowDown className="w-[44px] h-[24px] text-Dark "/>}> 
            <option className="flex">
            <div className="flex  bg-BgLight items-center w-full">             
               < IoSearch className="pl-3 h-[24px] w-[24px] gap-2 text-Button"/>
              <input type="search" placeholder=" Search" />
              
              </div>

              </option>
              <option value="val1">HTML</option>
              <option value="val2">CSS</option>
              <option value="val3">JS</option>
              <option value="val4">React</option>
              <option value="val5">Angular</option>
             
            </Select>
             
           
          </div>
        </div>

        <div className="   notes flex flex-row  justify-between max-w-[274px] w-full items-center ">
          <div className="text flex gap-2 ">
            <IoIosArrowUp className="w-[15px] h-[15px]" />

            <MdOutlineStickyNote2 className="w-[20px] h-[20px]" />
            <p className="text-[14] font-bold font-Avenir">Notes</p>
          </div>
          <div className="btn&+ max-w-[59px]   w-full bg-[#FCC378] flex items-center justify-center  gap-[4px] rounded-[4px]">
          
            <button className=" text-[12px] font-Manrope ">Add</button>
            <BsPlus className="text-white" />
           
          </div>
        </div>
        <div className=" max-w-[270px] w-full max-h-[34px] h-full flex items-center  bg-[#FFF4EF] rounded-[4px] p-[10px]   ">
          
            <input
              type="text"
              name="notes"
              id=""
              placeholder=" Type here "
              className="text-[12px] text-Dark-Light  outline-none font-Avenir "
            />
        
        </div>
        <div className="max-w-[274px] w-full">
          {" "}
          <label htmlFor="enter text-[12px] font-[400px] flex text-start py-2 w-full"> 
            Press 
            <button className=" text-[#FCC378] px-1 py-0.5 rounded-sm bg-[#FFF6EB]">  Enter </button> to
            add Notes
          </label>
          </div>
        <div className="p-[10px] max-w-[270px] w-full flex max-h-[34px] h-full justify-self-center justify-between bg-[#FFF4EF] items-center rounded-[4px]">
          <p className="text-[12px] font-[400] font-Avenir ">Lorem ipsum dolor sit amet consectetur.</p>
          <RxCross2 className="text-[#FCC378] w-[12px] h-[12px]" />
        </div>
       
      </div>

      </div>
     
      </div>
<div className="buddy-modal">
      <Modal
        title={
          <p className="text-[24px] font-[400] text-[#fa1616] ">
            Buddy Information {" "}
          </p>
        }
        
        open={activeModal === "modal1"}
       footer={null}
        centered
        width={394}
        onCancel={handleCancel}
        onOk={handleOk}
          closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
        className="shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[16px]"
      >
        <div className="modal-body flex flex-col gap-[18px] ">
          <div className="search">
            <p className="text-[14px] font-normal ">Name</p>
            <label
              htmlFor="search "
              className="items-center gap-[5px] font-normal text-[18px] text-[#282828]/30 bg-[#FFF4EF] py-[12px] rounded-[8px] px-[16px] flex"
            >
              
              <input type="search" placeholder="e.g: Josh, Elizabeth etc." className="outline-none"/>
            </label>
          </div>


          <div className="search ">
            <p className="text-[14px] font-normal ">Phone No</p>
            <label
              htmlFor="search "
              className="outline-none items-center gap-[5px] font-normal text-[18px] text-[#282828]/30 bg-[#FFF4EF] py-[12px] rounded-[8px] px-[16px] flex"
            >
             <Select className=" focus !bg-[#FFF4EF] !text-black !border-none !outline-none focus:!shadow-none focus:!ring-0"
             defaultValue={+1}
             suffixIcon={<IoIosArrowDown className="text-black"/>}
             >
              <option value="" className="text-black">+1</option>
              <option value=""  className="text-black">+92</option>
              <option value=""  className="text-black">+93</option>
             </Select>
             <div className="bg-black border h-[28px] px-[0.25px]"></div> 
             
           <span className="px-[2px] bg-green-700 h-full w-full"></span>
              <input type="search" placeholder="Enter Phone Number"  className="outline-none"/>
            </label>
           
          </div>
          
          <div className="search">
            <p className="text-[14px] font-normal ">Email</p>
            <label
              htmlFor="search "
              className="items-center gap-[5px] font-normal text-[18px] text-[#282828]/30 bg-[#FFF4EF] py-[12px] rounded-[8px] px-[16px] flex"
            >
              
              <input type="search" placeholder="josh@gmail.com"  className="outline-none"/>
            </label>
          </div>
          <div className="search flex gap-[20px]">
            
              
            <button className="border border-[#FCC378] w-full py-[11px]  text-[#FCC378] text-[18px] max-h-[48px] h-full rounded-[8px] flex justify-center items-center"> Cancel </button>
            <button className=" bg-[#FCC378] py-[11px] w-full  text-[18px] rounded-[8px] max-h-[48px] h-full flex justify-center items-center"> Save </button>
          </div>
         
        </div>
      </Modal>
      </div>
      <div className="history-modal">
      <Modal
        title={
          <>
          <div className="flex justify-between items-center pt-2 pl-[38px] pr-[4px]">
          <p className=" text-[32px]  text-Dark font-Avenir flex gap-[10px] items-center">
<img src={ waiticon } alt="" className="w-[18px] h-[30px]" />
           History {" "}
          </p>
          <label htmlFor="search " className="items-center gap-4 font-normal flex max-w-[321px] max-h-[40px] h-full w-full  bg-BgLight rounded-[4px] p-2.5 ">
            <IoSearch className="text-Button text-[20px] W-[20px] h-[20px]" />
            <input type="search" placeholder="Search items" className=" text-xs outline-none text-Dark-Light w-full" />
          </label>
          </div>
          </>
        }
        
        open={activeModal === "modal2"}
       footer={null}
         closeIcon={<IoCloseOutline className="text-[#FFC378] text-[20px]" />}
        centered
        width={762}
        onCancel={handleCancel}
        onOk={handleOk}
        className="shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[16px]"
      >
        <Divider  className="w-full h-[2px]  bg-Dark-Light "/>
        <div className="modal-body flex flex-col gap-[15px] ">
          
          <div className="textouter flex flex-col pl-4 pr-1 w-full">
          <p className="text-lg font-bold text-Dark font-Avenir ">Tell me about services you provide</p>
         <p className="text-sm t text-[#838383] font-Avenir flex w-full pt-[9px]">Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
        <div className="lastlinecontrol flex justify-between pr-2 pt-[17px]">
         <label htmlFor="" className=" flex flex-row items-center gap-[10px]">
         <LuClock className="w-[11px] h-[11px] text-Dark-Light"/>
         <p className="text-xs text-Dark-Light">Just now</p>
         </label>
         <HiDotsHorizontal />
         </div>
        
          </div>
          
          <div className="textouter flex flex-col pl-4 pr-1 w-full">
          <p className="text-lg font-bold text-Dark font-Avenir ">Tell me about services you provide</p>
         <p className="text-sm t text-[#838383] font-Avenir flex w-full pt-[9px]">Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
        <div className="lastlinecontrol flex justify-between pr-2 pt-[17px]">
         <label htmlFor="" className=" flex flex-row items-center gap-[10px]">
         <LuClock className="w-[11px] h-[11px] text-Dark-Light"/>
         <p className="text-xs text-Dark-Light">Just now</p>
         </label>
         <HiDotsHorizontal />
         </div>
        
          </div>

          <div className="textouter flex flex-col pl-4 pr-1 w-full">
          <p className="text-lg font-bold text-Dark font-Avenir ">Tell me about services you provide</p>
         <p className="text-sm t text-[#838383] font-Avenir flex w-full pt-[9px]">Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
        <div className="lastlinecontrol flex justify-between pr-2 pt-[17px]">
         <label htmlFor="" className=" flex flex-row items-center gap-[10px]">
         <LuClock className="w-[11px] h-[11px] text-Dark-Light"/>
         <p className="text-xs text-Dark-Light">Just now</p>
         </label>
         <HiDotsHorizontal />
         </div>
        
          </div>
          <div className="textouter flex flex-col pl-4 pr-1 w-full">
          <p className="text-lg font-bold text-Dark font-Avenir ">Tell me about services you provide</p>
         <p className="text-sm t text-[#838383] font-Avenir flex w-full pt-[9px]">Hello! I am your AI Health Coach. Please choose one persona either Suzy or Jack. Once you select your persona then it can’t be changed.</p>
        <div className="lastlinecontrol flex justify-between pr-2 pt-[17px]">
         <label htmlFor="" className=" flex flex-row items-center gap-[10px]">
         <LuClock className="w-[11px] h-[11px] text-Dark-Light"/>
         <p className="text-xs text-Dark-Light">Just now</p>
         </label>
         <HiDotsHorizontal />
         </div>
        
          </div>
        
        </div>
      </Modal>

      </div>


    </>
  );
};

export default Aiworking;
