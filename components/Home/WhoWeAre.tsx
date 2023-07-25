import Image from "next/image";
import GlassContainer from "./GlassContainer";

function WhoWeAre() {
  return (
    <>
      <section className="grid grid-cols-2 items-center bg-green-500">
        <Image
          src="/images/warehouse.jpg"
          alt=" "
          height={440}
          width={660}
          className="h-full w-full object-cover"
        />
        <div className="space-y-6 px-16 text-white">
          <h5 className="text-2xl font-bold">
            Grand Palace General Trading LLC
          </h5>
          <p className="max-w-2xl text-lg leading-8">
            Since 2022, Grand Palace General Trading L.L.C., located in Dubai,
            has been delivering exceptional Import, Export, Wholesale, and
            Retail services to the region. Our company is fortified by a team of
            highly skilled professionals with extensive expertise in the areas
            of procurement, sales, delivery, and after-sales support across
            various industries and product categories.
          </p>
        </div>
      </section>
      <div className="mx-auto -mt-9 grid max-w-7xl grid-cols-3 gap-4">
        <GlassContainer />
        <GlassContainer />
        <GlassContainer />
      </div>
    </>
  );
}

export default WhoWeAre;
