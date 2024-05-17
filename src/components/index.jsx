import Image from "next/image";

export default function About({ className, srcImage }) {
  return (
    <div
      className={`border-[10px] border-white rounded-[29px] bg-[#d4ffff] flex w-fit h-fit mt-[800px] ml-[-280px] z-10 p-5 gap-4${
        className || ""
      }`}
    >
      <div className="max-w-[600px] flex flex-col gap-4">
        <h2 className="font-[900px] text-[64px] text-black">About</h2>
        <h3 className="text-[#828282] text-2xl">
          Subheading for description or instructions
        </h3>
        <p className="text-black">
          Body text for your whole article or post. We&apos;ll put in some lorem
          ipsum to show how a filled-out page might look:
        </p>
        <p className="text-black">
          Excepteur efficient emerging, minim veniam anim aute carefully curated
          Ginza conversation exquisite perfect nostrud nisi intricate Content.
          Qui international first-class nulla ut. Punctual adipisicing,
          essential lovely queen tempor eiusmod irure. Exclusive izakaya
          charming Scandinavian impeccable aute quality of life soft power
          pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et
          Porter destination Toto remarkable officia Helsinki excepteur Basset
          hound. Zürich sleepy perfect consectetur.
        </p>
      </div>

      <div className="w-[500px] h-auto">
        <Image
          className="w-full h-full object-cover rounded-[8px]"
          src={srcImage}
          alt="Picture of the author"
          width={1024}
          height={1024}
        />
      </div>
    </div>
  );
}
