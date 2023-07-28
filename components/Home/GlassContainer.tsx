import Image from "next/image";

interface Card {
  title: string;
  img: string;
  desc: string;
}

export default function GlassContainer({ title, img, desc }: Card) {
  return (
    <div className="flex flex-row gap-3 rounded-xl border border-white bg-white/50 p-6 drop-shadow-lg backdrop-blur-md md:flex-col lg:flex-row">
      <Image
        src={img}
        alt={title}
        height={66}
        width={60}
        className="md:pl-3 lg:pl-0"
      />
      <div className="px-3">
        <h5 className="text-xl font-bold">{title}</h5>
        <p className="text-neutral-600">{desc}</p>
      </div>
    </div>
  );
}
