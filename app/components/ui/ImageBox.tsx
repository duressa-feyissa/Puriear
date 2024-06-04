import Image from "next/image";

const ImageBox = ({ active, link, index, action }: { active: boolean; link: string, index: number, action: (index: number) => void }) => {
  return (
    <Image
      src={link}
      alt="image"
      width={100}
      onClick={() => action(index)}
      height={100}
      className={` rounded-2xl ${active ? "border border-black" : ""}`}
    />
  );
};

export default ImageBox;
