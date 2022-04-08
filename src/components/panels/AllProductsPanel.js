import React from 'react'

import {PanelsStyles, PanelBody, IconPanel} from './styles'
import {ProductIcon, EmptyIcon} from './../products/ProductIcon'
import {useGetAllProducts} from '../../hooks/useGetAllProducts'

function AllProductsPanel (title, ...props){
    const productData = useGetAllProducts();
    const fullRowLength = 4

    let myProducts = productData.map(({id, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid})=> <ProductIcon key={id} imageStoragePath={imageStoragePath} imageUrl={imageUrl} productDescription={productDescription} productFormat={productFormat}
    productName={productName} productPrice={productPrice} uid={uid}/>);
    let myRows = myProducts.length;
    function getFullRowCount() {
        
        let count = myRows/4;
        return count;
    }
    function getPartRowCount()
    {
        let count = myRows%4;
        return count;
    }
    let fullRowCount = getFullRowCount()
    let partRowCount = getPartRowCount()
    let rowLength = 0
    let currentProduct = 0
    let currentRow = 1;

    function createProductCards () {
        let oneRow = []
        
        let allRows = []

            while (rowLength < fullRowLength)
            {

                var currentRowData;
                if (fullRowCount > currentRow)
                {
                    currentRowData = 
                    (<PanelBody>
                        <IconPanel>
                            {myProducts[currentProduct]}
                            {myProducts[currentProduct+1]}
                            {myProducts[currentProduct+2]}
                            {myProducts[currentProduct+3]}
                        </IconPanel>
                    </PanelBody>)
                }
                else
                {
                    if (partRowCount == 0)
                    {
                        currentRowData = 
                        (<PanelBody>
                            <IconPanel>
                                {myProducts[currentProduct]}
                                {myProducts[currentProduct+1]}
                                {myProducts[currentProduct+2]}
                                {myProducts[currentProduct+3]}
                            </IconPanel>
                        </PanelBody>)
                    }
                    if (partRowCount == 1)
                    {
                        currentRowData = 
                        (<PanelBody>
                            <IconPanel>
                                {myProducts[currentProduct]}
                                {<EmptyIcon/>}
                                {<EmptyIcon/>}
                                {<EmptyIcon/>}
                            </IconPanel>
                        </PanelBody>)
                    }
                    if (partRowCount == 2)
                    {
                        currentRowData = 
                        (<PanelBody>
                            <IconPanel>
                                {myProducts[currentProduct]}
                                {myProducts[currentProduct+1]}
                                {<EmptyIcon/>}
                                {<EmptyIcon/>}
                            </IconPanel>
                        </PanelBody>)
                    }
                    if (partRowCount == 3)
                    {
                        currentRowData = 
                        (<PanelBody>
                            <IconPanel>
                                {myProducts[currentProduct]}
                                {myProducts[currentProduct+1]}
                                {myProducts[currentProduct+2]}
                                {<EmptyIcon/>}
                            </IconPanel>
                        </PanelBody>)
                    }

                }
                oneRow.push(currentRowData)
                currentProduct+=4;
                rowLength++;
                currentRow++;
            }
            rowLength = 0;
            allRows.push(oneRow)
            oneRow = []
        return allRows;
    }
    let allProducts = createProductCards()
    return (
        <PanelsStyles>
            {allProducts}
        </PanelsStyles>
    )
}

export default AllProductsPanel