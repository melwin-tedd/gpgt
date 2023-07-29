import Link from "next/link";
import React from "react";

type Button = {
  children: React.ReactNode;
  href: string;
  active?: boolean;
};

function Button({ children, href, active }: Button) {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-start overflow-hidden rounded-md bg-gray-50 px-6 py-3 font-bold text-green-900 transition-all duration-150 ease-in-out "
    >
      <span
        className={`absolute bottom-0 left-0 h-1 w-full bg-green-600 transition-all duration-150 ease-in-out group-hover:h-full ${
          active ? "h-full" : ""
        }`}
      ></span>

      <span className="relative flex w-full items-center justify-center gap-3 transition-colors duration-200 ease-in-out group-hover:text-white">
        {children}
      </span>
    </Link>
  );
}

export default Button;
