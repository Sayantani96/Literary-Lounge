import React, { useContext } from 'react'
import { WishlistContext } from '../utilities/WishListContext'
import Header from '../Components/Header/Header';
import './WishList.css'
import Button from '../Components/Button'
const Wishlist = () => {
  const {
    wishListState:{
      wishListData:{
        wishlist
      }
    },
    removeWishlistItem
  }=useContext(WishlistContext);

  const removeProductFromWishlist=value=>{
    removeWishlistItem(value);
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
    </div>): <div>
        No items in Wishlist
    </div>
      }
      </div>
    </div>
  )
}

export default Wishlist