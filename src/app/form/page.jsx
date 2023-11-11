"use client";

import SignUp from "./(auth)/signUp/page";
import SignIn from "./(auth)/signIn/page";

import "./Form.css";

const Form = () => {
  const signUpClick = () => {
    container.classList.add("right-panel-active");
  };
  const signInClick = () => {
    container.classList.remove("right-panel-active");
  };

  return (
    <>
      {/* <div className="px-2 w-full h-full flex items-center justify-center flex-wrap"> */}
      <div
        className="formContainer relative overflow-hidden w-[108%] md:w-full h-[40rem] rounded-[10px] -ml-5 md:ml-0 scale-90 md:scale-100 duration-700"
        id="container"
      >
        <div className="form-container sign-up-container">
          {/* <!-- Sign Up form code goes here --> */}
          <SignUp />
        </div>
        <div className="form-container sign-in-container">
          {/* <!-- Sign In form code goes here --> */}
          <SignIn />
        </div>
        <div className="overlay-container">
          {/* <!-- The overlay code goes here --> */}
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 className="font-[bold] m-0  lg:text-2xl md:text-1xl">
                  <span className=" underline underline-offset-4 decoration-[#53c28b] text-white">
                    Already have account?
                  </span>
                </h1>
                <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">
                  Sign In here:
                </p>
                <button
                  className={`ghost{border bg-transparent text-[#ffffff] text-[12px] lg:text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[25px] md:px-[35px] lg:px-[45px] py-3 rounded-[20px] border-[.5px] border-solid border-[#53c28b] active:scale-95 focus:outline-none}`}
                  id="signIn"
                  onClick={signInClick}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 className="font-[bold] m-0 lg:text-2xl md:text-1xl text-white">
                  Heya! <br />
                  <span className=" underline underline-offset-4 decoration-[#53c28b] ">
                    New User?
                  </span>
                </h1>
                <p className="text-sm font-thin leading-5 tracking-[0.5px] mt-5 mb-[30px] mx-0">
                  Enter required info and start journey with us{":)"}
                </p>
                <button
                  className={`ghost{border bg-transparent text-[#ffffff] text-[12px] lg:text-xs font-[bold] tracking-[1px] uppercase transition-transform duration-[80ms] ease-[ease-in] px-[25px] md:px-[35px] lg:px-[45px] py-3 rounded-[20px] border-[.5px] border-solid border-[#6cdfa6] active:scale-95 focus:outline-none}`}
                  id="signUp"
                  onClick={signUpClick}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Form;
