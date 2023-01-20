import React from 'react'

import MainCarousel from '../component/carousel/Carousel'
import Combo from '../component/product/combo'
import Disease from '../component/product/Disease'
import Medicine from '../component/product/Medicine'
import LightningDeals from '../component/product/Product'
import Footer from '../Footer/Footer'
import HomeFooter from '../Footer/HomeFooter'

const Home = () => {
  return (
    <div>
        <MainCarousel/>
        <LightningDeals />
      <Combo />
      <Medicine />
      <Disease />
      <HomeFooter />
      <Footer />

    </div>
  )
}

export default Home