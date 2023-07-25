import React from "react";
import ProductCard from "./ProductCard";
import Button from "../Button";

const products = [
  {
    title: "Building Materials",
    desc: "Building expertise all here",
    url: "/products",
    img: "/images/building_materials.png",
  },
  {
    title: "Safety Products",
    desc: "",
    url: "/products",
    img: "/images/safety_items.png",
  },
  {
    title: "Hardware Items",
    desc: "",
    url: "/products",
    img: "/images/hardware_items.png",
  },
  {
    title: "Electrical Items",
    desc: "",
    url: "/products",
    img: "/images/electrical_items.png",
  },
  {
    title: "Plumbing items",
    desc: "",
    url: "/products",
    img: "/images/plumping_items.png",
  },
  { title: "Sanitaryware", desc: "", url: "/products", img: "/images/6.png" },
  {
    title: "Glass & Aluminium",
    desc: "",
    url: "/products",
    img: "/images/glass_aluminium.png",
  },
  {
    title: "Stationary items",
    desc: "",
    url: "/products",
    img: "/images/sanitaryware.png",
  },
  {
    title: "Computer items",
    desc: "",
    url: "/products",
    img: "/images/desktop.png",
  },
];

function Products() {
  return (
    <section className="mx-auto my-6 max-w-7xl  px-3">
      <h4 className="my-6 text-3xl font-bold text-green-800">
        Discover Our Range
      </h4>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((item, i) => (
          <ProductCard
            title={item.title}
            desc={item.desc}
            img={item.img}
            url={item.url}
            key={i}
          />
        ))}
      </div>
      <div className="flex items-center justify-center py-9">
        <Button>Explore our Products</Button>
      </div>
    </section>
  );
}

export default Products;
