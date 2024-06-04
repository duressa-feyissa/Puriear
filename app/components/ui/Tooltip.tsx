import Image from "next/image";

export const Tooltip = () => {
  const images = [
    "https://puriear.com/cdn/shop/files/1_d4e2640a-a187-4d39-aea2-857938ccc269.png?v=1708471251",

    "https://puriear.com/cdn/shop/files/2.png?v=1708471271",

    "https://puriear.com/cdn/shop/files/5_59040c50-96b3-4288-a7d3-bf61bd42a05f.png?v=1708471321",

    "https://puriear.com/cdn/shop/files/3.png?v=1708471283",

    "https://puriear.com/cdn/shop/files/4_87963b88-530b-4046-901f-01bf565cde7b.png?v=1708471292",
  ];
  return (
    <div className="flex flex-row items-center">
      {images.map((image, idx) => (
        <div className="-mr-4 relative group" key={idx}>
          <Image
            height={65}
            width={65}
            src={image}
            alt="Image"
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-[3px] group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
          />
        </div>
      ))}
    </div>
  );
};
