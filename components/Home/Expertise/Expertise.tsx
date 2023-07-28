"use client";

import Image from "next/image";
import { BsCheckLg } from "react-icons/bs";

import { MouseEvent } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

function Expertise() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <section id="expertise" className="container my-16 px-3 lg:px-0">
      <h3 className="my-9 text-4xl font-medium">
        Building our <br />
        <span className="text-green-900">expertise, for you</span>
      </h3>
      <div className="grid grid-cols-1 gap-6 font-medium lg:grid-cols-3">
        {/* Delivery */}
        <div
          className=" group relative flex flex-col justify-between rounded-lg border border-[#7dd6cd] bg-[#9AD3CC] p-9 text-green-950"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-lg opacity-0 mix-blend-screen transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(204 233 230 / 0.2), transparent 80%`,
            }}
          />
          <div className="mb-12 flex justify-between">
            <p>Delivery</p>
            <Image
              src="/icons/delivery.svg"
              height={138}
              width={129}
              alt="Delivering with Care"
              className="-mt-6"
            />
          </div>
          <h6 className="text-3xl leading-[3rem]">
            Delivering with Care: Exceptional Service, Guaranteed Satisfaction!
          </h6>
          <div className="ml-auto mt-6 w-max rounded-full bg-[#66AAA0] p-3  ">
            <BsCheckLg />
          </div>
        </div>
        {/* Maintenance */}
        <div
          className="group relative flex flex-col justify-between rounded-lg border border-indigo-600 bg-indigo-500  p-9 text-white"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-lg opacity-0 mix-blend-screen transition duration-300 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(129 140 248 / 0.2), transparent 80%`,
            }}
          />
          <div className="mb-12 flex justify-between">
            <p>Maintenance</p>
            <Image
              src="/icons/maintenance.svg"
              height={135}
              width={135}
              alt="Empowering Efficiency in maintenance"
              className="-mt-6"
            />
          </div>
          <h6 className="text-3xl leading-[3rem]">
            Empowering Efficiency: Maintenance Services Tailored to Your Needs.
          </h6>
          <div className="ml-auto mt-6 w-max rounded-full bg-indigo-600 p-3 ">
            <BsCheckLg />
          </div>
        </div>
        {/* Warranty */}
        <div
          className=" group relative flex flex-col justify-between rounded-lg border border-indigo-100 bg-[#F5F5F5] p-9  text-indigo-700"
          onMouseMove={handleMouseMove}
        >
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-lg opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-100"
            style={{
              background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(255 255 255 / 0.4), transparent 80%`,
            }}
          />
          <div className="mb-12 flex justify-between">
            <p>Warranty</p>
            <Image
              src="/icons/warranty.svg"
              height={138}
              width={130}
              className="-mt-6"
              alt="Protecting Your Investment"
            />
          </div>
          <b className="text-3xl">12+</b>
          <small className="font-light">Months</small>
          <h6 className="text-3xl leading-[3rem]">
            Protecting Your Investment: Robust Warranty Coverage You Can Trust.
          </h6>
          <div className="ml-auto mt-6 w-max rounded-full bg-indigo-100 p-3">
            <BsCheckLg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
