import React from 'react'
import Hero from '../../components/Hero/Hero'
import Products from '../../components/Product/Products'
import Footer from '../../components/Footer/Footer'
import Brands from '../../components/Brands/Brands'

function Home() {
  return (
    <>
    <div>
        <Hero/>
    </div>
      <Brands />
      <div className="home-product">
        <Products />
      </div>
      <Footer/>
    </>
  )
}

export default Home