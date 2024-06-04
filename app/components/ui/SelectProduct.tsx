"use client";
import Image from "next/image";
import { useState } from "react";
import RadioButton from "./RadioButton";

const SelectProduct = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col my-4 gap-y-6">
      <button
        className={`flex gap-x-3  ${selected == 0 ? "bg-[#f6e6ce]" : "bg-white"}
    border border-[#d4840b]   hover:bg-[#f6e6ce] rounded-[20px] py-5 px-3 items-center`}
        onClick={() => setSelected(0)}
      >
        <RadioButton active={selected == 0} />
        <div className="flex justify-between items-center w-full gap-x-6">
          <div className="flex flex-col items-start gap-2 text-left relative">
            <Image
              src="https://puriear.com/cdn/shop/files/VS_13.png?v=1715260288"
              alt="image"
              width={90}
              height={90}
              className=" rounded-[20px] min-w-20"
            />
            <span className="bg-[#d4840b] text-white font-quicksand text-[12px] font-normal leading-[1.2] text-center rounded-full p-2 w-[40px] h-[40px] absolute bottom-[-4px] right-[-15px]">
              33% off
            </span>
          </div>
          <div className="max-w-[230px] flex flex-col ">
            <span className="flex flex-col items-start gap-1">
              <span className="font-lato  md:text-lg font-bold leading-[1.2] text-[#232323] text-start">
                2x Advanced Ear Wax Cleaner+ 1x Free Gift
              </span>
              <span className="inline-block text-xs bg-[#d4840b] text-white leading-[1.9] px-3 font-bold border border-[#d4840b] rounded-[0.6rem] whitespace-nowrap">
                Get 33% off
              </span>
            </span>
            <span className="border border-[#d4840b] w-fit px-1 text-sm md:text-base rounded-[8px] leading-[1.4] mt-1 text-gray-900">
              Save Br970
            </span>
          </div>
          <div className="text-right flex flex-col items-center gap-2">
            <div className="flex flex-col">
              <span className="font-lato  md:text-lg font-bold leading-[1.2] text-[#d4840b]">
                Br2,498
              </span>
              <span className="line-through font-lato md:text-lg font-normal leading-[1.2] text-[#666]">
                Br2,019
              </span>
            </div>
            <div>
              <h6 className="text-[18px] capitalize m-0 text-black font-semibold">
                {" "}
              </h6>
            </div>
          </div>
          <div>
            <h6 className="max-w-[40px] font-quicksand text-[12px] font-extrabold leading-[1] text-[#d4840b] m-0">
              SOLO PACK
            </h6>
          </div>
        </div>
      </button>

      <button
        className={`flex gap-x-4  ${selected == 1 ? "bg-[#f6e6ce]" : "bg-white"}
               border border-[#d4840b]   hover:bg-[#f6e6ce] rounded-[20px] py-5 px-3 items-center relative`}
        onClick={() => setSelected(1)}
      >
        <p className="quantity-break__badge text-sm md:text-lg ">
          MOST POPULAR
        </p>
        <RadioButton active={selected == 1} />
        <div className="flex justify-between items-center w-full gap-x-6">
          <div className="flex flex-col items-start gap-2 text-left relative">
            <Image
              src="https://puriear.com/cdn/shop/files/VS_13.png?v=1715260288"
              alt="image"
              width={90}
              height={90}
              className=" rounded-[20px] min-w-20"
            />
            <span className="bg-[#d4840b] text-white font-quicksand text-[12px] font-normal leading-[1.2] text-center rounded-full p-2 w-[40px] h-[40px] absolute bottom-[-4px] right-[-15px]">
              76% off
            </span>
          </div>
          <div className="md:max-w-[230px] flex flex-col">
            <span className="flex flex-col items-start gap-1">
              <span className="font-lato text-base  md:text-lg font-bold leading-[1.2] text-[#232323] text-start">
                2x Advanced Ear Wax Cleaner+ 1x Free Gift
              </span>
              <span className="inline-block text-xs bg-[#d4840b] text-white leading-[1.9] px-3 font-bold border border-[#d4840b] rounded-[0.6rem] whitespace-nowrap">
                Get 76% off
              </span>
            </span>
            <span className="text-sm md:text-base border  border-[#d4840b] w-fit px-1 rounded-[8px] leading-[1.4] mt-1 text-gray-900">
              Save Br4,551.70
            </span>
          </div>
          <div className="text-right flex flex-col items-center gap-2">
            <div className="flex flex-col">
              <span className="font-lato md:text-lg font-bold leading-[1.2] text-[#d4840b]">
                Br1,406.30
              </span>
              <span className="line-through font-lato md:text-lg font-normal leading-[1.2] text-[#666]">
                Br5,958
              </span>
            </div>
            <div>
              <h6 className="lg:text-lg capitalize m-0 text-black font-semibold">
                Each
              </h6>
            </div>
          </div>
          <div>
            <h6 className="max-w-[40px] font-quicksand text-[12px] font-extrabold leading-[1] text-[#d4840b] m-0">
              DUO PACK
            </h6>
          </div>
        </div>
      </button>
    </div>
  );
};

export default SelectProduct;
