import React from 'react'
import bannerImg from "../../assets/banner.png"
import Products from './Products'

function ShopPage() {
  return (
    <section className='min-h-screen'>
      {/* bannar image */}
      <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>
        <h1 className='text-5xl font-bold'>Shop Our Products</h1>
        

      </div>
      <Products headline={"whats your choice"}/>
    </section>
  )
}

export default ShopPage