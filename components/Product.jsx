import React from 'react'
import Image from 'next/image';
import Link from 'next/link'

const Product = (curElem) => {
    const {id, name, image, price} = curElem;
  return (
    <div key={id}   >
            <div className="relative block group">
              <Image
                src={image}
                alt="board" height={500} width={350}
                className="object-cover w-full transition duration-500 aspect-square group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                {/* <h3 className="text-xl font-medium text-customColor">{name}</h3> */}

                <span className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white">
                  Shop Now
                </span>
              </div>
            </div>
          </div>
  )
}

export default Product