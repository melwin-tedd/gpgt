"use client";

import NavItem from "@/components/Navbar/NavItem";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";
import localFont from "next/font/local";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/product" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

const arialRounded = localFont({ src: "./Arial_rounded_bold.woff2" });

function Navbar() {
  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 ">
      <div className="flex items-center space-x-3">
        <Image
          src="/images/grand_palace_logo.png"
          width={44}
          height={38}
          alt="Grand Palace General Trading Logo"
        />
        <h2
          className={`${arialRounded.className} pt-2 text-lg uppercase text-green-900`}
        >
          Grand Palace General Trading
        </h2>
      </div>
      <div
        onClick={() => setNavActive(!navActive)}
        className={`flex flex-col gap-1 lg:hidden`}
      >
        <div className="h-[3px] w-[25px] bg-green-900"></div>
        <div className="h-[3px] w-[25px] bg-green-900"></div>
        <div className="h-[3px] w-[25px] bg-green-900"></div>
      </div>
      <div
        className={`${
          navActive
            ? "absolute inset-0 z-50 overflow-hidden bg-green-700"
            : "hidden"
        } lg:hidden`}
      >
        <div className="flex items-center justify-between p-3 ">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/grand_palace_logo.png"
              width={44}
              height={38}
              alt="Grand Palace General Trading Logo"
            />
            <h2
              className={`${arialRounded.className} pt-2 text-lg uppercase text-white`}
            >
              Grand Palace General Trading
            </h2>
          </div>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`flex flex-col gap-1 bg-white p-3 lg:hidden`}
          >
            <div className="h-[3px] w-[25px] bg-green-900"></div>
            <div className="h-[3px] w-[25px] bg-green-900"></div>
            <div className="h-[3px] w-[25px] bg-green-900"></div>
          </div>
        </div>
        <div className="mx-auto flex h-full w-max flex-col items-center justify-between gap-6 py-32">
          <div className=" space-y-9 text-center">
            {MENU_LIST.map((menu, idx) => (
              <ul
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
                className="uppercase text-white"
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </ul>
            ))}
            <div>
              <h5 className="mb-3 text-center font-semibold text-green-300">
                Let's Talk
              </h5>
              <Button>Request a Quote</Button>
            </div>
          </div>
          <div className="text-center">
            <h5 className="mb-3 font-semibold text-green-300">Follow us</h5>
            <div className="flex gap-6 text-3xl text-green-100">
              <CiFacebook className="stroke-[1px]" />
              <CiInstagram className="stroke-[1px]" />
              <CiTwitter className="stroke-[1px]" />
              <CiYoutube className="stroke-[1px]" />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop  */}
      <div className={`hidden items-center gap-6 lg:flex`}>
        {MENU_LIST.map((menu, idx) => (
          <ul
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
            className="text-green-900"
            key={menu.text}
          >
            <NavItem active={activeIdx === idx} {...menu} />
          </ul>
        ))}
        <Button>Request a Quote</Button>
      </div>
    </nav>
  );
}

export default Navbar;
