import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });
  if (!res.ok) {
    return notFound();
  }
  return res.json();
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <>
      <div className="blogIdCont animate-fade-in-down">
        <div className="top flex">
          <div className="info flex-1 flex flex-col justify-between">
            <h1 className="title text-[20px] md:text-[30px] lg:text-[40px] underline uppercase mb-1">
              {data.title}
            </h1>
            <p className="desc text-[13px] md:text-[16px] lg:text-[18px] font-light">
              {data.body}
            </p>
            <div className="author flex items-center mt-2 gap-[10px]">
              <Image
                src={"/illustrator.jpeg"}
                alt="img"
                width={50}
                height={50}
                className="avatar object-cover rounded-[50%]"
              />
              <span className="username">Chomu</span>
            </div>
          </div>
          <div className="imgCont flex-1 h-[300px] relative">
            <Image
              src={"/application.png"}
              alt="img"
              // width={40}
              fill={true}
              // height={40}
              className="img object-cover"
            />
          </div>
        </div>
        <div className="content mt-[20px] text-[14px] md:text-[17px] lg:text-[20px] font-light text-[#999] text-justify">
          <p className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe quae
            aliquid quam accusantium, doloribus neque officia ut fugiat, fugit
            libero unde voluptatum illum commodi natus ab quas quaerat
            consequatur quia beatae impedit. Incidunt eveniet explicabo amet
            temporibus in molestias repellendus harum dicta corporis earum
            corrupti magnam, aspernatur ipsum voluptatum velit nobis quidem
            asperiores! Totam quasi pariatur ipsam nostrum minima voluptatibus
            expedita quaerat! Doloribus atque mollitia similique exercitationem
            consequuntur ratione a deleniti illo aperiam accusantium, eaque ab
            facere architecto molestias in cupiditate ipsa culpa est! Tenetur
            numquam deserunt omnis rem quas fugiat sapiente labore obcaecati
            illo laborum repudiandae fugit, sunt voluptatem culpa est
            reprehenderit, iste neque aliquam ullam. Necessitatibus quae
            officiis inventore molestias voluptatum magnam quaerat, quidem
            asperiores eum itaque reprehenderit vel. Laborum adipisci, repellat
            numquam sapiente veritatis pariatur similique deleniti molestiae,
            explicabo sint vitae ipsa, magni voluptatem impedit sunt? Quas qui
            impedit quod eos, vitae maiores! Minus aspernatur rerum fugit omnis,
            velit voluptatum porro sunt impedit nemo dicta, placeat quas
            eligendi magnam officiis. Magnam corrupti beatae aliquid expedita?
            Est doloribus modi nesciunt error cum, praesentium dicta soluta
            eligendi amet? Ipsa expedita voluptatem nam molestias mollitia.
            Ipsum deleniti alias delectus sequi similique tempore amet! Sit
            assumenda eaque accusantium quod magnam asperiores.
          </p>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
