import Image from 'next/image'
import { Inter } from 'next/font/google'

import HomeSection from "../components/HomeSection"
import Products from "./products/page"
import Incentives from "@/components/Incentives"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HomeSection name="Find Your Perfect Surfboard" />
      <Products />
      <Incentives />
    </main>
  )
}
