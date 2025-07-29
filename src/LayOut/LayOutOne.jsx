import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import ResponsiveNav from '../components/ResponsiveNav'




const layOutOne = () => {
  return (
    <>
    


    <Navbar/>
    <ResponsiveNav/>
    <Outlet/>
    
    </>
  )
}

export default layOutOne