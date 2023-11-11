"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Faild to fetch data..");
  }
  return res.json();
}

const Blog = async () => {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start","end end"],
  });
  let width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const data = await getData();
  return (
    <>
      <div className="blog animate-fade-in-down" ref={ref}>
        {data.map((item) => (
          <>
            <Link
              key={item.id}
              href={`/blog/${item.id}`}
              className="blogCont hover:rounded-[10px] hover:backdrop-blur-lg hover:bg-[#53c28b]/5 flex flex-col sm:flex-row md:items-center  gap-[10px] md:gap-[20px] lg:gap-[40px] mb-[20px] duration-300 ease-in-out"
            >
              <div className="imgs flex justify-center">
                <Image
                  src="/application.png"
                  alt="img"
                  width={400}
                  height={250}
                  style={{ width }}
                  className="img object-cover"
                />
              </div>
              <div className="content px-5 md:px-0 ease-in-out duration-300">
                <h1 className="blogTitle mb-[5px] sm:mb-[10px] text-[30px] duration-200 ease-in-out">
                  {item.title}
                </h1>
                <p className="blogDesc text-[18px] text-[#999] mb-2 sm:mb-0 duration-200 ease-in-out">
                  {item.body}
                </p>
              </div>
            </Link>
            <motion.div
              style={{ width }}
              className="bg-[#53c28b] h-1 mb-8"
            ></motion.div>
          </>
        ))}
      </div>
    </>
  );
};

export default Blog;
