import React from "react";
import Image from "next/image";
import Link from 'next/link'
import Surf1 from "../public/surfboards img/surfboard-1.webp"
import Surf2 from "../public/surfboards img/surfboard-2.webp"
import Surf3 from "../public/surfboards img/surfboard-3.webp"

const FeatureProducts = () => {
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header class="text-center">
          <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <p class="max-w-md mx-auto mt-4 text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <ul class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          <li>
            <a href="#" class="relative block group">
              <Image
                src={Surf1}
                alt="board" height={500} width={350}
                class="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div class="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 class="text-xl font-medium text-white">Casual Trainers</h3>

                <span class="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FeatureProducts;
