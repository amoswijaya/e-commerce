import { useEffect, useState } from "react";
import { Collections } from "../components";
import { Products } from "../../constans/collections";
const Bottoms = () => {
  const [bottoms, setBottoms] = useState([]);
  useEffect(() => {
    const bottoms = Products.filter(
      (product) => product.category === "Bottoms"
    );
    setBottoms(bottoms);
  }, []);
  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="text-7xl  font-black my-20 ">Bottoms</div>
      <Collections data={bottoms} />
    </div>
  );
};

export default Bottoms;
