import React from 'react';

import {ProductIconStylesEmpty} from './styles'

function ProductIcon ({children, ...props})  {
  return (
        <ProductIconStylesEmpty  {...props}></ProductIconStylesEmpty>
  )
}

export default ProductIcon