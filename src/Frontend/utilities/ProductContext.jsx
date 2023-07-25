import { createContext, useEffect, useState } from "react";


export const ProductContext=createContext({
    productData:null,
    setData:()=>{},
    
});



export const ProductContextProvider=({children})=>{

    const [productData,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false)
    const value={productData,setData,isLoading};
    useEffect(()=>{
      const fetchData=async()=>{
        setIsLoading(true);
        const response=await fetch('/api/products')
                            .then(res=>res.json())
                            .catch(err=>console.log(err))      
        setData(response);
        setIsLoading(false);
      }
      fetchData();
    },[])
   
    return (
        <ProductContext.Provider value={value}>
          {children}
        </ProductContext.Provider>
      );
}




