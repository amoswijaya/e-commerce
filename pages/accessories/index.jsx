import { useEffect, useState } from "react";
import { Collections } from "../../components";
import { Products } from "../../constans/collections";
const Accessories = () => {
  const [accessories, setAccessories] = useState([]);
  useEffect(() => {
    const accessories = Products.filter(
      (product) => product.category === "Accessories"
    );
    setAccessories(accessories);
  }, []);

  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="text-7xl  font-black my-20 ">Accessories</div>
      <Collections data={accessories} />
    </div>
  );
};

export default Accessories;
