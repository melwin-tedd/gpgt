import Image from "next/image";
import GlassContainer from "./GlassContainer";

const cardContent = [
  {
    title: "Quality Products",
    desc: "Uncompromising Quality, Every Time.",
    img: "/icons/quality.svg",
  },
  {
    title: "Affordable Prices",
    desc: "Unbeatable value for your budget.",
    img: "/icons/prices.svg",
  },
  {
    title: "On-Time Delivery",
    desc: "Timely deliveries, guaranteed.",
    img: "/icons/package.svg",
  },
];

function WhoWeAre() {
  return (
    <>
      <section className="grid items-center bg-green-500 md:grid-cols-2">
        <Image
          src="/images/warehouse.jpg"
          alt=" "
          height={440}
          width={660}
          className="h-full w-full object-cover"
        />
        <div className="space-y-6 px-6 py-12 text-white md:px-16 md:py-0">
          <h5 className="pt-9 text-2xl  font-bold">
            Grand Palace General Trading LLC
          </h5>
          <p className="max-w-2xl pb-12 text-xl leading-8 lg:pb-0">
            Since 2022, Grand Palace General Trading L.L.C., located in Dubai,
            has been delivering exceptional Import, Export, Wholesale, and
            Retail services to the region. Our company is fortified by a team of
            highly skilled professionals with extensive expertise in the areas
            of procurement, sales, delivery, and after-sales support across
            various industries and product categories.
          </p>
        </div>
      </section>
      <div className="container grid gap-4 py-6 md:-mt-9 md:grid-cols-3 md:py-0">
        {cardContent.map((item, i) => (
          <GlassContainer
            key={i}
            title={item.title}
            desc={item.desc}
            img={item.img}
          />
        ))}
      </div>
    </>
  );
}

export default WhoWeAre;
