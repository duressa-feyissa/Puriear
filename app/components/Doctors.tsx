"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Doctors() {
  const images = [
    "/Rectangle_173.webp",
    "/Rectangle_174.webp",
    "/Rectangle_175.webp",
    "/Rectangle_176.webp",
  ];

  const images1 = [
    "/Rectangle_173.webp",
    "/Rectangle_174.webp",
    "/Rectangle_175.webp",
    "/Rectangle_176.webp",
  ];
  const images2 = [
    "/Rectangle_174.webp",
    "/Rectangle_175.webp",
    "/Rectangle_176.webp",
    "/Rectangle_173.webp",
  ];
  const images3 = [
    "/Rectangle_175.webp",
    "/Rectangle_176.webp",
    "/Rectangle_173.webp",
    "/Rectangle_174.webp",
  ];
  const images4 = [
    "/Rectangle_176.webp",
    "/Rectangle_173.webp",
    "/Rectangle_174.webp",
    "/Rectangle_175.webp",
  ];

  const doctors = [
    {
      1: "Folix22 is by far the most effective home hair solution I've ever come across. It's a real breakthrough for people to regrow hair, and I can fully vouch for the science behind it.",
      2: "Dr. Lukas Müller",
      3: "renowned Swiss dermatologist and hair expertimage",
    },
    {
      1: "As experts in PRP treatments, we are always looking at ways to improve our Hair Loss Program. We believe that a combination treatment approach is the most efficient way to treat hair loss. For years we were searching for the best Hair Loss products for our clients to use at home, and we finally found Folix22.",
      2: "Michail Levchenko",
      3: "Medical Director at Pedtronic - London ",
    },
    {
      1: '"The Folix22 formula, among other carefully chosen ingredients, contains niacinamide, which has proven benefits for hair health. It improves blood circulation, bringing oxygen and nutrients to the hair follicle." Kenji Yamamoto, Medical Doctor (MD) and dermatologist with extensive research experience in hair loss',
      2: "Dr. Lukas Müller",
      3: "renowned Swiss dermatologist and hair expertimage",
    },
    {
      1: '"I work with the scientists at Folix22, who all have brilliant minds. We add a few unique components to the Folix22 formula, which spectacularly increase hair growth."',
      2: "Sophie Dubois,",
      3: "renowned Swiss dermatologist and hair expertimage",
    },
  ];

  const imageRef = useRef(null);
  const slider1Ref = useRef<Slider>(null);
  const slider2Ref = useRef<Slider>(null);
  const slider3Ref = useRef<Slider>(null);
  const slider4Ref = useRef<Slider>(null);
  const [active, setActive] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    carousel: false,
    beforeChange: (current: number, next: number) => {
      setActive(next);
    },
  };

  return (
    <section className="flex flex-row items-center bg-cover bg-hero-pattern w-full bg-[#f7f2eb] ">
      <div className="container  overflow-x-hidden flex flex-col justify-center items-center mx-auto py-10  relative r-se4trh">
        <div className="flex flex-col justify-center items-center gap-7 pt-4 text-black">
          <div className=" font-serif text-5xl xl:text-7xl  leading-none max-w-[717px] capitalize font-medium">
            Experts Speak
          </div>
          <div className="text-2xl text-gray-800">
            Clinical tested and backed by leading experts. Discover why right
            here.
          </div>
        </div>
        <div className="flex  gap-32 my-8 sm:pt-24 ">
          <div className="flex flex-col justify-between items-start gap-7  px-3  z-slider  h-[650px] max-w-[360px] ">
            <div className="flex flex-col justify-center gap-6 text-[#525151] ">
              <div className="text-wrap text-2xl font-medium max-w-[350px] ">
                {doctors[active][1]}
              </div>
              <div className="text-3xl text-[#D4A806] font-semibold font-lato">
                {doctors[active][2]}
              </div>
              <div className="text-lg font-black text-wrap capitalize  text-[#525151] font-lato">
                {doctors[active][3]}
              </div>
            </div>
            <div className="flex w-full gap-4 font-extrabold ">
              <div
                className="r-1yaxjkq text-black text-3xl"
                onClick={() => {
                  slider1Ref?.current?.slickPrev();
                  slider2Ref?.current?.slickPrev();
                  slider3Ref?.current?.slickPrev();
                  slider4Ref?.current?.slickPrev();
                }}
              >
                {"<"}
              </div>
              <div
                className="r-1yaxjkq text-black text-3xl"
                onClick={() => {
                  slider1Ref?.current?.slickNext();
                  slider2Ref?.current?.slickNext();
                  slider3Ref?.current?.slickNext();
                  slider4Ref?.current?.slickNext();
                }}
              >
                {">"}
              </div>
            </div>
          </div>
          <div className="flex gap-3 sm:flex-row flex-col ">
            <div className="w-[22rem] rounded-lg">
              <Slider ref={slider1Ref} {...settings}>
                {images1.map((image, idx) => (
                  <div key={idx}>
                    <Image
                      ref={imageRef}
                      src={image}
                      alt="Vercel Logo"
                      width={500}
                      height={200}
                      priority
                      className="transition-all delay-1000 rounded-md"
                      draggable="false"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className="items-start  gap-7 mt-6  hidden  w-slider w-full ">
              <div className="flex flex-col justify-center gap-6 text-[#525151] ">
                <div className="text-wrap text-2xl md:font-medium max-w-[350px] ">
                  {doctors[active][1]}
                </div>
                <div className="text-3xl text-[#D4A806] font-semibold font-lato">
                  {doctors[active][2]}
                </div>
                <div className="text-lg font-black text-wrap capitalize  text-[#525151] font-lato">
                  {doctors[active][3]}
                </div>
              </div>
              <div className="flex w-full gap-4 font-extrabold ">
                <div
                  className="r-1yaxjkq text-black text-3xl"
                  onClick={() => {
                    slider1Ref?.current?.slickPrev();
                    slider2Ref?.current?.slickPrev();
                    slider3Ref?.current?.slickPrev();
                    slider4Ref?.current?.slickPrev();
                  }}
                >
                  {"<"}
                </div>
                <div
                  className="r-1yaxjkq text-black text-3xl"
                  onClick={() => {
                    slider1Ref?.current?.slickNext();
                    slider2Ref?.current?.slickNext();
                    slider3Ref?.current?.slickNext();
                    slider4Ref?.current?.slickNext();
                  }}
                >
                  {">"}
                </div>
              </div>
            </div>
            <div className="flex gap-3 overflow-x-hidden x-slider">
              <div className="w-52 rounded-lg">
                <Slider ref={slider2Ref} {...settings}>
                  {images2.map((image, idx) => (
                    <div key={idx}>
                      <Image
                        ref={imageRef}
                        src={image}
                        alt="Vercel Logo"
                        width={200}
                        height={50}
                        priority
                        className="transition-all delay-1000"
                        draggable="false"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-52 rounded-lg">
                <Slider ref={slider3Ref} {...settings}>
                  {images3.map((image, idx) => (
                    <div key={idx}>
                      <Image
                        ref={imageRef}
                        src={image}
                        alt="Vercel Logo"
                        width={200}
                        height={50}
                        priority
                        className="transition-all delay-1000"
                        draggable="false"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
              <div className="w-52 rounded-lg y-slider">
                <Slider ref={slider4Ref} {...settings} className="rounded-2xl">
                  {images4.map((image, idx) => (
                    <div key={idx} className="rounded-2xl">
                      <Image
                        ref={imageRef}
                        src={image}
                        alt="Vercel Logo"
                        width={200}
                        height={50}
                        priority
                        className="transition-all delay-1000"
                        draggable="false"
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
