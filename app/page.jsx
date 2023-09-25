import { Inter } from 'next/font/google'

import HomeSection from "../components/HomeSection"
import Products from "./products/page"
import Incentives from "@/components/Incentives"
import FeatureProducts from '@/components/FeatureProducts'
import Feature from '@/components/Feature'
// import FeatureProducts from "../components/FeatureProducts"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <HomeSection name="Find Your Perfect Surfboard" />
      <Feature />
      {/* <FeatureProducts /> */}
      <Products />
      <Incentives />
    </main>
  )
}
