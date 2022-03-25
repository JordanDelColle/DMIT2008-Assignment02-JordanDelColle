import React from 'react'

import {PanelsStyles, PanelHeader, PanelBody} from './styles'

function EditProductPanel (title, ...props){
    return(
        <PanelsStyles>
            <PanelHeader>
                <h2>Edit Product</h2>
            </PanelHeader>
            <PanelBody></PanelBody>
        </PanelsStyles>
    )
}

export default EditProductPanel