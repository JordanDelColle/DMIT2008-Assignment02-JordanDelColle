import React from 'react';

import {ProductPreviewStyles, ProductImage, ProductName, ProductPrice, ProductDescription, ProductFormat} from './styles'

function ProductPreview ({children, productName, productPrice, productDescription, productImage, productFormat, ...props})  {
  return (
        <ProductPreviewStyles  {...props}>
          <ProductImage>
            <img src={productImage.previewImage} alt="No image selected" width="320" height="184"/>
          </ProductImage>
          <ProductName>{productName}</ProductName>
          <ProductPrice>${productPrice}</ProductPrice>
          <ProductFormat>{productFormat}</ProductFormat>
          <ProductDescription>{productDescription}</ProductDescription>
        </ProductPreviewStyles>
  )
}

export default ProductPreview