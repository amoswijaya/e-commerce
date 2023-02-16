import { useEffect, useState } from "react";
import { Collections } from "../../components";
import { Products } from "../../constans/collections";
const Tops = () => {
  const [tops, setTops] = useState([]);
  useEffect(() => {
    const tops = Products.filter((product) => product.category === "Tops");
    setTops(tops);
  }, []);
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="text-7xl   font-black my-20 ">Tops</div>
      <Collections data={tops} />
    </div>
  );
};

export default Tops;
