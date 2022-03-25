import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice, ProductFormat} from './styles'
import {TextArea} from './../../../ui/forms/textarea'
import {Label, Input} from './../../../ui/forms'
import {ProductImageDropBox} from './../ProductImageDropBox'

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handlePP, handleProductDescription, setProductImage, handleProductFormat, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props}>
          <ProductImage>
            <Label>Image</Label>
            <ProductImageDropBox setProductImage={setProductImage}/>
          </ProductImage>
          <fieldset>
          <ProductName>
            <Label>Name</Label>
            <Input onChange={(e)=>handleProductName(e.target.value.trim())} maxLength={30}/>
          </ProductName>
          <ProductPrice>
            <Label>Price</Label>
            <Input onChange={(e)=>handlePP(e.target.value.trim())} maxLength={8}/>
          </ProductPrice>
          <ProductFormat>
            <Label>Format</Label>
            <Input onChange={(e)=>handleProductFormat(e.target.value.trim())} maxLength={10}/>
          </ProductFormat>
          </fieldset>

          <ProductDescription>
            <Label>Description</Label>
            <TextArea onChange={(e)=>handleProductDescription(e.target.value.trim())} maxLength={180} rows={6}/>
          </ProductDescription>

        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm