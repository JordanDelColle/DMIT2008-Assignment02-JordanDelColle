import React, {useState} from 'react';

import {useNumberFormat} from './../../../../hooks/useNumberFormat'
import {AddProductStyles} from './styles'
import {ProductEditor} from './../../../products/ProductEditor'
import ProductPreview from './../../../../assets/images/no-image-selected.png'

function AddProduct ({children, ...props})  {
  const [productName, setProductName] = useState('Product Name')
  const [productPrice, setProductPrice] = useState('0.00')
  const [productDescription, setProductDescription] = useState('Product Description')
  const [productImage, setProductImage] = useState(ProductPreview)
  const [productFormat, setProductFormat] = useState('DVD')
  const formatter = useNumberFormat();

  function handleProductName (name) {
    setProductName(name)
  }
  function handleProductPrice (price) {
    setProductPrice(formatter(price))
  }
  function handleProductDescription (desc) {
    setProductDescription(desc)
  }

  function handleProductFormat (format) {
    setProductFormat(format)
  }
  return (
        <AddProductStyles  {...props}>
          <ProductEditor 
          productName={productName} 
          productPrice={productPrice} 
          productDescription={productDescription}
          productImage={productImage} 
          productFormat={productFormat}
          handleProductName={handleProductName}
          handleProductPrice={handleProductPrice}
          handleProductDescription={handleProductDescription}
          setProductImage={setProductImage}
          handleProductFormat={handleProductFormat}
          />
        </AddProductStyles>
  )
}

export default AddProduct