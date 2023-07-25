import Image from "next/image";

import { BsCheckLg } from "react-icons/bs";

function Expertise() {
  return (
    <section id="expertise" className="mx-auto my-6 max-w-7xl px-3 lg:px-0">
      <h3 className="mb-6 text-3xl font-medium">
        Building our <br />
        <span className="text-green-900">expertise, for you</span>
      </h3>
      <div className="grid grid-cols-1 gap-6 font-medium lg:grid-cols-3">
        {/* Delivery */}
        <div className="flex flex-col justify-between rounded-lg bg-[#9AD3CC] p-9 text-green-950">
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
        <div className="flex flex-col justify-between rounded-lg bg-indigo-500 p-9 text-white">
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
        <div className="flex flex-col justify-between rounded-lg bg-[#F5F5F5] p-9 text-indigo-700">
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
