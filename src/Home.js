import React from 'react'
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {

  const data = {
    name : 'Kunal Store ',
    about : "At Kunal Store, we strive to provide an exceptional online shopping experience for our customers. With a wide range of products and a user-friendly interface, we aim to make your shopping journey convenient, enjoyable, and rewarding.",
    image : "./images/hero1.jpg",
  }
  return (
    <>
    <div><HeroSection myData={data} /></div>
    <FeatureProduct/>
    <Services/>
    <Trusted/>
    </>
  );
};

export default Home;
