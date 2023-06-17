import React from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from "./context/productcontex";

const About = () => {

  const { myName } = useProductContext();
  const {id} = useProductContext();

  const data ={
    name: "Kunal Stores welcome you",
    about : "We understand the importance of trust and reliability when it comes to online shopping. That's why we partner with reputable brands and suppliers to ensure that every product you find on our website meets our strict quality standards. We carefully curate our inventory to offer you products that are not only stylish and functional but also durable and long-lasting.",
    image : "./images/hero.jpg"
  }
  
  return (
    <>
      {myName}
      {id}
      <HeroSection myData={data}/>
    </>
  )
}

export default About