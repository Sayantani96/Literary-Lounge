import React, {useEffect, useContext,useState} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import { CategoryContext } from '../utilities/CategoryContext';
import FilterLayout from '../Components/FilterLayout';
import { FilterContext } from '../utilities/FilterContext';
import './Products.css'
const FeaturedCategory = () => {
    const {id}=useParams();
    const {featuredCategory,getProductsByCategory}=useContext(CategoryContext);
    const {state:{filteredData}}=useContext(FilterContext);
    useEffect(()=>{
        const getCategoryProducts=async ()=>{
            await getProductsByCategory(id);
        }
       getCategoryProducts();
        
    },[])
    const [dataToBeShown,setDataToBeShown]=useState([]);
    useEffect(()=>{
      console.log("Entered Here")
      console.log(filteredData);
        setDataToBeShown(filteredData.length>0?filteredData:featuredCategory);
    },[featuredCategory,filteredData]);

  return (
    <div className='filter-section'>
      <FilterLayout/>
      <div className="product-section">
        {
        dataToBeShown?
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
        Category Not Found
        </div>
        }
</div>
    </div>
  )
}

export default FeaturedCategory