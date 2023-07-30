import Link from "next/link";

import { motion } from "framer-motion";

interface navItems {
  text: string;
  href: string;
  active: boolean;
}

function NavItem({ text, href, active }: navItems) {
  return (
    <Link
      href={href}
      className={`px-1 py-3 font-bold transition-colors duration-200 ease-out hover:text-green-500 focus:outline-green-600`}
    >
      {text}
    </Link>
  );
}

export default NavItem;
