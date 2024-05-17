import Image from "next/image";
import About from '../components/index'
import imgAndrePortesiExample from '../../public/andre-portolesi-4yz1a6z4qTg-unsplash.jpg'
export default function Home() {
  return (
    <main className="flex min-h-screen bg-white text-neutral-900">
      <div className="flex">
        <div className="p-12 bg-sky-800 sticky">
          <h1 className="text-5xl text-sky-200 text-semibold">Accesibility, </h1>
          <h1 className="text-5xl text-sky-200 text-semibold flex mt-4">Try your <h1 className=" mx-4 text-amber-600">Theme</h1></h1>
          <h1 className="text-5xl text-sky-200 text-semibold mt-4">Now </h1>

          <div className="my-12">
            <div className="flex my-4">
            <svg className="text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="currentColor"><path fill-rule="evenodd" d="M9.315 7.584A15.723 15.723 0 0 1 21.75 1.5a.75.75 0 0 1 .75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 0 1 9.75 22.5a.75.75 0 0 1-.75-.75v-4.131A15.838 15.838 0 0 1 6.382 15H2.25a.75.75 0 0 1-.75-.75a6.75 6.75 0 0 1 7.815-6.666M15 6.75a2.25 2.25 0 1 0 0 4.5a2.25 2.25 0 0 0 0-4.5" clip-rule="evenodd"/><path d="M5.26 17.242a.75.75 0 1 0-.897-1.203a5.243 5.243 0 0 0-2.05 5.022a.75.75 0 0 0 .625.627a5.243 5.243 0 0 0 5.022-2.051a.75.75 0 1 0-1.202-.897a3.744 3.744 0 0 1-3.008 1.51c0-1.23.592-2.323 1.51-3.008"/></g></svg>
              <h1 className="place-self-center mx-4 text-xl ">Fast</h1>
            </div>
            <div className="flex my-4">
            <svg className="text-amber-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.738 16.13a1 1 0 0 1-.19.61a1 1 0 0 1-.52.38l-1.71.57a3.57 3.57 0 0 0-1.4.86a3.5 3.5 0 0 0-.86 1.4l-.6 1.7a1 1 0 0 1-.36.51a1.08 1.08 0 0 1-.62.19a1 1 0 0 1-1-.71l-.57-1.71a3.5 3.5 0 0 0-.86-1.4a3.789 3.789 0 0 0-1.4-.87l-1.71-.56a1.11 1.11 0 0 1-.51-.37a1.08 1.08 0 0 1-.21-.62a1 1 0 0 1 .71-1l1.72-.57a3.54 3.54 0 0 0 2.28-2.28l.57-1.69a1 1 0 0 1 .95-.73c.215 0 .426.059.61.17c.182.125.322.303.4.51l.58 1.74a3.54 3.54 0 0 0 2.28 2.28l1.7.6a1 1 0 0 1 .51.38a1 1 0 0 1 .21.61m-9.999-6.36a1 1 0 0 1-.17.55a1 1 0 0 1-.47.35l-1.26.42c-.353.122-.673.32-.94.58a2.48 2.48 0 0 0-.58.94l-.43 1.24a.89.89 0 0 1-.35.47a1 1 0 0 1-.56.18a1 1 0 0 1-.57-.19a1 1 0 0 1-.34-.47l-.41-1.25a2.44 2.44 0 0 0-.58-.93a2.22 2.22 0 0 0-.93-.58l-1.25-.42a.93.93 0 0 1-.48-.35a1 1 0 0 1 .48-1.47l1.25-.41a2.49 2.49 0 0 0 1.53-1.53l.41-1.23a1 1 0 0 1 .32-.47a1 1 0 0 1 .55-.2a1 1 0 0 1 .57.16a1 1 0 0 1 .37.46l.42 1.28a2.49 2.49 0 0 0 1.53 1.53l1.25.43a.92.92 0 0 1 .46.35a.94.94 0 0 1 .18.56m5.789-5.36a1 1 0 0 1-.17.51a.82.82 0 0 1-.42.3l-.62.21a.84.84 0 0 0-.52.52l-.22.63a.929.929 0 0 1-.29.39a.82.82 0 0 1-.52.18a1.08 1.08 0 0 1-.49-.15a.92.92 0 0 1-.32-.44l-.21-.62a.719.719 0 0 0-.2-.32a.76.76 0 0 0-.32-.2l-.62-.2a1 1 0 0 1-.42-.31a.88.88 0 0 1-.16-.51a.94.94 0 0 1 .17-.51a.88.88 0 0 1 .42-.3l.61-.2a.91.91 0 0 0 .33-.2a.939.939 0 0 0 .2-.33l.21-.62c.06-.155.155-.292.28-.4a1 1 0 0 1 .49-.19a.94.94 0 0 1 .53.16a1 1 0 0 1 .32.41l.21.64a.942.942 0 0 0 .2.33a1 1 0 0 0 .32.2l.63.21a1 1 0 0 1 .41.3a.87.87 0 0 1 .17.51"/></svg>
              <h1 className="place-self-center mx-4 text-xl">Intuitive</h1>
            </div>
            <div className="flex items-center my-4">
            <svg className="text-red-500" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.046 8.744a8.375 8.375 0 0 1-2.096-5.99a.738.738 0 0 0-.28-.589a.72.72 0 0 0-.648-.14c-6.609 1.628-7.457 4.872-7.537 9.983A10.75 10.75 0 0 1 6.49 9.432l-.27-.419a.729.729 0 0 0-.599-.35a.689.689 0 0 0-.629.29a8.205 8.205 0 0 0-1.168 8.585C5.231 20.373 8.295 22 12.248 22a8.705 8.705 0 0 0 6.11-2.535a8.565 8.565 0 0 0 2.535-6.11a6.908 6.908 0 0 0-1.847-4.611m-1.727 6.818a6.07 6.07 0 0 1-3.883 3.244a6.29 6.29 0 0 1-1.607.21a5.501 5.501 0 0 1-.998-.08a1.012 1.012 0 0 1 .33-1.997c.578.09 1.17.06 1.736-.09a4.184 4.184 0 0 0 1.547-.808a3.993 3.993 0 0 0 1.068-1.378c.257-.53.393-1.109.4-1.697a.998.998 0 0 1 1.996 0a5.992 5.992 0 0 1-.609 2.596z"/></svg>
              <h1 className="place-self-center mx-4 text-xl">Free</h1>
            </div>
          </div>

          <div className="flex mt-24">
            <button className="p-2 rounded-lg bg-sky-200"><a href="">Read More</a></button>
            <button className="p-2 rounded-lg bg-sky-200 mx-4"><a href="/login">Tried Demo</a></button>
          </div>
        </div>
        <div className="flex justify-center place-self-center ml-36">
          <h1 className="text-7xl text-sky-500 place-self-center mt-[-500px]">Toolboardy</h1>
          <About className="mt-24" srcImage={imgAndrePortesiExample} />
        </div>
      </div>
      <div className="mt-94">

      </div>
      
    </main>
  );
}
