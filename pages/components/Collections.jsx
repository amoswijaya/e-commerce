import Image from "next/image";
import { useRouter } from "next/router";
export const Collections = ({ data }) => {
  return (
    <div className=" border-t border-secondary grid  md:grid-cols-2 md:grid-rows-2 grid-cols-1 grid-rows-1 lg:grid-cols-4 lg:grid-rows-1  ">
      {data.map((product, i) => (
        <CardCollection key={i} product={product} />
      ))}
    </div>
  );
};

const CardCollection = ({ product }) => {
  const router = useRouter();
  const seeDetail = () => {
    router.push({
      pathname: `/product/${product.id}`,
    });
  };
  return (
    <div
      onClick={seeDetail}
      className="border-custom w-full  h-[40rem] cursor-pointer hover:bg-white hover:drop-shadow-md  "
    >
      <div className="border-b h-3/4 flex justify-center">
        <Image
          src={product.imgUrl}
          style={{ position: "center center", width: "100%", height: "100%" }}
          width={100}
          height={100}
        />
      </div>
      <div className=" flex-col p-8 h-1/4 flex justify-between">
        <h4>{product.name}</h4>
        <span>{product.price}</span>
      </div>
    </div>
  );
};
