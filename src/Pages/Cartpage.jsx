import React, { useState } from 'react'
import PageHeader from '../Components/PageHeader '
import Cart from '../Components/Cart'
function Cartpage() {
   
  return (
    <div className='pt-26'>
       <PageHeader  pageTitle=" Cart" pageRoute="/cart" />
      <Cart />

    
      
      
    </div>
  )
}

export default Cartpage
