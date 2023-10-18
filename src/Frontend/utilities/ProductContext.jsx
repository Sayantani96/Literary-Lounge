import { createContext, useEffect, useState } from "react";


export const ProductContext=createContext({
    productData:null,
    setData:()=>{},
    isLoading:false,
    bookDetail:{},
    setBookDetail:()=>{},
    getProductById:()=>{}  
});



export const ProductContextProvider=({children})=>{

    const [productData,setData]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    const [bookDetail,setBookDetail]=useState({});
    

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

    const getProductById=async (id)=>{
      const response=await fetch(`/api/products/${id}`)
      .then(res=>res.json())
      .catch(err=>console.log(err)) 
      setBookDetail(response.product);
    }

    const value={
      productData,
      setData,
      isLoading,
      bookDetail,
      setBookDetail,
      getProductById
    };
   
    return (
        <ProductContext.Provider value={value}>
          {children}
        </ProductContext.Provider>
      );
}




