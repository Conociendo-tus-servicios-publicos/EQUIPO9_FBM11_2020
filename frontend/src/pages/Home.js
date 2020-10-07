import React from 'react';
import Pricing from '../components/Pricing';
import CardPricing from '../components/CardPricing';


import { data } from '../utils/mocks/data';




function Home () {
  return (
    <>
     <Pricing />
     <CardPricing  datos = { data } />
    </>
  );
}

export default Home;
