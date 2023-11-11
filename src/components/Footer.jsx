import React from "react";

const Footer = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="containerFoot h-[50px] flex items-center justify-between text-[14px]">
        <div className="left">Copyright &copy; 2023 GavvyWeb. All rights reserved.</div>
        <div className="right flex items-center gap-[10px]">
          <i className="fa fa-facebook text-blue-500 opacity-[0.6] cursor-pointer" />
          <i className="fa fa-instagram text-pink-600 opacity-[0.6] cursor-pointer" />
          <i className="fa fa-youtube text-red-700 opacity-[0.6] cursor-pointer" />
          <i className="fa fa-twitter text-blue-400 opacity-[0.6] cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default Footer;
