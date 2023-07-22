"use client";

import NavItem from "@/components/Navbar/NavItem";
import Image from "next/image";
import { useState } from "react";
import Button from "../Button";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/product" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

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
        <h2>Grand Palace General Trading</h2>
      </div>
      <div className="flex items-center gap-6">
        {MENU_LIST.map((menu, idx) => (
          <ul
            onClick={() => {
              setActiveIdx(idx);
              setNavActive(false);
            }}
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
