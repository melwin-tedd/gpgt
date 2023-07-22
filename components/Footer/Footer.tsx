import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const Company_LIST = [
  { text: "Who we are", href: "/about" },
  { text: "Vision", href: "/about" },
  { text: "Mission", href: "/about" },
  { text: "Careers", href: "/about" },
];
const Download_LIST = [
  { text: "Company Profile", href: "/" },
  { text: "Catalogue", href: "/about" },
];
const Products_LIST = [
  { text: "Building Materials", href: "/" },
  { text: "Safety Products", href: "/about" },
  { text: "Hardware Tools", href: "/product" },
  { text: "Tools", href: "/gallery" },
  { text: "Electrical Items", href: "/contact" },
  { text: "Plumbing Items", href: "/contact" },
  { text: "Sanitaryware", href: "/contact" },
];
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/product" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <>
      <footer className="bg-blue-800 px-3 text-blue-100">
        <div className="mx-auto grid max-w-7xl grid-cols-6 gap-8 py-12 pb-16">
          <div className="col-span-3 space-y-6 pr-16">
            <h2 className="text-2xl font-bold text-white">
              Grand Palace General Trading L.L.C
            </h2>
            <p className="text-blue-300">
              GPGT offers top-quality service, professionalism, and integrity to
              utilities, businesses, and diverse trading sectors. We prioritize
              customer satisfaction and positive referrals, fueling our moderate
              growth and business expansion.
            </p>
            <div className="grid grid-cols-2">
              <div className="">
                <h5 className="text-blue-300">Call us now</h5>
                <div className="flex flex-col gap-2 text-lg font-bold">
                  <Link href="tel:+97142727815">+971 4 272 7815</Link>
                  <Link href="tel:+971507072273">+971 50 707 2273</Link>
                  <Link href="mail:+971">sales@gpgt.ae</Link>
                </div>
              </div>
              <div>
                <h5 className="text-blue-300">Follow us</h5>
                <div className="flex gap-3 text-2xl">
                  <CiFacebook className="stroke-1" />
                  <CiInstagram className="stroke-1" />
                  <CiTwitter className="stroke-1" />
                  <CiYoutube className="stroke-1" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="">
              <h6 className="mb-3 font-bold text-blue-400">Company</h6>
              <ul className="space-y-3">
                {Company_LIST.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.href}>{menu.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h6 className="mb-3 font-bold text-blue-400">Download</h6>
              <ul className="space-y-3">
                {Download_LIST.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.href}>{menu.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="">
            <h6 className="mb-3 font-bold text-blue-400">Products</h6>
            <ul className="space-y-3">
              {Products_LIST.map((menu, i) => (
                <li key={i}>
                  <Link href={menu.href}>{menu.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <h6 className="mb-3 font-bold text-blue-400">Quick Links</h6>
            <ul className="space-y-3">
              {MENU_LIST.map((menu, i) => (
                <li key={i}>
                  <Link href={menu.href}>{menu.text}</Link>
                </li>
              ))}
              <li>Request a Quote</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="bg-blue-900">
        <div className="mx-auto flex max-w-7xl justify-between  py-6 text-xs">
          <p className="text-blue-200">
            &copy; {new Date().getFullYear()} - All rights reserved by Grand
            Palace General Trading
          </p>

          <div className="space-x-6 text-blue-400">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms_conditions">Terms & Conditions</Link>
            <Link href="/help">Help & Support</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
