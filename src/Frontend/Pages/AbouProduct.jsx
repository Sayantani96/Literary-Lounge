import React,{useContext,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../utilities/ProductContext';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import { CartContext } from '../utilities/CartContext';
import { WishlistContext } from '../utilities/WishListContext';
import Loader from '../Components/Loader';
import Header from '../Components/Header/Header';
import './AboutProducts.css'
import ProductCard from '../Components/ProductCard';
const AbouProduct = () => {
  const {productData}=useContext(ProductContext);
  const {addToCart}=useContext(CartContext);
  const {addToWishlist}=useContext(WishlistContext);
  const [productById,setProductById]=useState({});
  let {id}=useParams();
  useEffect(()=>{
    if(productData.products!==undefined){
      if(productData.products.length>0){
        const getProductById=productData.products.filter(data=>data._id==id);
        setProductById(getProductById[0]);
      }
      
    }
   
  },[])

  const addTheData=()=>{
    addToCart(productById);
  }
  const setDataInWishlist=()=>{
    addToWishlist(productById);
  }
  return (
    <div className='about-products'>
      <Header/>
      {
        productById?
        <div>
        <h5>{productById.name}</h5>
        <p>{productById.categoryName}</p>
        <p>Price: {productById.price}</p>
        <Button onClickOperation={addTheData}>Add to Cart</Button>
        <Button onClickOperation={setDataInWishlist}>Add to Wishlist</Button>
        <Link to='/products'>Return To Products</Link>
    </div>: <div>
        Not found
    </div>
      }
      <Link to="/cart">Check your cart Items</Link>
      <Link to="/wishlist">Check your cart Items</Link>
    
    </div>
  )
}

export default AbouProduct