import Button from "@/components/Button";
import Carousel from "@/components/Carousel/Carousel";
import About from "@/components/Home/About";
import ProductCard from "@/components/ProductCard";

const products = [
  { text: "Who we are", href: "/about" },
  { text: "Vision", href: "/about" },
  { text: "Mission", href: "/about" },
  { text: "Careers", href: "/about" },
];

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="">
        <About />
        <section>
          <h4>Discover Our Range</h4>
          <div>
            <ProductCard />
          </div>
        </section>
      </main>
    </>
  );
}
