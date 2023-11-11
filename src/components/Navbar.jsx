"use client";

// import { Link } from "react-scroll";
import Link from "next/link";
import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import DarkModeToggle from "./DarkModeToggle";
// import {Link} from 'react-scroll/modules'

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Protfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/#about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/#contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/form",
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  // window.addEventListener("resize", function (event) {
  //   if (document.body.clientWidth >= 800) {
  //     setToggle(false);
  //   }
  // });
  return (
    <>
      <div className="containerNav px-5 w-full h-[100px] flex justify-between items-center gap-5 z-10">
        {" "}
        {/*  w-[80%] fixed */}
        <div className="open md:hidden ">
          <Hamburger
            easing="ease-in"
            color="#53c28b"
            toggled={toggle}
            toggle={setToggle}
          />
        </div>
        <Link
          href={"/"}
          className="logoTitle font-bold text-[22px] animate-fade-in-down"
        >
          Chai
        </Link>
        <div className="flex items-center">
          <div
            className={`menu duration-300 flex-col gap-2 md:gap-0 lg:gap-3 flex md:flex-row fixed top-[4.5rem] md:top-0 ${!toggle
              ? ` left-[-100%] ease-in-out duration-650`
              : ` left-0 md:left-[-100%] top-[4.5rem] p-2 md:p-0 w-[7.5rem] md:w-full h-[14.5rem] md:h-full  border-r-[0.1px] border-b-[0.1px] md:border-none rounded-r-[20px] border-[#53c28b] ease-in-out duration-500 md:duration-0 backdrop-blur-sm md:backdrop-blur-none bg-[#000300]/10 md:bg-transparent`
              }  md:static`}
          >
            <div className="flex justify-end md:flex-none">
              <DarkModeToggle />
            </div>
            {/* ${router.pathname == (link.url) ? "bg-[#53c28b]/20" : "bg-transparent"} */}
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                onClick={() => {
                  setToggle(!toggle);
                }}
                className="menuLinks cursor-pointer z-10 active:bg-[#53c28b]/20 hover:text-[#53c28b] md:rounded-[10px] rounded-r-[10px] hover:backdrop-blur-sm hover:bg-[#53c28b]/20 px-2"
              >
                {link.title}
              </Link>
              // </div>
            ))}
          </div>
          <Link href={'/form'}>
            <button className="signout p-[4px] border-[0.5px] border-[#53c28b70] w-[6rem] bg-[#53c28b] hover:bg-transparent text-white hover:text-[#53c28b] cursor-pointer rounded-[5px]">
              LogIn
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
