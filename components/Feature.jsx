"use client"
import Image from "next/image";
import Link from 'next/link'
import Surf1 from "../public/surfboards img/surfboard-1.webp"
import Surf2 from "../public/surfboards img/surfboard-2.webp"
import Surf3 from "../public/surfboards img/surfboard-3.webp"
import { useProductContext } from '../app/context/productContext'
import Product from "./Product";

const Feature = () => {
    const { isLoading, featureProducts } = useProductContext();
    console.log(featureProducts)
    if (isLoading) {
        return <div>.......Loading</div>
    }
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            New Collection
          </h2>

          <h2 className="max-w-md mx-auto mt-4 text-gray-500">
          Ride the Wave of Style: Check Out Our Fresh Surf Collection
          </h2>
        </header>

        <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
          {
            featureProducts.map((curElem) => {
                return <Product key={curElem.id} {...curElem} />
            })
          }

          
        </ul>
      </div>
    </section>
  )
}

export default Feature