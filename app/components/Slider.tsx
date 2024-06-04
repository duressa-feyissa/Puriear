"use-client;";
import Image from "next/image";
import arrow from "../../public/arrow.svg";
import image from "../../public/review.svg";
import ParallelSlider from "./ui/ParallelSlider";
import Payments from "./ui/Payments";
import SelectProduct from "./ui/SelectProduct";

const Slider = () => {
  const data = [
    {
      image: "https://puriear.com/cdn/shop/files/image_29.png?v=1708055261",
      title: "90 Day Money Back Guarantee",
    },
    {
      image: "https://puriear.com/cdn/shop/files/image_26.png?v=1708055309",
      title: "Free Worldwide Shipping",
    },
    {
      image: "https://puriear.com/cdn/shop/files/image_92.png?v=1708055354",
      title: "20,000+ 5 Star Reviews",
    },
  ];
  return (
    <section className="flex flex-row items-center">
      <div className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  flex lg:flex-row flex-col justify-between items-start my-16 gap-x-6">
        <ParallelSlider />
        <div className="flex flex-col w-full mt-12  lg:mt-0">
          <div className="pro_title flex flex-wrap items-center justify-between gap-y-1 ">
            <h1 className="font-lato text-3xl md:text-3xl lg:text-4xl font-black leading-snug tracking-normal my-0 max-w-[280px]   lg:max-w-[430px] text-black">
              ADVANCED EAR WAX CLEANER
            </h1>

            <h6 className="bg-[#d4840b] text-white font-quicksand text-base font-normal leading-tight rounded-lg p-2.5 m-0">
              Almost Gone
            </h6>
          </div>
          <div className="my-3">
            <div className="flex items-center">
              <span>
                <Image src={image} alt="review" />
              </span>
              <p className="text-lg font-bold font-quicksand mb-0 ml-2 text-black">
                20,146 Reviews
              </p>
            </div>
          </div>
          <div className="text-gray-900">
            <span className="live-view">157</span> people&nbsp;Are Currently
            Looking At This
          </div>
          <h3 className="mt-4 text-left font-bold font-lato text-lg md:text-2xl text-yellow-600">
            <span>Choose your bundle:</span>
          </h3>
          <SelectProduct />
          <button
            type="submit"
            name="add"
            className="flex items-center justify-center w-full p-4 bg-[#d4840b] gap-x-3 text-white font-lato text-3xl font-bold leading-none rounded-lg"
          >
            <span className="font-lato  text-xl  md:text-3xl font-semibold leading-none">
              Add To Cart
            </span>
            <span>
              <Image src={arrow} alt="arrow" className="w-5 md:w-6" />
            </span>
          </button>
          <div className="flex justify-center my-7">
            <Payments />
          </div>

          <ul className="flex justify-between gap-6  md:gap-12 mb-8 list-none">
            {data.map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 md:gap-3">
                <Image
                  src={item.image}
                  alt="Image"
                  role="presentation"
                  width={39}
                  height={39}
                  loading="lazy"
                />
                <span className="font-lato text-xs md:text-base font-bold leading-[1.1] text-left text-gray-900 text-wrap  max-w-48  md:max-w-32">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="bg-[#f6e6ce] border border-[#D4840B] rounded-[20px] p-[20px]">
            <p className="text-gray-950">
              &quot;I always struggled with earwax, causing discomfort and
              hearing issues. <strong>Puriear</strong>, gentle and easy to use,
              has changed that. There has been a significant decrease in wax
              buildup, my ears are cleaner, and doctor visits have reduced. My
              hearing has noticeably improved. It truly has been a lifesaver in
              managing my ear health.&quot; <strong>- Roy G</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
