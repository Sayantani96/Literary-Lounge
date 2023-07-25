import React, {useEffect, useContext} from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../Components/ProductCard';
import { CategoryContext } from '../utilities/CategoryContext';
const FeaturedCategory = () => {
    const {id}=useParams();
    const {featuredCategory,getProductsByCategory}=useContext(CategoryContext);
    useEffect(()=>{
        const getCategoryProducts=async ()=>{
            await getProductsByCategory(id);
            console.log(featuredCategory);
        }
       getCategoryProducts();
        
    },[])

  return (
    <div>
        {
        featuredCategory?
        featuredCategory.map(prod=>
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
  )
}

export default FeaturedCategory