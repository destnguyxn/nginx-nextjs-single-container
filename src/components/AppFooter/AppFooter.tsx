/* eslint-disable prettier/prettier */
import { useMantineColorScheme } from "@mantine/core";
import Image from "next/image";
import React from "react";

import footerImg2 from "@/public/assets/images/footer_neople.jpg";
import footerImg from "@/public/assets/images/footer_nexon.png";

const AppFooter = () => {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <footer
      className="w-full bg-[#080A0F]  "
      style={{
        backgroundColor: colorScheme === "dark" ? "#141517" : "#F8F9FA",
      }}
    >
     
      <div className="center  flex min-h-[120px] items-center justify-center">
   
        <span className="py-[1px] px-[2px] text-[12px] font-light " >
          
          © NEXON Korea Corporation All Rights Reserved.
        </span>
       
        <div className=" absolute right-3 mr-[20px] flex items-center justify-center" >
          <Image
            src={footerImg}
            alt="testPic"
            style={{
              width: "77px",
              height: "24px",
            }}
            priority
          />
          <div className="pb-[4px]">

          <Image
            src={footerImg2} 
            alt="testPic"
            className="width-[159px] height-[39px] ml-[23px] mt-[-1px]"
      
            priority
          />
          </div>
        
      </div>

      </div>
      
    </footer>
  );
};

export default AppFooter;
