import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../utilities/ProductContext';
import './AboutProducts.css'
import ProductCard from '../Components/ProductCard';
const AbouProduct = () => {

  const {getProductById,bookDetail}=useContext(ProductContext);
  let {id}=useParams();

  getProductById(id);

  return (
    <div className='about-products'>
      {
        bookDetail?
        <div className='product-desc'>
        <ProductCard 
           key={bookDetail._id}
           title={bookDetail.title}
           author={bookDetail.author}
           category={bookDetail.categoryName}
           price={bookDetail.price}
           prod={bookDetail}
           id={bookDetail._id}
           image={bookDetail.image}
        />
    </div>: <div>
        Not found
    </div>
      }
    </div>
  )
}

export default AbouProduct