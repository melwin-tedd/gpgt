import Image from "next/image";
import Link from "next/link";

export interface Products {
  title: string;
  desc: string;
  img: string;
  url: string;
}

function ProductCard({ title, desc, img, url }: Products) {
  return (
    <div className="group flex overflow-hidden rounded-lg border-b-4 border-neutral-50 bg-neutral-50 shadow transition duration-300 hover:cursor-pointer hover:border-green-500 hover:shadow-xl">
      <Image src={img} height={185} alt={title} width={180} className="py-6" />
      <div className="space-y-3 p-6 ">
        <h2 className="text-lg font-bold group-hover:text-blue-950">{title}</h2>
        <Link
          href={url}
          className="text-sm text-neutral-400 transition-colors duration-300 group-hover:text-green-600"
        >
          View {`>`}
        </Link>
        <p className="text-xs">{desc}</p>
      </div>
    </div>
  );
}

export default ProductCard;
