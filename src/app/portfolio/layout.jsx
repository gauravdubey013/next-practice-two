import React from "react";

const layout = ({ children }) => {
  return (
    <>
      <div className="protContainer animate-fade-in-down">
        <h2 className="text-[40px] md:text-[60px] font-semibold">OUR WORKS</h2>
      {children}
      </div>
    </>
  );
};

export default layout;
