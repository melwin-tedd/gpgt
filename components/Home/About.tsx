import Button from "@/components/Button";
import Link from "next/link";
import React from "react";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FiPlay } from "react-icons/fi";

function About() {
  return (
    <section id="intro" className=" bg-[#E6E6DF] px-6 py-32">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-green-800">
              About Grand Palace
            </h2>
            <p>
              Since 2022, Grand Palace General Trading L.L.C., located in Dubai,
              has been delivering exceptional Import, Export, Wholesale, and
              Retail services to the region. Our company is fortified by a team
              of highly skilled professionals with extensive expertise in the
              areas of procurement, sales, delivery, and after-sales support
              across various industries and product categories.
            </p>
            <div>
              <Link
                href="/about"
                className="rounded-md border border-green-800 px-6 py-2 font-bold text-green-800 transition-colors duration-300 hover:border-green-400 hover:bg-green-400"
              >
                Who we are, what we stand for
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-800">Follow us</h3>
            <div className="flex gap-3 text-3xl ">
              <CiFacebook />
              <CiInstagram />
              <CiTwitter />
              <CiYoutube />
            </div>
          </div>
        </div>

        <div className="col-span-2 flex w-full items-end rounded-lg bg-blue-400 p-6">
          <Button>
            <FiPlay className="text-xl " />
            Play Video
          </Button>
        </div>
      </div>
    </section>
  );
}

export default About;
