import Image from "next/image";

const Payments = () => {
  const images = [
    "https://puriear.com/cdn/shop/files/PayPal_8b2eba0f-4809-4986-9790-6dd62244cefe.png?v=1710320404",
    "https://puriear.com/cdn/shop/files/Mastercard.png?v=1710320246",
    "https://puriear.com/cdn/shop/files/Amex.png?v=1710320193",
    "https://puriear.com/cdn/shop/files/ApplePay.png?v=1710320035",
    "https://puriear.com/cdn/shop/files/GooglePay.png?v=1710319991",
    "https://puriear.com/cdn/shop/files/Visa.png?v=1710320298",
    "https://puriear.com/cdn/shop/files/Discover.png?v=1710319911",
    "https://puriear.com/cdn/shop/files/ShopPay_e713b6d6-d971-4114-bb3b-1b7715773051.png?v=1710319793",
  ];

  return (
    <div className="flex flex-row flex-wrap">
      {images.map((src, index) => (
        <Image
          key={index}
          src={src}
          width={46}
          height={46}
          alt={`Payment option ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default Payments;
