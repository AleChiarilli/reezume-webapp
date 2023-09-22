"use client";
import * as Toolbar from "@radix-ui/react-toolbar";
import * as Switch from "@radix-ui/react-switch";
import Image from "next/image";
import ReezumeLogo from "../../public/logo_reezume.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Toolbar.Root
        className="flex p-[10px] w-full min-w-max bg-zinc-200 shadow-[0_2px_10px] shadow-blackA7"
        aria-label="Formatting options"
      >
        <Image
          src={ReezumeLogo}
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div className="text-white self-center font-semibold text-2xl ml-4 mr-10 ">
          Reezume
        </div>
        <form>
          <div className="flex items-center">
            <label
              className="text-rose-500  leading-none pr-[15px]"
              htmlFor="airplane-mode"
            >
              Switch mode
            </label>
            <Switch.Root
              className="w-[42px] h-[25px]  bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
              id="airplane-mode"
            >
              <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
            </Switch.Root>
          </div>
        </form>
        <Toolbar.Button
          className="mx-[100px] text-white bg-rose-500  font-medium flex-shrink-0 flex-grow-0 basis-auto h-[40px] w-[140px] rounded inline-flex text-[13px] leading-none items-center justify-center outline-none hover:bg-rose-400 focus:relative focus:shadow-[0_0_0_2px] focus:shadow-violet7"
          style={{ marginLeft: "auto" }}
        >
          Create Resume
        </Toolbar.Button>
      </Toolbar.Root>
    </main>
  );
}
