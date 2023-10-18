import React, {useState,useEffect, useContext} from 'react'
import CategoryCard from './CategoryCard'
import './Featured.css'
import { Link, useNavigate } from 'react-router-dom';
import { CategoryContext } from '../utilities/CategoryContext';
import LinkButton from '../Components/LinkButton/LinkButton'
import { FilterContext } from '../utilities/FilterContext';

const FeaturedCategories = () => {
  
    const {category}=useContext(CategoryContext);
    const {sortProductsByCategories}=useContext(FilterContext)
    const navigate=useNavigate();

    const handleCategoryVisit=(categoryName)=>{
      sortProductsByCategories(categoryName);
      navigate('/products');
    }
   
  return (
    <div>
        <h2>Featured Categories</h2>
        <div className="featured-category">
           {
            category.length>0?
                    category.map(category=>
                    <CategoryCard key={category._id}>
                      <div>
                        <img src={category.image} alt="category-img" className="category-img"/>
                      </div>
                      <div className="category-name">
                        {
                            category.categoryName
                        }
                      </div>
                    <div>
                    {/* <Link to={'/categories/'+category._id}>Visit Category</Link> */}
                    <div className="link-btn">
                    <LinkButton onClickOperation={()=>handleCategoryVisit(category.categoryName)}>
                      Visit Category
                    </LinkButton>
                    </div>
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