import Image from "next/image";
import image from "../../public/star_svg.svg";
import Payments from "./ui/Payments";
import { Tooltip } from "./ui/Tooltip";

const Hero = () => {
  return (
    <section className="bg-[#fdfbf7] flex flex-row items-center">
      <div className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl gap-y-12 lg:gap-8  flex lg:flex-row flex-col justify-between items-center mb-20 mt-8">
        <div className=" flex flex-col gap-6 lg:gap-8">
          <h1 className="hero_title font-lato text-3xl  md:text-4xl lg:text-5xl xl:text-7xl font-black leading-none max-w-[717px] capitalize text-black">
            Say{" "}
            <span className="hero_span text-[#d4840b] relative">GOODBYE</span>{" "}
            To Traditional Solutions For Earwax Buildup, The Future Is Puriear
          </h1>
          <p className="text-base md:text-lg font-normal text-gray-600 leading-[1.5] capitalize max-w-xl">
            Safely And Effectively Remove Earwax Buildup In The Comfort Of Your
            Own Home, Using Puriear’s Unique, Gentle Vacuum Technology.
          </p>
          <div>
            <button className="bg-[#d4840b] hover:bg-white text-lg font-normal text-white hover:text-[#d4840b] leading-[1.5] capitalize px-5 md:px-6 py-3 md:py-4 rounded-xl border border-[#d4840b] ">
              Get Puriear Now
            </button>
          </div>
          <Payments />
          <div className="flex gap-8">
            <Tooltip />
            <div className="flex flex-col justify-center">
              <Image src={image} alt="Hero Image" />
              <p className="text-base  lg:text-lg font-medium text-gray-600 leading-[1.5] capitalize">
                20000+ Satisfied Customers
              </p>
            </div>
          </div>
        </div>
        <div className="lg:max-w-[445px]">
          <div className="hero_banner_right_inner relative">
            <video className="w-full h-full" loop muted playsInline>
              <source
                src="https://cdn.shopify.com/videos/c/o/v/b6a8502f72434d709a4673e07fcf8f16.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
