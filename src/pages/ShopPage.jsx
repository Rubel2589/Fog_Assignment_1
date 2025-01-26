import React from 'react'
import Nav from '../Nav'
import Footer from '../Footer'
import Products from '../Products'
import Frame  from '../Frame'

const ShopPage = () => {
  return (
    <Nav>
        <div className="grid-cols-4"></div>
        <div className="">
            <img src="./contactHero.png" alt="" />
        </div>
      <Products classes="grid-cols-4"></Products>
      <Frame></Frame>
      <Footer></Footer>
    </Nav>
  )
}

export default ShopPage