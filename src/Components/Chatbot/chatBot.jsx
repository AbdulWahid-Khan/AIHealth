import React from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import navprofile from "./../../assets/images/Dshproimg.png";
import { BsChatLeftText } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";

const ChatBot = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col max-w-[1920px] w-full  bg-white i">
        <div className="flex flex-row justify-between px-[2%] max-w-[1920px] w-full  ">
          <div className="text ">
            <h1 className="h2  text-Button h-full">Chat bot</h1>
          </div>
          <div className="icons gap-4 flex flex-row items-center">
            <FaBell className=" text-2xl text-bold" />
            <img src={navprofile} alt="" className="w-[41px] h-[41px]" />
          </div>
        </div>
        
          <div className=" flex flex-col bg-white  w-full items-center h-full justify-center ">
            <div className="flex flex-col  items-center ">
              <p className="h2 text-Heading">
                Talk <span className="text-Dark px-1">With</span>Agent{" "}
              </p>
              <p className="B3 text-Button font-semibold">
                Solve your queries with the help of our Ai chatbot
              </p>
              <div className="flex gap-[35px] pt-[35px] ">
                <div
                  className="left py-[50px] text-B3 flex flex-col bg-BgLight w-[250px] h-[250px] items-center justify-between px-3 text-center rounded-2xl cursor-pointer"
                  onClick={() => navigate("/aiworking")}
                >
                  <BsChatLeftText className=" w-[50px] h-[50px] text-Button py-2  border-[1px] border-Button rounded-[10px]" />
                  <h4 className="B3 text-Heading font-semibold flex">
                    Chat <p className="text-Dark px-1">with Assistant</p>{" "}
                  </h4>
                  <p className="B5 text-Dark-Light">
                    Have a live chat with our Agent to gather information about
                    your health{" "}
                  </p>
                </div>

                <div className="left py-[50px] text-B3 flex flex-col bg-BgLight w-[250px] h-[250px] items-center justify-between px-3 text-center rounded-2xl cursor-pointer" onClick={() => navigate("/animation")}>
                  <IoCallOutline className=" w-[50px] h-[50px] text-Button py-2  border-[1px] border-Button rounded-[10px]" />
                  <h4 className="B3 text-Heading font-semibold flex">
                    Call<p className="text-Dark px-1">with Assistant</p>{" "}
                  </h4>
                  <p className="B5 text-Dark-Light">
                    Have a live chat with our Agent to gather information about
                    your health{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
 
      </div>
    </>
  );
};

export default ChatBot;
