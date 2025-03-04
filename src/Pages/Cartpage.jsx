import React, { useState , useEffect } from 'react'
import PageHeader from '../Components/PageHeader '
import Cart from '../Components/Cart'
function Cartpage() {
  useEffect(() => {
      document.title = "Cart";
    }, []);
   
  return (
    <div className='pt-26'>
       <PageHeader  pageTitle=" Cart" pageRoute="/cart" />
      <Cart />

    
      
      
    </div>
  )
}

export default Cartpage
