"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const DarkModeToggle = () => {
  //   const mode = "light";
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <>
      <div
        className="darkContainer relative flex justify-between items-center p-[2px] border-[1.5px] border-solid border-[#53c28b70] rounded-[30px] w-[42px] h-[24px]"
        onClick={toggle}
      >
        <div className="icon text-[13px]">🌙</div>
        <div className="icon text-[13px]">🌤️</div>
        <div
          className={`ball w-[15px] h-[15px] bg-[#53c28b] rounded-[50%] absolute ${
            mode === "light" ? "left-[2px]" : "right-[2px]"
          }`}
        />
      </div>
    </>
  );
};

export default DarkModeToggle;
