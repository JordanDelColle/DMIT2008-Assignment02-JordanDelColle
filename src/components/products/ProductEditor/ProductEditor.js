import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm'
import { ProductPreview } from "./../ProductPreview";
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, productDescription, productImage, productFormat, handleProductName,  handleProductDescription, setProductImage, handleProductFormat, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductPrice={handleProductPrice}
            handleProductDescription={handleProductDescription}
            setProductImage={setProductImage}
            handleProductFormat={handleProductFormat}
          />
          <ProductPreview 
            productName={productName}
            productPrice={productPrice}
            productDescription={productDescription}
            productImage={productImage}
            productFormat={productFormat}
          />
        </ProductEditorStyles>
  )
}

export default ProductEditor