import Image from "next/image";

export default function GlassContainer() {
  return (
    <div className="rounded-xl border border-white bg-white/50 p-3 drop-shadow-lg backdrop-blur-md">
      <Image src="" alt="" height={10} width={1} />
      <div>
        <h5 className="text-xl font-bold">Quality Products</h5>
        <p className="text-neutral-600">Uncompromising Quality, Every Time.</p>
      </div>
    </div>
  );
}
