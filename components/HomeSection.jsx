import React from 'react'
import Image from 'next/image'
import HeroImg from "../public/Hero.png"
import HeroSurfImg from "../public/Hero-surf.png"


const HomeSection = ({ name }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center md:justify-between  ">
        <div className=" md:w-2/5 lg:pr-8 md:pr-4 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-3xl md:text-4xl text-3xl mb-4  text-gray-900 sm:font-semibold font-medium">
            {name}
          </h1>
          <p className="mb-8 leading-relaxed text-[20px] ">Ride the Wave of Style: Premium Surfboards Await. Dive into Exceptional Craftsmanship. </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-sky-400 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded text-lg">Buy Now</button>
            
          </div>
        </div>
        <div className=" ">
          <Image className="object-cover object-center rounded" alt="hero" src={HeroSurfImg} width={820} height={500} />
        </div>
      </div>
    </section>
  )
}

export default HomeSection