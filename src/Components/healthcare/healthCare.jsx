import React, { useState } from "react";

import { MdOutlineArrowCircleLeft } from "react-icons/md";
import healthcareimg from "./../../assets/images/healthcareimg.png";
import jackchat from "./../../assets/images/jackpofile.png";
import ladypic from "./../../assets/images/femalesidepic.png";
import bottomimg from "./../../assets/images/bottomimage.png";
import middleimg from "./../../assets/images/middleimage.png";
import topimg from "./../../assets/images/topimage.png";
import anaspic from "./../../assets/images/Anasimage.png";
import henrypic from "./../../assets/images/Henryimage.png";
import zorropic from "./../../assets/images/Zorroimage.png";
import jamespic from "./../../assets/images/jamespic.png";
import { BsSendFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";


import { Button, Modal } from "antd";
import { IoIosSearch } from "react-icons/io";


const HealthCare = () => {
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
  return (
    <>
      <div className="image relative flex py-[50px] pl-[50px] bg-[#FFF4EF] gap-[18px] min-h-screen max-w-[1920px] w-full ">
        <MdOutlineArrowCircleLeft className="text-[#FCC378] w-[26px] h-[26px] absolute top-[36px] left-[30px] cursor-pointer " onClick={()=>navigate("/community")}/>
        <div className="innermain flex max-w-[1920px] w-full justify-between  gap-[3%] px-[1%] ">
          {" "}
          <div className="icon flex flex-col  justify-between bg-white rounded-t-[20px] h-full w-full   p-[24px]  shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px]">
            <div className="divided  ">
              <div className="main flex flex-row items-start  py-[20px]   ">
                <div className="imagesandtext flex flex-row items-center gap-[14px] ">
                  <img
                    src={healthcareimg}
                    alt=""
                    className="w-[40px] h-[40px] rounded-[10px]"
                  />
                  <p className="text-2xl text-Dark font-Manrope">HealthCare</p>
                </div>
              </div>
              <div className="hr flex flex-row  w-full  bg-[rgba(0,0,0,0.3)]  ">
                {/* horizontal line div so don't delete it */}
              </div>
              <div className="chatbox flex flex-col  py-[24px]  gap-[26px] ">
                <div className="working flex flex-row justify-self-start ">
                  <div className="jackchat gap-[14px] flex flex-row">
                    <img src={jackchat} alt="" />
                    <div className="chattext   px-[16px] py-[11.5px] font-normal bg-[#FFF4EF] rounded-[12px]">
                      <p className="text-Dark text-sm font-Manrope">Did you achieve your daily goal today?</p>
                    </div>
                  </div>
                </div>
                <div className="working flex  justify-end">
                  <div className="femalechat gap-[14px] flex flex-row">
                    <div className="chatreply flex flex-row gap-[14px]">
                      <div className="chattext  px-[16px] py-[11.5px]  bg-[#FFF4EF] rounded-[12px]">
                        <p className="text-Dark text-sm font-Manrope ">how are you ?</p>
                      </div>
                      <img src={ladypic} alt="" />
                    </div>
                  </div>
                </div>
                <div className="working ">
                  <div className="jackchat gap-[14px] flex flex-row">
                    <div className="image">
                      <img src={jackchat} alt="" />
                    </div>
                    <div className="chattext flex flex-col gap-[10px]">
                      <p className=" text-Dark text-sm font-Manrope px-[16px] py-[11.5px] bg-[#FFF4EF] rounded-[12px]">
                        Wow, great! Did you want to share your achievement with
                        your friends and family on your social media account?
                      </p>
                      <div className="chattext gap-[10px] max-w-fit ">
                        <p className=" text-Dark text-sm font-Manrope px-[16px] py-[11.5px]  bg-[#FFF4EF] rounded-[12px] w-full ">
                          I'll be there in 2 mins ⏰
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="working flex  justify-end">
                  <div className="femalechat gap-[14px] flex flex-row">
                    <div className="chatreply flex flex-row gap-[14px]">
                      <div className="chattext  px-[16px] py-[11.5px] text-Dark text-sm font-Manrope bg-[#FFF4EF] rounded-[12px]">
                        <p className="">woohoooo</p>
                      </div>
                      <img src={ladypic} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="last  shadow-[0_2px_8px_0px_rgba(0,0,0,0.10)]  flex justify-between px-[20px] py-[10px] rounded-[12px] Ww-full">
              <input
                type="text"
                placeholder="Type a message"
                className="outline-none w-full "
              />
              <BsSendFill className="text-[#FCC378] cursor-pointer" />
            </div>
          </div>
          {/* modalpart or leftbar side*/}
          <div
            className="rightside bg-white w-[210px]  pt-[10px]  shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[10px] "
           
          >
            <div className="head px-[9px]">
              <div className="imageouter relative bg-[#FFF4EF] w-[140px] h-[40px] py-[3px]  pl-[7px] pr-[11px] items-center  flex justify-between rounded-[30px] cursor-pointer"  onClick={showModal}>
                <div className="images w-[66px] h-[34px] relative flex  ">
                  <img
                    src={bottomimg}
                    alt=""
                    className="absolute left-0  w-[34px] h-[34px]"
                  />
                  <img
                    src={middleimg}
                    alt=""
                    className="absolute   left-[17px] w-[34px] h-[34px]"
                  />
                  <img
                    src={topimg}
                    alt=""
                    className=" absolute right-0 w-[34px] h-[34px]"
                  />
                </div>
                <div className=" opacity-30 font-normal ">
                  <p className="text-Dark text-sm font-Manrope">3.21 k</p>
                </div>
              </div>
            </div>
            <div className=" py-[10px]">
              {/* horizontal line div so don't delete it */}
              <span className="flex flex-row   w-full  bg-[rgba(0,0,0,0.3)] py-[1px]" />
            </div>

            <div className="heading felx text-start px-[14px] pt-[20px]">
              <p className="text-Dark text-sm font-Manrope font-[500]  ">
                Active Members
              </p>
            </div>
            <div className="chat flex flex-col pt-[13px] gap-[6px] pl-[14px] pr-[13px]">
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={anaspic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex font-semibold text-sm font-Avenir text-Dark ">
                      Anas
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <div className="flex w-full items-end  pt-[8px] justify-center">
                      <p className="flex text-sm text-Dark-Light font-[400]  text-end">
                        Online
                      </p>
                    </div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-[#F16A77]"></div>
                  </div>
                </div>
              </div>

              <div className="activemember flex  gap-[12px] items-center ">
                <div className="image  ">
                  <img src={henrypic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex font-semibold text-sm font-Avenir text-Dark  ">
                      Henry
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <div className="flex w-full items-end  pt-[8px] justify-center">
                      <p className="flex text-sm text-Dark-Light font-[400] text-end">
                        Online
                      </p>
                    </div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-[#F16A77]"></div>
                  </div>
                </div>
              </div>

              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={zorropic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex font-semibold text-sm font-Avenir text-Dark ">
                      Zorro
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <div className="flex w-full items-end  pt-[8px] justify-center">
                      <p className="flex text-sm text-Dark-Light font-[400] text-end">
                        Online
                      </p>
                    </div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-[#F16A77]"></div>
                  </div>
                </div>
              </div>

              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={jamespic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex font-semibold text-sm font-Avenir text-Dark] ">
                      Jame
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <div className="flex w-full items-end  pt-[8px] justify-center">
                      <p className="flex text-sm text-Dark-Light font-[400] text-end">
                        Online
                      </p>
                    </div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-[#F16A77]"></div>
                  </div>
                </div>
              </div>

              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={anaspic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex font-semibold text-sm font-Avenir text-Dark ">
                      Anas
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <div className="flex w-full items-end  pt-[8px] justify-center">
                      <p className="flex text-sm text-Dark-Light font-[400] text-end">
                        Online
                      </p>
                    </div>
                    <div className=" w-[6px] h-[6px] rounded-full bg-[#F16A77]"></div>
                  </div>
                </div>
              </div>

              <div className=" py-[10px]">
                {/* horizontal line div so don't delete it */}
                <span className="flex flex-row   w-full  bg-[#FFCDB9] py-[1px]" />
              </div>
            </div>

            <div className="heading felx text-start px-[14px] pt-[20px]">
              <p className="text-sm font-medium text-Dark  ">
                Top Contributors
              </p>
            </div>

            <div className="chat flex flex-col pt-[13px] gap-[6px] pl-[14px] pr-[13px]">
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={anaspic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-sm text-dark font-semibold font-Avenir  ">
                      Anas
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-sm font-normal text-Dark-Light font-Manrope">
                      {" "}
                      (30 msgs){" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={henrypic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-sm text-dark font-semibold font-Avenir ">
                      Henry
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-sm font-normal text-Dark-Light font-Manrope">
                      {" "}
                      (20 msgs){" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={zorropic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-[14px] font-[600] text-[#282828] ">
                      Zorro
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-sm font-normal text-Dark-Light font-Manrope">
                      {" "}
                      (14 msgs){" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        title={
          <p className="text-2xl text-dark ">
            All <span className=" text-Heading">Members</span>{" "}
          </p>
        }
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        centered
        footer={null}
        className="shadow shadow-[#FFC6AF] boder-[#FFC6AF] border-b-[#FFC6AF] border-b-[10px] rounded-[16px]"
      >
        <div className="modal-body pt-[28px] gap-[31px] pb-[200px]">
          <div className="search bg-[#FFF4EF] pl-[15px] pt-[14px]  pb-[11px] rounded-2xl px-[15px] flex">
            <label
              htmlFor="search "
              className="flex items-center gap-[5px] font-normal text-lg text-shadow-Dark-Light font-Manrope"
            >
              <IoIosSearch className="text-Dark-Light w-[20px] h-[20px] " />
              <input type="search" placeholder="Find Member" />
            </label>
          </div>
          <div className="member">
            <div className="chat flex flex-col pt-[13px] gap-[6px] pl-[14px] pr-[13px]">
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={anaspic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px] pt-[31px]  ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-lg font-semibold text-Dark  font-Avenir">
                      Anas
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-base text-Dark font-Manrope opacity-60">
                      {" "}
                      Tag{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={henrypic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-lg font-semibold text-Dark  font-Avenir ">
                      Henry
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-base text-Dark font-Manrope opacity-60">
                      {" "}
                      Tag{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={zorropic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-lg font-semibold text-Dark  font-Avenir ">
                      Zorro
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-base text-Dark font-Manrope opacity-60">
                      {" "}
                      Tag{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="activemember flex justify- gap-[12px] items-center ">
                <div className="image ">
                  <img src={jamespic} alt="" className=" rounded-[8px] " />
                </div>
                <div className="remaining flex w-full items-center gap-[5px]   ">
                  <div className="name flex items-start text-start">
                    <p className=" flex text-lg font-semibold text-Dark  font-Avenir ">
                      Zorro
                    </p>
                  </div>
                  <div className="specs flex w-full justify-end items-center  ">
                    <p className="text-base text-Dark font-Manrope opacity-60">
                      {" "}
                      Tag{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default HealthCare;
