import Button from "@/components/Button";
import Image from "next/image";
// import React from "react";

const About = () => {
  return (
    <>
      <div id='about' className="containerAbout mt-[3rem] animate-fade-in-down">
        <div className="imgCont w-full h-[300px] relative">
          <Image
            className="img object-cover grayscale-[50%] w-full h-[15rem] -scale-x-100"
            src={require("../../../public/aboutBanner3.jpeg")}
            alt="banner"
            width={600}
            height={500}
          />
          <div className="imgText absolute bottom-[70px] ml-[10px] backdrop-blur-sm bg-[#53c28b]/70 p-[5px] rounded-[8px] text-white">
            <h1 className="imgTitle lg:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-bold">
              Digital Storytellers
            </h1>
            <h2 className="imgDesc lg:text-[1.8rem] md:text-[1.5rem] text-[1rem] text-[#000300] font-bold">
              Handcrafting award winning digital experience
            </h2>
          </div>
        </div>
        <div className="textCont flex gap-[40px] md:gap-[60px] lg:gap-[100px]">
          <div className="item flex-1 dle flex-col gap-[30px]">
            <h1 className="titel lg:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-bold">
              Who Are We!?
            </h1>
            <p className="res mt-[50px] text-justify tet-[18px] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corrupti debitis repellendus fugit necessitatibus quo, sequi
              tempore fugiat, exercitationem, deleniti libero totam accusamus
              eaque ipsum laboriosam cum architecto dolor nemo saepe? Saepe
              quaerat necessitatibus velit a distinctio excepturi assumenda,
              repellendus cum optio est eius sint aliquam quibusdam sit nisi
              corporis.
              <br />
              <br />
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
              repellat aspernatur sunt, sequi odit temporibus reprehenderit
              placeat sed maiores corporis officia quod cupiditate vel
              <br />
              <br />
              dignissimos id eligendi quo at distinctio nostrum nobis quis ipsa.
              Libero.
            </p>
          </div>
          <div className="item flex-1 dle flex-col gap-[30px]">
            <h1 className="title lg:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-bold">
              What Do we Do!?
            </h1>
            <p className="res mt-[50px] text-justify tet-[18px] font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              corrupti debitis repellendus fugit necessitatibus quo, sequi
              tempore fugiat, exercitationem, deleniti libero totam accusamus
              eaque ipsum laboriosam cum architecto dolor nemo saepe? Saepe
              quaerat necessitatibus velit a distinctio excepturi. <br />
              Creative Illustrations:
              <br />
              <br /> - Dynamic Websites
              <br />
              <br /> - Fast & Handy
              <br />
              <br /> - Mobile Apps
              <br />
              <br />
            </p>
            <Button url="/contact" text="Contact" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
