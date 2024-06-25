import Image from "next/image";

const Header = () => {
  return (
    <section className="bg-white flex flex-row items-center">
      <div className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl gap-y-12 lg:gap-8  flex justify-between items-center my-4">
        <div className="menu-icon hidden">
          <Image src={"/menu.svg"} alt="menu" width={24} height={24} />
        </div>
        <div>
          <Image
            src="https://puriear.com/cdn/shop/files/purierlogo.png?v=1707718464&width=500"
            alt="logo"
            width={120}
            height={120}
          />
        </div>
        <div className=" gap-x-20 flex justify-between items-center  menu-links">
          <a
            href="#"
            className=" text-lg  px-4 py-1 bg-[#d4840b] hover:bg-[#f7f2eb] text-white hover:text-gray-900 rounded-md font-semibold"
          >
            Home
          </a>

          <a
            href="#"
            className="  font-normal  text-lg tracking-normal p-0 transition-all duration-400 ease-linear hover:text-[#d4840b] text-gray-900"
          >
            Track Order
          </a>

          <a
            href="#"
            className=" font-normal  text-lg tracking-normal p-0 transition-all duration-400 ease-linear hover:text-[#d4840b] text-gray-900"
          >
            Contact Us
          </a>
        </div>
        <div>
          <button className="bg-[#d4840b] hover:bg-white text-lg font-normal text-white hover:text-[#d4840b] leading-[1.5] capitalize px-5 md:px-6 py-3 md:py-4 rounded-lg border border-[#d4840b] flex justify-center gap-x-3 ">
            <Image
              src={"/bag.svg"}
              alt="bag"
              className="w-5"
              width={24}
              height={24}
            />
            <p className="text-nowrap">Buy Now</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
