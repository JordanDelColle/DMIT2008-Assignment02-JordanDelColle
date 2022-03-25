import React from 'react'

import {PanelsStyles, PanelHeader, PanelBody} from './styles'
import {AddProduct} from './../products/widgets/AddProduct'

function AddProductPanel (title, ...props){
    return(
        <PanelsStyles>
            <PanelHeader>
                <h2>Add Product</h2>
            </PanelHeader>
            <PanelBody>
                <AddProduct/>
            </PanelBody>
        </PanelsStyles>

    )
}

export default AddProductPanel