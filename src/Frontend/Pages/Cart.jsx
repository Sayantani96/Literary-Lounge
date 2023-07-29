import React, { useContext,useState,useEffect } from 'react'
import { CartContext } from '../utilities/CartContext'
import Button from '../Components/Button';
import "./Cart.css"
import { WishlistContext } from '../utilities/WishListContext';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header/Header';
import ModalLayout from '../Components/ModalLayout/ModalLayout';
import Address from './Address';
// import Checkout from './Checkout';


const Cart = () => {
  const navigate=useNavigate();
  const {
    state:{cartData},
    removeItem,
    increment,
    decrement,
    addToCart}=useContext(CartContext);

    const {
      fetchWishlistData,
      addToWishlist
    }=useContext(WishlistContext);

    console.log(cartData.cart);

  const [showCheckout,setShowCheckout]=useState(false);

  const removeProduct=value=>{
    removeItem(value);
  }
  const increaseQty=value=>{
    increment(value);
  }
  const decreaseQty=value=>{
    decrement(value);
  }
  const openCheckOutModel=()=>{
    setShowCheckout(true);
  }
  const moveToWishlist=async (value)=>{
    removeItem(value);
    await fetchWishlistData();
        addToWishlist(value)
      navigate('/wishlist');
      
  }
  // const closeModal=()=>{
  //   navigate('/')
  // }
  return (
    <>
    <div className="cart-container">
      <h3>Cart Items</h3>
      {
        cartData.cart?
        cartData.cart.length>0?
        cartData.cart.map(data=><div key={data.id}>
        <h5>{data.name}</h5>
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
        <p>Quantity: {data.qty}</p>
        <Button value={data} onClickOperation={increaseQty}>+</Button>
        <Button value={data} onClickOperation={decreaseQty}>-</Button>
        <Button value={data} onClickOperation={removeProduct}>Remove</Button>
        <Button value={data} onClickOperation={moveToWishlist}>Move to Wishlist</Button>
    </div>): <div>
        No items in cart
    </div>:
    <div>
      Cart is Empty
    </div>
      }
      {/* {
        cartData.length>0? <p>Total Price:{totalPrice}</p>:''
      } */}
      <Button onClickOperation={openCheckOutModel}>Checkout</Button>
      {/* {
        showCheckout && <Checkout totalPrice={totalPrice}/>
      } */}
      
    </div>
    {
        showCheckout && <Address/>
      }
    </>
  )
}

export default Cart