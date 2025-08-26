import React from 'react'
import Banner from '../components/Banner'
import Service from '../components/service'
import Explore from '../components/Explore'
import Reco from '../components/Reco'
import Best_seller from '../components/Best_seller'
import NewColletion from '../components/NewColletion'
import Footer from '../components/Footer'

import Details from './Details'
import CheckOutpage from './CheckOutpage'

const Home = () => {
  return (
    <>
    
    <Banner/>
    <Service/>
    <Explore/>
    <Reco/>
    <Best_seller/>
    <Details/>
    <CheckOutpage/>
    <NewColletion/>
    <Footer/>
    
    </>
  )
}

export default Home