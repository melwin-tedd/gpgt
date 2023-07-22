import Button from "@/components/Button";
import Carousel from "@/components/Carousel/Carousel";
import About from "@/components/Home/About";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="">
        <About />
        <section>
          <h4>Discover Our Range</h4>
        </section>
      </main>
    </>
  );
}
