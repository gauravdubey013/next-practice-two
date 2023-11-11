import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div id='contact' className="containerContact w-full h-screen mt-[1rem] animate-fade-in-down">
      <div className="title text-[40px] md:text-[45px] lg:text-[60px] mb-[30px] md:mb-[50px] lg:mb-[100px] text-center">Let's Keep in Touch</div>
      <div className="content lg:flex items-center gap-[100px]">
        <div className="imgCont flex-1 h-[500px] relative">
          <Image
            src="/contact.png"
            alt="contactImg"
            // width={500}
            fill={true}
            // height={500}
            className="contactImg object-contain animate-[moveCon_3s_infinite_ease_alternate] translate-y-[-15px]"
          />
        </div>
        <form className="contactForm flex-1 flex flex-col gap-[10px] md:gap-[15px] lg:gap-[20px]">
          <input type="text" placeholder="Name" className="input p-[8px] md:p-[10px] lg:p-[15px] bg-transparent outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[15px] md:text-[20px] font-bold hover:border-[#53c28b] focus:text-[#53c28b] focus:border-[#53c28b] focus:placeholder:text-[#53c28b]" />
          <input type="email" placeholder="E-mail" className="input p-[8px] md:p-[10px] lg:p-[15px] bg-transparent outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[15px] md:text-[20px] font-bold hover:border-[#53c28b] focus:text-[#53c28b] focus:border-[#53c28b] focus:placeholder:text-[#53c28b]" />
          <textarea placeholder="Message" cols={30} rows={8} className="input p-[8px] md:p-[10px] lg:p-[15px] bg-transparent outline-none text-[#bbb] border-[3px] border-solid border-[#bbb] text-[15px] md:text-[20px] font-bold hover:border-[#53c28b] focus:text-[#53c28b] focus:border-[#53c28b] focus:placeholder:text-[#53c28b]" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
