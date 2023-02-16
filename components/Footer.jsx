import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="px-4 py-3 flex items-center justify-between flex-col lg:flex-row">
      <h4 className="font-black text-xl">MODULAR</h4>
      <div className="flex lg:justify-between w-full lg:w-2/3">
        <p className="hover:opacity-50 cursor-pointer">Privacy Policy</p>
        <p className="hover:opacity-50 cursor-pointer">Terms & Conditions</p>
        <p className="hover:opacity-50 cursor-pointer">Shipping</p>
        <p className="hover:opacity-50 cursor-pointer">Returns</p>
      </div>
      <div className="flex ">
        <FaGithub />
        <FaFacebookF className="mx-4" />
        <FaInstagram />
      </div>
    </div>
  );
};
