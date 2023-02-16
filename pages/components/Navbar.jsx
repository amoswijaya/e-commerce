import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";
import { Links } from "../../constans/Link";
import { HiShoppingCart, HiOutlineViewList } from "react-icons/hi";

export const Navbar = () => {
  const router = useRouter();
  const [menu, setMenu] = useState(false);
  const { asPath } = router;

  return (
    <div className="z-50 fixed w-full">
      <div className="p-4  border-b border-secondary flex justify-between ">
        <div className="flex items-center">
          <h1 className="text-3xl font-extrabold leading-4 mr-4">MDLR</h1>
          <h2>Online Store</h2>
        </div>
        <div className="flex w-1/2 justify-end mr-6">
          <div className=" hidden lg:flex  items-center  justify-between text-lg mr-2 w-full">
            {Links.map(({ name, path }, i) => (
              <Link
                key={i}
                className={`${
                  asPath === path ? "text-slate-400" : null
                } hover:text-slate-400`}
                href={path}
              >
                {name}
              </Link>
            ))}
          </div>
          <div className="flex items-center cursor-pointer justify-between">
            <HiShoppingCart size={24} />
            <div
              style={{
                width: 18,
                height: 18,
                backgroundColor: "#000",
                color: "#FFF",
                fontSize: 9,
              }}
              className=" rounded-xl flex justify-center items-center "
            >
              0
            </div>
            <div
              className="lg:hidden cursor-pointer ml-2"
              onClick={() => setMenu(!menu)}
            >
              <HiOutlineViewList size={28} />
            </div>
          </div>
        </div>
      </div>
      {menu && (
        <div className=" lg:hidden z-50  w-full flex flex-col">
          {Links.map(({ name, path }, i) => (
            <Link
              key={i}
              className="p-2 border-b border-secondary "
              href={path}
              onClick={() => setMenu(false)}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
