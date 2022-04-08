import React from 'react';
import {BsPencil, BsTrash} from 'react-icons/bs'

import {ProductIconStyles, IconDiv, Icons} from './styles'

function ProductIcon ({children, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid, ...props})  {
  return (
        <ProductIconStyles  {...props}>
           <h3>${productPrice}</h3>
           <img src={imageUrl}/>
           <h2>{productName}</h2>
           <h4>Format: {productFormat}</h4>
           <p>{productDescription}</p>
           <Icons>
            <IconDiv className='aaa'>
              <BsPencil/>
            </IconDiv>
            <IconDiv className='bbb'>
            <BsTrash/>
            </IconDiv>
           </Icons>
        </ProductIconStyles>
  )
}

export default ProductIcon