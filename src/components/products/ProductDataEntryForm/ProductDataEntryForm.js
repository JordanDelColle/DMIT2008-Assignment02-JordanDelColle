import React from 'react';

import {ProductDataEntryFormStyles, ProductDescription, ProductImage, ProductName, ProductPrice, ProductFormat} from './styles'
import {TextArea} from './../../../ui/forms/textarea'
import {Label, Input} from './../../../ui/forms'
import {ProductImageDropBox} from './../ProductImageDropBox'
import {SubmitButton} from './../../../ui/buttons'

function ProductDataEntryForm ({children, handleProductName, handleProductPrice, handleProductDescription, setProductImage, handleProductFormat, handleSubmit, ...props})  {
  return (
        <ProductDataEntryFormStyles  {...props} onSubmit={handleSubmit}>
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
            <Input onChange={(e)=>handleProductPrice(e.target.value.trim())} maxLength={8}/>
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
          <SubmitButton type="submit">ADD PRODUCT</SubmitButton>
        </ProductDataEntryFormStyles>
  )
}

export default ProductDataEntryForm