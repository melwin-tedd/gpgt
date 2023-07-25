import Carousel from "@/components/Carousel/Carousel";
import Cta from "@/components/Cta/Cta";
import Expertise from "@/components/Expertise/Expertise";
import About from "@/components/Home/About";
import WhoWeAre from "@/components/Home/WhoWeAre";
import Products from "@/components/Products/Products";

export default function Home() {
  return (
    <>
      <Carousel />
      <main className="">
        <About />

        <Products />

        <WhoWeAre />

        <Expertise />

        <Cta />
      </main>
    </>
  );
}
