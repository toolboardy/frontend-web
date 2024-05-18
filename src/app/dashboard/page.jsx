import Image from "next/image";
import SideBar from "../../components/user UI/sidelbar"

export default function About({ className, srcImage }) {
  return (
    <div className="flex bg-black ">
        <SideBar />
        <div className="m-8 w-full bg-neutral-950 rounded-lg"></div>
    </div>
  );
}
