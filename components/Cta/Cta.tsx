"use client";
import Link from "next/link";
import Lottie from "lottie-react";
import leadingLine from "./leading_line.json";

export default function Cta() {
  return (
    <div className="relative mx-auto my-9 flex max-w-7xl flex-col items-center justify-between bg-green-400 bg-[url(/icons/nut.svg)] bg-right-bottom bg-no-repeat px-24 py-16 text-center text-green-900 lg:flex-row lg:rounded-xl lg:text-left">
      <div className="space-y-2">
        <h2 className="text-6xl font-bold">Let{`'`}s talk</h2>
        <p className="pb-6 text-2xl lg:pb-0">About your project</p>
      </div>
      {/* <div className="absolute left-2/4 top-3 -mt-6 hidden h-[100px] w-[360px] -translate-x-1/2 lg:flex">
        <Lottie animationData={leadingLine} loop={true} />
      </div> */}
      <Link
        href="/about"
        className="h-max rounded-md border border-green-800 px-6 py-2 font-bold  transition-colors duration-300 hover:border-green-600 hover:bg-green-600"
      >
        Discuss with us now
      </Link>
    </div>
  );
}
