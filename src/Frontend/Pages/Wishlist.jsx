import React, { useContext } from 'react'
import { WishlistContext } from '../utilities/WishListContext'
import {RxCrossCircled} from 'react-icons/rx'
import './WishList.css'
import { CartContext } from '../utilities/CartContext';
import AlertBox from '../Components/AlertBox/AlertBox';
import CartButton from '../Components/CartButton/CartButton';
import LinkButton from '../Components/LinkButton/LinkButton';
const Wishlist = () => {
  const {
    wishListState:{
      wishListData:{
        wishlist
      }
    },
    removeWishlistItem,
    showAlertForRemoveItem
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
      <div className='wishlist-container'>
        <h3>Wishlist Items</h3>
      {
        wishlist?
        wishlist.length>0?
        wishlist.map(data=><div key={data.id} className="wishlist-prod">
        <img src={data.image} alt="book-img" className='wishlist-book-img'/>
        <h5>{data.title}</h5>
        <p>{data.categoryName}</p>
        <p>Price: {data.price}</p>
        <div className="wishlist-operations">
        <CartButton value={data} onClickOperation={removeProductFromWishlist}>
        <RxCrossCircled size={25} color="#003366"/>
        </CartButton>
        </div>
        <LinkButton value={data} onClickOperation={addToCartFromWishlist}>
          Add To Cart
        </LinkButton>
    </div>): <div>
        No items in Wishlist
    </div>:
    <div>
      Wishlist is empty
    </div>
      }
      </div>
      {
        showAlertForRemoveItem && <AlertBox>Removed Item From Wishlist</AlertBox>
      }
    </div>
  )
}

export default Wishlist