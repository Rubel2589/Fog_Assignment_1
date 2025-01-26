import React from 'react'
import Nav from '../Nav'
import Hero from '../Hero'
import BrowseRange from '../BrowseRange'
import Products from '../Products'
import Rooms from '../Rooms'
import Footer from '../Footer'
const Home = () => {
  return (
    <Nav>
        <div className="grid-cols-3"></div>

        <Hero></Hero>
        <BrowseRange></BrowseRange>
        <Products classes = 'grid-cols-3'></Products>
        <Rooms></Rooms>
        <Footer></Footer>
    </Nav>
  )
}

export default Home