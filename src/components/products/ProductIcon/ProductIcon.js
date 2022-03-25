import React from 'react';

import {ProductIconStyles} from './styles'
import DisplayCase from './../../../assets/images/dvd-case.png'

function ProductIcon ({children, ...props})  {
  return (
        <ProductIconStyles  {...props}>
           <h3>$0.00</h3>
           <img src={DisplayCase}/>
           <h2>Product Name</h2>
           <h4>Format: DVD</h4>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when...</p>

        </ProductIconStyles>
  )
}

export default ProductIcon