"use client"
// import React, { useContext } from 'react'
import HomeSection from "../../components/HomeSection"
import { useProductContext } from "../context/productContext"


const About = () => {
  const { myName } = useProductContext();

  return (
    <>
    {myName}
      <HomeSection name="Surf Store" />
    </>
  )
}

export default About 