import React, { useContext, useEffect,useState } from 'react'

import {ProductContext} from '../utilities/ProductContext';
import Loader from '../Components/Loader';
import { Link } from 'react-router-dom';
import './Products.css'
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import FilterLayout from '../Components/FilterLayout';
// import PriceFilter from '../Components/ProductFilters/PriceFilter';
import { FilterContext } from '../utilities/FilterContext';
import { AuthContext } from '../utilities/AuthContext';
import Header from '../Components/Header/Header';
// import RatingsFilter from '../Components/ProductFilters/RatingsFilter';
// import CategoriesFilter from '../Components/ProductFilters/CategoriesFilter';
// import Loader from '../Components/Loader';
// import Header from '../Components/Header/Header';
// import Search from '../Components/Search/Search';
// import './productListing.css';
// import ClearFilter from '../Components/ProductFilters/ClearFilter';


const ProductListing = () => {
    const {productData,isLoading}=useContext(ProductContext);
    const {state:{filteredData}}=useContext(FilterContext);
    const {isLoggedIn}=useContext(AuthContext);
    
    // const {
    //     sortProductsByPrice,
    //     sortProductsByCategories,
    //     filterProductsBySearch,
    //     slideFilterByRating,
    //     clearTheFilters
    // }=useContext(FilterContext);

    const [dataToBeShown,setDataToBeShown]=useState([]);
    useEffect(()=>{
        setDataToBeShown(filteredData.length>0?filteredData:productData.products);
    },[productData.products,filteredData]);

    console.log(JSON.parse(localStorage.getItem("userDetails")).firstName)

   
    // const getTheorderforPrice=(order)=>{
    //     sortProductsByPrice(
    //                 filteredData.length>0?filteredData:productData,order
    //                  );
        
    // }
    // const getTheorderforCategory=(category)=>{
    //     sortProductsByCategories(
    //         productData,category
    //         )
    // }
    // const getProductBySearch=(event)=>{
    //     const delaySearch=setTimeout(()=>{
    //         filterProductsBySearch(
    //             productData,event.target.value
    //             )
    //     },1500);

    //     return ()=>clearTimeout(delaySearch)
        
    // }
    // const getProductsByRating=(value)=>{
    //     slideFilterByRating(
    //         filteredData.length>0?filteredData:productData,value
    //         );
    // }

    // const clearFilters=()=>{
    //     clearTheFilters();
    // }

  return (
    <>
  <div className="product-body">
    {
      isLoggedIn && <h3>Wecome {JSON.parse(localStorage.getItem("userDetails")).firstName}</h3>
    }
    
    <div className="main-section">
    <div className="filter-section">
      <FilterLayout/>
    </div>
    <div className='product-section'>
       
        {
            isLoading? <Loader/>:
            dataToBeShown!==undefined?
            dataToBeShown.length>0?
           dataToBeShown.map(prod=>
           <ProductCard 
           key={prod._id}
           title={prod.title}
           author={prod.author}
           category={prod.categoryName}
           price={prod.price}
           prod={prod}
           id={prod._id}
           />
           )
           :

            <div>
                Not found
            </div>:
            <div>Products Not Found</div>
        }
    </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default ProductListing