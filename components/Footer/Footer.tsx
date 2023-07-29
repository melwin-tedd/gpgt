import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const Company_LIST = [
  { text: "Who we are", href: "/about" },
  { text: "Vision", href: "/about" },
  { text: "Mission", href: "/about" },
  { text: "Careers", href: "/about" },
];
const Download_LIST = [
  { text: "Company Profile", href: "/about" },
  { text: "Catalogue", href: "/about" },
];
const Products_LIST = [
  { text: "Building Materials", href: "/products" },
  { text: "Safety Products", href: "/products" },
  { text: "Hardware Tools", href: "/products" },
  { text: "Tools", href: "/products" },
  { text: "Electrical Items", href: "/products" },
  { text: "Plumbing Items", href: "/products" },
  { text: "Sanitaryware", href: "/products" },
];
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Products", href: "/products" },
  { text: "Gallery", href: "/gallery" },
  { text: "Contact", href: "/contact" },
];

function Footer() {
  return (
    <>
      <footer className="bg-blue-800 px-3 text-blue-100">
        <div className="container grid gap-8 py-12 pb-16 md:grid-cols-6">
          <div className="col-span-3 space-y-3 md:space-y-6 md:pr-16">
            <h2 className="text-xl font-bold text-white md:text-2xl">
              Grand Palace General Trading L.L.C
            </h2>
            <p className="text-blue-300 ">
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
              <div className="flex flex-col items-center space-y-3">
                <h5 className="text-blue-300 ">Follow us</h5>
                <div className="mb-3 grid grid-cols-2 gap-3 text-4xl md:text-2xl lg:grid-cols-4">
                  <Link href="https://www.facebook.com">
                    <CiFacebook className="transition-colors duration-300 hover:text-green-600" />
                  </Link>

                  <Link href="https://www.instagram.com">
                    <CiInstagram className="transition-colors duration-300 hover:text-green-600" />
                  </Link>
                  <Link href="https://www.twitter.com">
                    <CiTwitter className="transition-colors duration-300 hover:text-green-600" />
                  </Link>
                  <Link href="https://www.youtube.com">
                    <CiYoutube className="transition-colors duration-300 hover:text-green-600" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-2 space-y-6 md:col-span-1">
            <div className="">
              <h6 className="mb-3 font-bold text-blue-400">Company</h6>
              <ul className="space-y-6">
                {Company_LIST.map((menu, i) => (
                  <li key={i}>
                    <Link href={menu.href}>{menu.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h6 className="mb-3 font-bold text-blue-400">Download</h6>
              <ul className="space-y-6">
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
            <ul className="space-y-6">
              {Products_LIST.map((menu, i) => (
                <li key={i}>
                  <Link href={menu.href}>{menu.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-3 md:col-span-1">
            <h6 className="mb-3 font-bold text-blue-400">Quick Links</h6>
            <ul className="space-y-6">
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
        <div className="container flex flex-col justify-between space-y-3 py-6 text-center text-xs md:flex-row md:space-y-0 md:text-left">
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
