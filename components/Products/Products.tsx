import React from "react";
import ProductCard from "./ProductCard";
import Button from "../Button";

const products = [
  {
    title: "Building Materials",
    desc: "Building expertise all here",
    url: "/products",
    img: "/images/1.png",
  },
  {
    title: "Safety Products",
    desc: "",
    url: "/products",
    img: "/images/2.png",
  },
  { title: "Hardware Items", desc: "", url: "/products", img: "/images/3.png" },
  {
    title: "Electrical Items",
    desc: "",
    url: "/products",
    img: "/images/4.png",
  },
  { title: "Plumbing items", desc: "", url: "/products", img: "/images/5.png" },
  { title: "Sanitaryware", desc: "", url: "/products", img: "/images/6.png" },
  {
    title: "Glass & Aluminium",
    desc: "",
    url: "/products",
    img: "/images/7.png",
  },
  {
    title: "Stationary items",
    desc: "",
    url: "/products",
    img: "/images/1.png",
  },
  { title: "Computer items", desc: "", url: "/products", img: "/images/2.png" },
];

function Products() {
  return (
    <section className="mx-auto my-6 max-w-7xl">
      <h4>Discover Our Range</h4>
      <div className="grid gap-6 px-3 md:grid-cols-2 lg:grid-cols-3">
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
