export const Subscriptions = () => {
  return (
    <div
      id="#contact"
      className="w-full h-auto lg:h-56 border-y-custom flex flex-col items-center justify-center  font-black py-10 "
    >
      <h1 className="text-5xl">Subscribe</h1>
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <input
          placeholder="First Name"
          type="text"
          className="w-full lg:w-56 mx-2 text-xl border-0   focus:outline-none px-4 py-4 pb-2 flex-grow border-b  focus:border-b-[#333] "
        />
        <input
          placeholder="Last Name"
          type="text"
          className="w-full lg:w-56 mx-2 text-xl border-0   focus:outline-none px-4 py-4 pb-2 flex-grow border-b  focus:border-b-[#333]"
        />
        <input
          placeholder="Email"
          type="email"
          className="w-full lg:w-56 mx-2 text-xl border-0   focus:outline-none px-4 py-4 pb-2 flex-grow border-b  focus:border-b-[#333]"
        />
        <div className=" mx-4   bg-[#333] text-white p-4 text-base mt-8">
          Subscribe
        </div>
      </div>
    </div>
  );
};
