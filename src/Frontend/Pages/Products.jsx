import React, { useContext, useEffect,useState } from 'react'

import {ProductContext} from '../utilities/ProductContext';
import Loader from '../Components/Loader';
import './Products.css'
import ProductCard from '../Components/ProductCard';
import Footer from '../Components/Footer';
import FilterLayout from '../Components/FilterLayout';
import { FilterContext } from '../utilities/FilterContext';
import { AuthContext } from '../utilities/AuthContext';



const ProductListing = () => {
    const {productData,isLoading}=useContext(ProductContext);
    const {state:{filteredData}}=useContext(FilterContext);
    const {token}=useContext(AuthContext);
    

    const [dataToBeShown,setDataToBeShown]=useState([]);
    useEffect(()=>{
        setDataToBeShown(filteredData.length>0?filteredData:productData.products);
    },[productData.products,filteredData]);

  return (
    <>
  <div className="product-body">
    {
      token ?
       <h3>
        Welcome {
       JSON.parse(localStorage.getItem("signedup-user")).userDetails.firstName
        }
        </h3>:
       ''
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
           image={prod.image}
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