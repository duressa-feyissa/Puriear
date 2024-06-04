"use client";
import Image from "next/image";
import { SetStateAction, useRef, useState } from "react";
import ImageBox from "./ImageBox";

import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const ParallelSlider = () => {
  const [active, setActive] = useState(0);
  const images = [
    "https://puriear.com/cdn/shop/files/VS_13.png?v=1715260288&width=416",
    "https://puriear.com/cdn/shop/files/VS_14.png?v=1715260288&width=416",
    "https://puriear.com/cdn/shop/files/VS_16.png?v=1715260288&width=416",
    "https://puriear.com/cdn/shop/files/productimage-min.png?v=1715260288&width=416",
    "https://puriear.com/cdn/shop/files/8-min.png?v=1715260288&width=416",
    "https://puriear.com/cdn/shop/files/happy-min.png?v=1715260288&width=416",
  ];

  const imageRef = useRef(null);
  const slider1Ref = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (_current: any, next: SetStateAction<number>) =>
      setActive(next),
    arrows: false,
    carousel: false,
    draggable: false,
  };

  function handleImageChange(index: number) {
    setActive(index);
    slider1Ref?.current?.slickGoTo(index);
  }

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className=" md:full max-w-[600px]">
        <Slider ref={slider1Ref} {...settings}>
          {images.map((image, idx) => (
            <div key={idx}>
              <Image
                ref={imageRef}
                src={image}
                alt="Vercel Logo"
                width={400}
                height={400}
                priority
                className="transition-all delay-1500 rounded-2xl image-gallery "
                draggable="true"
                style={{ width: "100%" }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="flex gap-4 flex-wrap w-full">
        {images.map((image, idx) => (
          <ImageBox
            key={idx}
            active={idx == active}
            link={image}
            index={idx}
            action={handleImageChange}
          />
        ))}
      </div>
    </div>
  );
};

export default ParallelSlider;
