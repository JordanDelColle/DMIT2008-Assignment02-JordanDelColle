import React from 'react';

import {ProductDataEntryForm} from './../ProductDataEntryForm'
import { ProductPreview } from "./../ProductPreview";
import {ProductEditorStyles} from './styles'

function ProductEditor ({children, productName, productPrice, pP, productDescription, productImage, productFormat, handleProductName, handleProductPrice, handlePP,  handleProductDescription, setProductImage, handleProductFormat, ...props})  {
  return (
        <ProductEditorStyles  {...props}>
          <ProductDataEntryForm 
            handleProductName={handleProductName}
            handleProductprice={handleProductPrice}
            handlePP={handlePP}
            handleProductDescription={handleProductDescription}
            setProductImage={setProductImage}
            handleProductFormat={handleProductFormat}
          />
          <ProductPreview 
          productName={productName}
          productPrice={productPrice}
          pP={pP}
          productDescription={productDescription}
          productImage={productImage}
          productFormat={productFormat}
          />

        </ProductEditorStyles>
  )
}

export default ProductEditor