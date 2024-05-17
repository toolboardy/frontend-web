import About from "@/components/About";
import imgAndrePortesiExample from "../../../public/andre-portolesi-4yz1a6z4qTg-unsplash.jpg";

export default function Page() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <About className="mt-10" srcImage={imgAndrePortesiExample} />
    </main>
  );
}
