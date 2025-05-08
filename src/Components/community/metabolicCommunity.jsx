import React from "react";
import { useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import navprofile from "./../../assets/images/Dshproimg.png";
import Button from "../shared/Button";
import healthcare from "./../../assets/images/healthcareimg.png";
import { IoSearch } from "react-icons/io5";
import nutritionimg from "./../../assets/images/Nutritonimg.png";
import fitness from "./../../assets/images/Fitness.png";
import wellness from "./../../assets/images/Wellness.png";
import mentalhealth from "./../../assets/images/MentalHealth.png";
import { FaRegBell } from "react-icons/fa";
const MetabolicCommunity = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      title: "HealthCare",
      members: "576 members",
      image: healthcare,
      path:"/healthcare",
    
      
    },
    {
      title: "Nutrition",
      members: "2.5k members ",
      image: nutritionimg,
      path:"/settings",
    },
    {
      title: "Fitness",
      members: "820 members",
      image: fitness,
    },
    {
      title: "Wellness",
      members: "686 members",
      image: wellness,
    },
    {
      title: "Mental Health",
      members: "3.21k members",
      image: mentalhealth,
    },
    {
      title: "Fitness",
      members: "820 members",
      image: fitness,
    },
    {
      title: "HealthCare",
      members: "576 members",
      image: healthcare,
    },
    {
      title: "Nutrition",
      members: "2.5k members ",
      image: nutritionimg,
    },

    {
      title: "Wellness",
      members: "686 members",
      image: wellness,
    },
    {
      title: "Mental Health",
      members: "3.21k members",
      image: mentalhealth,
    },
  ];

  return (
    <>

    <div className="control max-w-[1920px] w-full mx-auto bg-white ">
      <nav>
        
        <div className="flex flex-row  max-h-[61px] h-full justify-end pt-[10px] pl-[32px] pr-[27px] max-w-[1920px] w-full  ">
                  
                  <div className="max-w-[114px] h-full w-full gap-3 p-[10px] flex flex-row items-center rounded-[30px] bg-white shadow-[0_35px_35px_rgba(0,0,0,0.08)]">
                    <FaRegBell className=" w-[24px] h-[24px]" />
                    <img src={navprofile} alt="" className="w-[41px] h-[41px]" />
                  </div>
                </div>
      </nav>

      <div className=" pt-[12px] flex flex-col sm:flex-row justify-self-center justify-between px-[10px] max-w-[1920px] w-full ">
        <div className="pt-[20px] flex justify-between w-full pl-[32px] pr-[20px] ">
        <p className="  lg:text-H2 md:text-[24px] text-[18px] font-medium text-Heading font-Manrope">
          Metabolic <span className="text-Dark">Community</span>{" "}
        </p>
        <div className=" flex gap-2 items-center justify-between bg-[#FFF4EF] max-w-[400px] w-full px-[15px] py-[10px] rounded-[4px]">
          <input type="search" placeholder="Search Community " className="text-Dark-Light text-[12px] font-Manrope w-full sm:py-[4px] outline-none" />
          <IoSearch className="text-[#FCC378] max-[20px] max-[20px]" />
        </div>
        </div>
      </div>
     
 <div className="control pt-[50px] overflow-hidden grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))]  max-w-[1920px] w-full gap-[15px] pl-[20px]   ">
 {cardData.map((card, index) => (
      <div className=" relative w-[210px] h-[211px] border-0 border-b-[#FFC6AF] border-b-[3px] rounded-[4px]  flex flex-row items-center justify-center  overflow-hidden">
        <div className=" absolute top-0 h-[92px] w-full bg-[#FFF4EF] z-0  "></div>
        <div className="bottom w-[270px] overflow-hidden h-[140px] bg-white z-10 rounded-t-[80%] absolute bottom-[0%]"></div>
        <img
          src={card.image}
          alt=""
          className="w-[82px] h-[82px]  z-20 bg-white absolute  top-[20px] left-[63px] rounded-[50%]  object-cover"
        />
        <div className="text absolute left-[60px] top-[110px] z-20 flex flex-col items-center justify-center ">
        
          <p className="text-Dark text-B4 font-medium   "> {card.title}</p>
          <p className="text-Dark text-[14px] font-normal opcaity-30">
          {card.members}
          </p>
        </div>
        <Button name="Join" classname="flex items-center  justify-center text-center absolute bottom-[16px] left-[42px] z-20 font-Avenir" onClick={() =>navigate(card.path)} />
          
      </div>
      ))
    }
   
     </div> 
     </div>
    </>
  );
};

export default MetabolicCommunity;
