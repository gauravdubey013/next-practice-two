import Button from "@/components/Button";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cato) => {
  const catoData = items[cato];
  if (catoData) {
    return catoData;
  }
  return notFound();
};

const Category = ({ params }) => {
  const catoData = getData(params.category);
  return (
    <>
      <div className="animate-fade-in-down">
        <h1 className="catoTitle text-[25px] text-[#53c28b] uppercase font-bold">
          {params.category}
        </h1>
        {catoData.map((item) => (
          <div className="itemCato flex gap-[50px] mt-[50px] mb-[100px]">
            <div className="content flex-1 flex flex-col justify-center gap-[10px] md:gap-[20px]">
              <h1 className="text-[30px] font-medium">{item.title}</h1>
              <p className="desc text-[18px]">{item.desc}</p>
              <Button url="/portfolio" text="Read More" />
            </div>
            <div className="imgs flex-1 h-[250px] md:h-[350px] lg:h-[500px] relative">
              <Image
                className="img"
                src={item.image}
                alt="banner"
                // width={600}
                fill={true}
                // height={500}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
