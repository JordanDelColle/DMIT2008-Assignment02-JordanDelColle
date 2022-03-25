import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductFormat} from './styles'


function ProductPreview ({children, productName, productPrice, pP, productDescription, productImage, productFormat, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage} alt="hello" width="320" height="184"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${pP}</ProductPrice>
          <ProductFormat>{productFormat}</ProductFormat>
          <ProductDescription>{productDescription}</ProductDescription>

        </ProductPreviewStyles>
  )
}

export default ProductPreview