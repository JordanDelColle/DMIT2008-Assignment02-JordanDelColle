import React, {useState, useEffect} from 'react'

import {PanelsStyles, PanelHeader, PanelBody, IconPanel} from './styles'
import {ProductIcon, EmptyIcon} from './../products/ProductIcon'
import {useGetAllProducts} from '../../hooks/useGetAllProducts'

function AllProductsPanel (title, ...props){
    const [isLoading, setIsLoading] = useState(false);
    // const [userData, setUserData] = useState([]);
  
    // useEffect(()=>{
    //   async function loadExternalDataTheCRAWay() {
    //     const res = await fetch (`https://dashboard-a6060-default-rtdb.firebaseio.com/products.json`)
    //     // const res = await fetch (`https://jsonplaceholder.typicode.com/users`)
  
    //     const data = await res.json()
    //     setUserData(Object.values(data))
    //   }
    //   loadExternalDataTheCRAWay()
      
    // }, [])
    const productData = useGetAllProducts();

    let myProducts = productData.map(({id, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid})=> <ProductIcon key={id} imageStoragePath={imageStoragePath} imageUrl={imageUrl} productDescription={productDescription} productFormat={productFormat}
    productName={productName} productPrice={productPrice} uid={uid}/>);
    
    return(
        <PanelsStyles>
        {/* <main>
            {
            productData.map(({id, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid})=> <ProductIcon key={id} imageStoragePath={imageStoragePath} imageUrl={imageUrl} productDescription={productDescription} productFormat={productFormat}
            productName={productName} productPrice={productPrice} uid={uid}/>)
            }
        </main> */}
            <PanelHeader>
                <h2>All Products</h2>
            </PanelHeader>
            <PanelBody>
                <IconPanel>
                    {myProducts[0]}
                    {myProducts[1]}
                    {myProducts[2]}
                    {myProducts[3]}
                </IconPanel>
            </PanelBody>
            <PanelBody>
                <IconPanel>
                    {myProducts[4]}
                    {myProducts[5]}
                    {myProducts[6]}
                    {myProducts[7]}
                </IconPanel>
            </PanelBody>
            <PanelBody>
                <IconPanel>
                    {myProducts[8]}
                    {myProducts[9]}
                    <EmptyIcon/>
                    <EmptyIcon/>
                </IconPanel>
            </PanelBody>
        </PanelsStyles>
    )
}

export default AllProductsPanel