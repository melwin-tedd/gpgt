"use client";

import { MouseEvent } from "react";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";

function Test() {
  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ clientX, clientY, currentTarget }: MouseEvent) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <div className="bg-slate-900 px-20 py-12">
      <div
        onMouseMove={handleMouseMove}
        className="group relative mx-auto h-96 max-w-md rounded-3xl border border-gray-700 bg-slate-800  p-6 "
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgb(14 165 233 / 0.2), transparent 80%`,
          }}
        />
        <div className="space-y-6 text-white">
          <h5>Content here</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut,
            quisquam non. Velit amet, odit dicta excepturi eaque modi iusto
            itaque ipsam? Vel, dolorum iure quis voluptatibus quam sequi animi
            iusto. Ea architecto odit, deserunt numquam mollitia inventore eum
            facere officia nam consectetur perspiciatis placeat atque id
            reprehenderit consequatur, voluptatum odio obcaecati explicabo
            aperiam delectus sunt sequi modi? Sed, porro necessitatibus?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
