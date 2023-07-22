import Link from "next/link";

interface navItems {
  text: string;
  href: string;
  active: boolean;
}

function NavItem({ text, href, active }: navItems) {
  return (
    <li>
      <Link
        href={href}
        className={`px-1 py-3 font-bold  hover:border-b-2 hover:border-green-500 ${
          active ? "border-b-2 border-green-500" : ""
        }  `}
      >
        {text}
      </Link>
    </li>
  );
}

export default NavItem;
