import React, { useContext } from 'react'
import { WishlistContext } from '../utilities/WishListContext'
import Header from '../Components/Header/Header';
import './WishList.css'
import Button from '../Components/Button'
import { CartContext } from '../utilities/CartContext';
const Wishlist = () => {
  const {
    wishListState:{
      wishListData:{
        wishlist
      }
    },
    removeWishlistItem
  }=useContext(WishlistContext);

  const{
    fetchData,
    addToCart
  }=useContext(CartContext);

  const removeProductFromWishlist=value=>{
    removeWishlistItem(value);
  }
  const addToCartFromWishlist=async (value)=>{
    removeWishlistItem(value);
    await fetchData();
    addToCart(value);
  }
  
  return (
    <div>
      <Header/>
      <div className='wishlist-cards'>
      {
        wishlist.length>0?
        wishlist.map(data=><div key={data.id}>
        <h5>{data.name}</h5>
        <p>{data.categoryName}</p>
        <p>Price: {data.price}</p>
        <Button value={data} onClickOperation={removeProductFromWishlist}>Remove</Button>
        <Button value={data} onClickOperation={addToCartFromWishlist}>Add To Cart</Button>
    </div>): <div>
        No items in Wishlist
    </div>
      }
      </div>
    </div>
  )
}

export default Wishlist