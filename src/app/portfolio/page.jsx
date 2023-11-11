"use client";
import Link from "next/link";

const Portfolio = () => {
  return (
    <>
      <div className="group">
        <h1 className="mb-1 font-mono text-5xl md:text-6xl font-bold hover:text-[#53c28b]">
          Heya!
          <br className="block lg:hidden" />{' '}I'm{" "}
          <span className="inline-flex h-20 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">
            Gaurav 👋
          </span>
          <span className="animate-pulse box-border inline-block w-1 h-12 ml-2 -mb-2 bg-white md:-mb-4 md:h-16 animate-cursor will-change-transform"></span>
        </h1>
        <p className="text-xl font-semibold md:text-3xl">
          developer by choice and designer for fun
        </p>
        <hr className="border-[#53c28b] border-solid border-[0.1px] rounde-[5rem] mt-3 mb-3" />
      </div>
      <div className="protfolioContainter flex flex-col gap-2">
        {/* Portfolio */}
        <h2 className="selectTitle text-[22px] md:text-[30px]"><u>Choose</u>{' '}<u>a</u>{' '}<u>gallery</u> :</h2>
        <div className="items flex items-center justify-center gap-[10px] md:gap-[30px] lg:gap-[50px]">
          <Link href={'/portfolio/illustrations'} className="item bg-[url('/illustrator.jpeg')] bg-center border-[3px] md:border-[5px] border-solid border-[#bbb] w-[300px] h-[250px] md:h-[400px] relative hover:border-[#53c28b] hover:text-[#53c28b]">
            <span className="title absolute right-[10px] bottom-[10px] text-[19px] font-semibold md:font-bold md:text-[30px] lg:text-[40px] "><span className="font-mono">I</span>llustrations okay</span>
          </Link>
          <Link href={'/portfolio/websites'} className="item bg-[url('/web.jpeg')] bg-center border-[3px] md:border-[5px] border-solid border-[#bbb] w-[300px] h-[250px] md:h-[400px] relative hover:border-[#53c28b] hover:text-[#53c28b]">
            <span className="title absolute right-[10px] bottom-[10px] text-[19px] font-semibold md:font-bold md:text-[30px] lg:text-[40px] ">Websites</span>
          </Link>
          <Link href={'/portfolio/applications'} className="item bg-[url('/application.png')] bg-center border-[3px] md:border-[5px] border-solid border-[#bbb] w-[300px] h-[250px] md:h-[400px] relative hover:border-[#53c28b] hover:text-[#53c28b]">
            <span className="title absolute right-[10px] bottom-[10px] text-[19px] font-semibold md:font-bold md:text-[30px] lg:text-[40px]">Applications</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
