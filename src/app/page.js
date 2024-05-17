import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-neutral-900">
      <div className="p-12 bg-sky-800">
        <h1 className="text-5xl text-sky-200 text-semibold">Accesibility, </h1>
        <h1 className="text-5xl text-sky-200 text-semibold flex mt-4">Tried your <h1 className=" mx-4 text-amber-600">Theme</h1></h1>
        <h1 className="text-5xl text-sky-200 text-semibold mt-4">Now </h1>

        <div className="flex mt-48">
          <button className="p-2 rounded-lg bg-sky-200"><a href="">Read More</a></button>
          <button className="p-2 rounded-lg bg-sky-200 mx-4"><a href="">Tried Demo</a></button>
        </div>
      </div>
    </main>
  );
}
