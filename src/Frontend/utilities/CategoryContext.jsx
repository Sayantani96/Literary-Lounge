import { createContext, useContext, useState,useEffect } from "react";
import { ProductContext } from "./ProductContext";


export const CategoryContext=createContext();



const initialState={
   categoryData:[]
}



export const CategoryContextProvider=({children})=>{

    const [featuredCategory,setCategory]=useState([])
    const [category,setCategories]=useState([]);
    const {
        productData:{
            products
        }
    }=useContext(ProductContext);

    useEffect(()=>{
        const fetchCategoryData=async()=>{
            const response=await fetch('/api/categories')
            .then(res=>res.json())
            .catch(error=>console.log(error))
            setCategories(response.categories);
        }
        fetchCategoryData();
    },[])
    

    const getProductsByCategory=async(id)=>{
        const response=await fetch(`/api/categories/${id}`)
        .then(res=>res.json())
        .catch(error=>console.log(error))
       const categoryProducts=products.filter(product=>{
        if(product.categoryName==response.category.categoryName){
            return product
        }
       })
       setCategory(categoryProducts);
       console.log(featuredCategory);
    }
    const value={category,featuredCategory,getProductsByCategory};
    
    return (
        <CategoryContext.Provider value={value}>
          {children}
        </CategoryContext.Provider>
      );
}




