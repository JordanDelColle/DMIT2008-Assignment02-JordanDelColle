import React from 'react'

import {PanelsStyles, PanelHeader, PanelBody, IconPanel} from './styles'
import {ProductIcon, EmptyIcon} from './../products/ProductIcon'

function AllProductsPanel (title, ...props){
    return(
        <PanelsStyles>
            <PanelHeader>
                <h2>All Products</h2>
            </PanelHeader>
            <PanelBody>
                <IconPanel>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                </IconPanel>
            </PanelBody>
            <PanelBody>
                <IconPanel>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                    <ProductIcon/>
                </IconPanel>
            </PanelBody>
            <PanelBody>
                <IconPanel>
                    <ProductIcon/>
                    <ProductIcon/>
                    <EmptyIcon/>
                    <EmptyIcon/>
                </IconPanel>
            </PanelBody>
        </PanelsStyles>
    )
}

export default AllProductsPanel