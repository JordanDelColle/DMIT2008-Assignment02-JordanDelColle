import React, {useState} from 'react';

import {useNumberFormat} from './../../../../hooks/useNumberFormat'
import {AddProductStyles} from './styles'
import {ProductEditor} from './../../../products/ProductEditor'
import ProductPreview from './../../../../assets/images/no-image-selected.png'
import {EditorFeedback} from './../../../../components/products/EditorFeedback';
import {useAddNewProduct} from './../../../../hooks/useAddNewProduct'

const defaults = {
  name: 'Product Name',
  price: 0.00,
  description: 'Product Description',
  format: 'DVD'
}

function AddProduct ({children, ...props})  {
  const [isWriting, setIsWriting] = useState(false)
  const [productName, setProductName] = useState(defaults.name)
  const [productPrice, setProductPrice] = useState(defaults.price)
  const [productDescription, setProductDescription] = useState(defaults.description)
  const [productImage, setProductImage] = useState({previewImage:ProductPreview, file:null})
  const [productFormat, setProductFormat] = useState(defaults.format)
  const [loading, productLoader] = useAddNewProduct();
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

  function handleSubmit (e) {
    e.preventDefault();
    const productData = {
      productName,
      productPrice,
      productDescription,
      productFormat
    }
    setIsWriting(true)
    productLoader(productData, productImage.file)
    setProductName(defaults.name)
    setProductPrice(defaults.price)
    setProductDescription(defaults.description)
    setProductImage({previewImage:ProductPreview, file:null})
    setProductFormat(defaults.format)
  }
  if (isWriting)
  {
    return <EditorFeedback status={loading} writeCompleted={setIsWriting}/>
  }
  else
  {
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
        handleSubmit={handleSubmit}
        />
      </AddProductStyles>
)
  }
}

export default AddProduct