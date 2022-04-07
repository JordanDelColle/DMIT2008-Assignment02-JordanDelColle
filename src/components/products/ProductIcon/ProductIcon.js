import React from 'react';

import {ProductIconStyles} from './styles'
import DisplayCase from './../../../assets/images/dvd-case.png'

function ProductIcon ({children, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid, ...props})  {
  return (
        <ProductIconStyles  {...props}>
           <h3>${productPrice}</h3>
           <img src={imageUrl}/>
           <h2>{productName}</h2>
           <h4>Format: {productFormat}</h4>
           <p>{productDescription}</p>
        </ProductIconStyles>
  )
}

export default ProductIcon