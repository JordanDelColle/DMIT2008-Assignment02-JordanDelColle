import {useState, useEffect} from 'react';

function useGetAllProducts() {
    const [productData, setProductData] = useState([]);
  
    useEffect(()=>{
      async function getProducts() {
        const res = await fetch (`https://dashboard-a6060-default-rtdb.firebaseio.com/products.json`)
  
        const data = await res.json()
        setProductData(Object.values(data))
      }
      getProducts()
      
    }, [])
    return productData
}

export {useGetAllProducts}