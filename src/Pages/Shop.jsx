import React from 'react'
import PageHeader from '../Components/PageHeader '
import ProductGrid from '../Components/ProductGrid '
import Footer from '../Components/Footer'



function Shop() {
  return (
    <div className='pt-26'>
      <PageHeader pageTitle="Products" pageRoute="/shop" />
      <ProductGrid/>
      <Footer />

     
      
      
    </div>
  )
}

export default Shop
