import React, {useState,useEffect, useContext} from 'react'
import CategoryCard from './CategoryCard'
import './Featured.css'
import { Link } from 'react-router-dom';
import { CategoryContext } from '../utilities/CategoryContext';
const FeaturedCategories = () => {
    const {category}=useContext(CategoryContext);
   
  return (
    <div>
        <h2>Featured Categories</h2>
        <div className="featured-category">
           {
            category.length>0?
                    category.map(category=>
                    <CategoryCard key={category._id}>
                        {
                            category.categoryName
                        }
                    <div>
                    <Link to={'/categories/'+category._id}>Visit Category</Link>
                    </div>
                   
                    </CategoryCard>)
            :
            <p>No categories to show</p>
           }
        </div>
    </div>
  )
}

export default FeaturedCategories