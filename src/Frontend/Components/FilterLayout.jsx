import React from 'react'
import { useContext,useState } from 'react';
import { CategoryContext } from '../utilities/CategoryContext';
import { FilterContext } from '../utilities/FilterContext';
import Button from './Button';
import './FilterLayout.css'
const FilterLayout = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [priceRange, setPriceRange] = useState('');
    const [rating, setRating] = useState(1);
    const {category}=useContext(CategoryContext);
    const {
      sortProductsByPrice,
      slideFilterByRating,
      sortProductsByCategories,
      clearTheFilters}=useContext(FilterContext);
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        const categoryName=event.target.value;
        sortProductsByCategories(categoryName);
      };
      const handlePriceRangeChange = (event) => {
        setPriceRange(event.target.value)
        const value=event.target.value;
        if (value === 'low-to-high') {
          sortProductsByPrice("lth");
        } else if (value === 'high-to-low') {
          sortProductsByPrice("htl");
        } 
      };
      const handleRatingChange = (event) => {
        setRating(Number(event.target.value));
        const ratingValue=event.target.value;
        slideFilterByRating(ratingValue);
      };
      const handleClearFilter=()=>{
        clearTheFilters();
        setPriceRange('');
        setRating(1);
        setSelectedCategory('all');
      }
  return (
    <div className="filter-section">
        <h3>Categories</h3>
        <select value={selectedCategory} onChange={handleCategoryChange} className='category-select'>
        <option value="">Select Category</option>
          {category.map((category) => (
            <option key={category._id} value={category.categoryName}>
              {category.categoryName}
            </option>
          ))}
        </select>
        <h3>Price Range:</h3>
        <select value={priceRange} onChange={handlePriceRangeChange}>
          <option value="">Select Price Range</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
        <h3>Rating:</h3>
        <input
          type="range"
          min="1"
          max="5"
          value={rating}
          onChange={handleRatingChange}
        />
        <p className='rating-text'>Selected Rating: {rating}</p>
        <Button onClickOperation={handleClearFilter}>Clear All</Button>
    </div>
  )
}

export default FilterLayout