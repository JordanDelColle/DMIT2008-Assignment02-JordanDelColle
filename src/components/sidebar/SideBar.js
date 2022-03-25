import React from 'react'

import {SideBarStyles} from './styles'
import ProductOptions from './ProductOptions'

function SideBar (props){
    return(
        <SideBarStyles>
            <ProductOptions/>
        </SideBarStyles>
    )
}

export default SideBar