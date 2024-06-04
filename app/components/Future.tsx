import Image from "next/image";
import React from "react";
import cancel from "../../public/cancel.svg";
import check from "../../public/check.svg";

type CustomCSSProperties = React.CSSProperties & {
  "--percentage"?: string;
};

const Future = () => {
  const data = [
    {
      percentage: 98,
      title: "Of Customers Reported Gentler Cleaning.",
    },
    {
      percentage: 95,
      title: "Of Users Experienced Effective Wax Removal.",
    },
    {
      percentage: 85,
      title: "Found it Easier than Traditional Methods.",
    },
  ];
  const info = [
    "Safe",
    "Easy to Use",
    "Convenient",
    "Effective",
    "Eco-Friendly",
    "Proven Effective",
  ];
  const customStyle1: CustomCSSProperties = {
    "--percentage": "98%",
  };
  const customStyle2: CustomCSSProperties = {
    "--percentage": "95%",
  };
  const customStyle3: CustomCSSProperties = {
    "--percentage": "85%",
  };
  return (
    <section className="flex flex-row items-center">
      <div className="container mx-auto px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl  flex lg:flex-row flex-col justify-between items-center mt-16 md:mb-16 lg:gap-x-8 xl:gap-x-0">
        <div className=" flex flex-col gap-8 ">
          <h3 className="font-lato text-3xl md:text-4xl font-black leading-none  capitalize text-black text-center">
            The Future Is Wax-Free!
          </h3>
          <div className="flex flex-col">
            <div className="results__row">
              <div className="results__percentage" style={customStyle1}>
                <p>98%</p>
              </div>
              <p className="text-gray-900 text-md font-black">
                Of Customers Reported Gentler Cleaning.
              </p>
            </div>

            <div className="results__row">
              <div className="results__percentage" style={customStyle2}>
                <p>95%</p>
              </div>

              <p className="text-gray-900 text-md font-black">
                Of Users Experienced Effective Wax Removal.
              </p>
            </div>

            <div className="results__row">
              <div className="results__percentage" style={customStyle3}>
                <p>85%</p>
              </div>
              <p className="text-gray-900 text-md font-black">
                Found it Easier than Traditional Methods.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full mt-8 lg:mt-0 sm:w-auto">
          <div className="flex justify-end gap-6">
            <div className=" w-1/2 flex justify-center items-center "></div>
            <div className=" w-1/2 flex justify-center items-center gap-7  ">
              <h4 className="font-lato text-lg sm:text-xl md:text-2xl font-extrabold leading-snug mb-5 text-black ">
                Puriear
              </h4>
              <h4 className="font-lato text-lg sm:text-xl md:text-2xl font-extrabold leading-snug mb-5 text-black  ">
                Other
              </h4>
            </div>
          </div>
          <div className="flex gap-4 ">
            <div className="w-full  md:max-w-[360px]  bg-[#d4840b] rounded-2xl">
              {info.map((item, idx) => (
                <li key={idx} className="list-none">
                  <h3
                    className={`${idx == 0 ? "pt-10 pb-5" : " py-5"} ${
                      idx == info.length - 1 ? "pb-10 pt-5" : " py-5"
                    } text-base px-6  md:px-8 sm:text-2xl font-bold leading-snug text-center text-white ${
                      idx != info.length - 1 ? "border-b border-white" : ""
                    } mx-4 md:mx-8`}
                  >
                    {item}
                  </h3>
                </li>
              ))}
            </div>
            <div className="true_false_icon w-full md:max-w-[360px] flex flex-col justify-center">
              {[1, 2, 3, 4, 5, 6].map((item, idx) => (
                <li
                  key={idx}
                  className={`mx-8 flex list-none ${
                    idx != 5 ? "border-b border-gray-400" : ""
                  }`}
                >
                  <span
                    className={` w-1/2 flex justify-center items-center ${
                      idx === 0
                        ? "lg:px-[26px] lg:py-[20px] md:px-[34px] py-[20px]"
                        : "lg:px-[26px] lg:py-[20px] sm:px-3 md:px-[23px] py-[20px]"
                    }`}
                  >
                    <Image src={check} alt="check" />
                  </span>
                  <span
                    className={`w-1/2 flex justify-center items-center ${
                      idx === 0
                        ? "lg:px-[26px] lg:py-[20px] md:px-[34px] py-[20px]"
                        : "lg:px-[26px] lg:py-[20px] sm:px-3  md:px-[23px] py-[20px]"
                    }`}
                  >
                    <Image src={cancel} alt="cancel" />
                  </span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
