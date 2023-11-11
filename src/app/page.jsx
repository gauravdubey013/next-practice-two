"use client";
import Image from "next/image";
import About from "./about/page";
import Contact from "./contact/page";
import Button from "@/components/Button";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 0,
        y: 75,
        // transition: {
        //   type: "spring",
        //   duration: 1,
        //   bounce: 0.3,
        // },
      });
    }
    if (!inView) {
      animation.start({ opacity: 1, y: 0 });
    }
  }, [inView]);
  return (
    <>
      <div
        ref={ref}
        className="containerHero flex items-center gap-[10px] md:gap-[50px] lg:[100px] animate-fade-in-down md:mt-[3rem] lg:mt-[4rem]"
      >
        <div className="item flex-1 flex flex-col gap-[50px]">
          <h1 className="heroTitel text-[30px] md:text-[50px] lg:leading-[4.5rem] md:leading-[2.5rem] leading-[1.9rem] font-extrabold lg:text-[72px] ">
            Better design for ur digital products
          </h1>
          <p className="desc lg:text-[24px] md:text-[18px] sm:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            tempora consequatur nesciunt optio minima repellat.
          </p>
          <Button url="/portfolio" text="See Our Works" />
        </div>
        <div className="imgDiv flex-1 flex flex-col gap-[50px]">
          <Image
            src={require("../../public/hero.png")}
            alt="hero"
            width={200}
            height={200}
            className="img w-full h-[500px] object-contain animate-[moveHome_3s_infinite_ease_alternate]"
          />
        </div>
      </div>
      <motion.div
        animate={animation}
        transition={{ duration: 1, delay: 0.25, type: "spring", bounce: 0.5 }}
        id="about"
      >
        <About />
      </motion.div>
      <motion.div
        animate={animation}
        transition={{ duration: 0.5, delay: 0.25 }}
        id="contact"
      >
        <Contact />
      </motion.div>
    </>
  );
}
