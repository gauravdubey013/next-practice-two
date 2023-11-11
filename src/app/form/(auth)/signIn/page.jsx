import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="form-container sign-in-container">
        <form
          // onSubmit={submit}
          action="#"
          className="bothForm flex items-center justify-center flex-col h-full w-[300%] text-center px-[50px] py-0"
        >
          <h1 className="text-[#53c28b]">Sign in</h1>
          <div className="social-container mx-0 my-5">
            <Link
              href="#"
              className={`social hover:text-blue-500 {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-facebook"></i>
            </Link>
            <Link
              href="#"
              className={`social hover:text-red-500 {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-google-plus"></i>
            </Link>
            <Link
              href="#"
              className={`social hover:text-blue-400 {text-[#333] text-sm no-underline mx-0 my-[15px]}`}
            >
              <i className="fa fa-linkedin"></i>
            </Link>
          </div>
          <div className="flex flex-col justify-center gap-[10px] md:gap-[15px] lg:gap-[20px] w-full ">
            <span className="text-xs">or sign-in with registered email</span>
            {/* <input type="email" placeholder="Email" required /> */}
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-mail"
              // autoComplete="off"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              // autoComplete="off"
              required
            />
            <Link href={"/"}>
              <button
                type="submit"
                className="border bg-[#53c28b] text-[#ffffff] text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[45px] py-3 rounded-[20px] border-solid border-[#53c28b] active:scale-95 focus:outline-none"
              >
                Sign In
              </button>
            </Link>
            <Link
              className="text-[#53c28b] text-sm no-underline mx-0 my-[15px]"
              href="#"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignIn;
