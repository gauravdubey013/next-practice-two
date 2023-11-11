import Link from "next/link";
import React from "react";

const Button = (props) => {
  return (
    <>
      <div className="containerBtn">
        <Link href={props.url}>
          <button className="px-[15px] py-[8px] md:px-[18px] lg:px-[20px] rounded-[20px] w-max text-white cursor-pointer bg-[#53c28b] hover:bg-transparent outline outline-[#53c28b] hover:outline-[0.2px] hover:text-[#53c28b] border-none">
            {props.text}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Button;
