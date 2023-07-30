"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";

import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { motion } from "framer-motion";
import NextNProgress from "nextjs-progressbar";

import Button from "../Button";
import NavItem from "@/components/Navbar/NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/products" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

const arialRounded = localFont({ src: "./Arial_rounded_bold.woff2" });

function Navbar() {
  const pathname = usePathname();

  const [navActive, setNavActive] = useState<boolean | null>(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  return (
    <>
      <nav className="sticky top-0 z-[9999] bg-white/80 py-2 drop-shadow backdrop-blur lg:px-3 lg:py-4">
        <div className="container flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/grand_palace_logo.png"
                width={44}
                height={38}
                alt="Grand Palace General Trading Logo"
              />
              <h2
                className={`${arialRounded.className} pt-2 text-lg uppercase leading-6 text-green-900 md:hidden`}
              >
                Grand Palace <br /> General Trading
              </h2>
              <h2
                className={`${arialRounded.className} hidden pt-2 text-lg uppercase leading-6 text-green-900 md:block`}
              >
                Grand Palace General Trading
              </h2>
            </div>
          </Link>
          <div
            onClick={() => setNavActive(!navActive)}
            className={`flex flex-col gap-1 lg:hidden`}
          >
            <div className="h-[3px] w-[25px] rounded-full bg-green-900"></div>
            <div className="h-[3px] w-[25px] rounded-full bg-green-900"></div>
            <div className="h-[3px] w-[25px] rounded-full bg-green-900"></div>
          </div>
          <div
            className={`${
              navActive
                ? "absolute inset-0 z-50 overflow-hidden bg-green-700"
                : "hidden"
            } lg:hidden`}
          >
            <div className="flex items-center justify-between p-3 ">
              <Link href="/">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/images/grand_palace_logo.png"
                    width={44}
                    height={38}
                    alt="Grand Palace General Trading Logo"
                  />
                  <h2
                    className={`${arialRounded.className} pt-2 text-lg uppercase leading-6 text-green-900`}
                  >
                    Grand Palace <br /> General Trading
                  </h2>
                </div>
              </Link>
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
              <div className="space-y-9 text-center">
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
                    Let{`'`}s Talk
                  </h5>
                  <Button href="/quote">Request a Quote</Button>
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
            <ul className="flex space-x-3 text-green-900">
              {MENU_LIST.map((menu, i) => (
                <>
                  <li key={i} className="relative">
                    <NavItem active={pathname === menu.href} {...menu} />
                    {pathname === menu.href && (
                      <motion.div
                        layoutId="active"
                        className="absolute inset-0 -bottom-3 mt-auto h-1 rounded-full bg-green-500"
                      />
                    )}
                  </li>
                </>
              ))}
            </ul>
            <Button href="/quote" active={pathname === "/quote"}>
              Request a Quote
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
