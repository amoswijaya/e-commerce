import { Products } from "@/constans/collections";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const Product = () => {
  const router = useRouter();
  const { query, isReady } = router;
  const [product, setProduct] = useState({});
  const [size, setSize] = useState("");
  const { imgUrl, price, decriptions, name } = product;
  useEffect(() => {
    if (isReady) {
      Products.forEach((product) =>
        product.id == query.id ? setProduct(product) : null
      );
    }
  }, []);
  return (
    <div className="lg:h-screen border-secondary border flex flex-col lg:flex-row">
      <div className="w-full  h-[35rem] border-custom pt-20 lg:h-full lg:w-1/3 flex justify-center ">
        <Image
          src={imgUrl}
          style={{ position: "center center" }}
          className="w-4/6 lg:w-full h:full "
          width={100}
          height={100}
        />
      </div>
      <div className="w-full  border-custom py-20 lg:h-full lg:w-2/3 flex items-center px-9 flex-col justify-center">
        <div className="h-auto w-auto">
          <h1 className="text-5xl font-black mb-2">{name}</h1>
          <span className="text-3xl ">{price}</span>
          <p className="mt-10  font-thin">{decriptions}</p>
        </div>
        <div className="flex flex-row w-full mt-4">
          Size:
          <div
            onClick={() => setSize("s")}
            className={`border ${
              size === "s" ? "border-slate-900" : "border-slate-300"
            } bg-white px-1 ml-1 w-8 text-center cursor-pointer`}
          >
            S
          </div>
          <div
            onClick={() => setSize("m")}
            className={`border ${
              size === "m" ? "border-slate-900" : "border-slate-300"
            } bg-white px-1 ml-1 w-8 text-center cursor-pointer`}
          >
            M
          </div>
          <div
            onClick={() => setSize("l")}
            className={`border ${
              size === "l" ? "border-slate-900" : "border-slate-300"
            } bg-white px-1 ml-1 w-8 text-center cursor-pointer`}
          >
            L
          </div>
          <div
            onClick={() => setSize("xl")}
            className={`border ${
              size === "xl" ? "border-slate-900" : "border-slate-300"
            } bg-white px-1 ml-1 w-8 text-center cursor-pointer`}
          >
            XL
          </div>
        </div>
        <div className="flex flex-row w-full mt-4">
          Quantity:
          <input
            type="number"
            className="border border-slate-300 w-12 text-center "
          />
        </div>
        <div className="flex flex-row w-full mt-4">
          <div className="bg-[#333] text-white p-4 text-base mt-8 cursor-pointer">
            Add to Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
