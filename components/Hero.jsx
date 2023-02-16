export const Hero = () => {
  return (
    <div className="w-screen  lg:flex flex-row-reverse  border-secondary border-b lg:h-[75vh] h-screen  ">
      <div className="w-full lg:w-1/2 bg-hero bg-cover bg-center lg:h-full h-1/2 "></div>
      <div className="w-full  lg:w-1/2 lg:border-r-2 border-secondary  flex justify-center  flex-col lg:px-20 items-center text-center lg:items-start lg:text-start mt-4 lg:mt-0">
        <h3 className="font-bold text-2xl">NOW IN STORES</h3>
        <h1 className="font-bold text-7xl"> New SS19 Collection</h1>
        <p className="mt-5">
          Discover the new Coats, Shirt, Pants, Shorts and Accessories
          <span className="font-black"> MODULAR </span>
          has to offer.
        </p>
        <div className="    bg-[#333] text-white p-4 text-base mt-8">
          See Collection
        </div>
      </div>
    </div>
  );
};
