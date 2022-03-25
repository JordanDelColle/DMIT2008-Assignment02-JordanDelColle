import React from 'react'

import {PanelsStyles, PanelHeader, PanelBody} from './styles'
import {EditProduct} from './../products/widgets/EditProduct'

function EditProductPanel (title, ...props){
    return(
        <PanelsStyles>
            <PanelHeader>
                <h2>Edit Product</h2>
            </PanelHeader>
            <PanelBody>
                <EditProduct/>
            </PanelBody>
        </PanelsStyles>
    )
}

export default EditProductPanel