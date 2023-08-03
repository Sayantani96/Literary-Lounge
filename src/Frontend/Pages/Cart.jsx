import React, { useContext,useState,useEffect } from 'react'
import { CartContext } from '../utilities/CartContext'
import Button from '../Components/Button';
import "./Cart.css"
import { WishlistContext } from '../utilities/WishListContext';
import { useNavigate } from 'react-router-dom';
import { AddressContext } from '../utilities/AddressContext';
import Address from './Address';
import AlertBox from '../Components/AlertBox/AlertBox'
// import Checkout from './Checkout';


const Cart = () => {
  const navigate=useNavigate();
  const {
    state:{cartData,totalPrice},
    removeItem,
    increment,
    decrement,
    addToCart,
    dispatch
  }=useContext(CartContext);


  useEffect(()=>{
      const totalPriceOfCart=()=>{
        dispatch({type:'TOTAL_PRICE'})
      }
      totalPriceOfCart()
    },[cartData])

    const {showAddressModal,setShowAddressModal}=useContext(AddressContext)

    const {
      fetchWishlistData,
      addToWishlist,
      showAlertForWishlist,
      setAlertForWishlist
    }=useContext(WishlistContext);

    console.log(cartData.cart);

  // const [showCheckout,showModalForAddress]=useState(false);

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
    setShowAddressModal(true);
  };
  const moveToWishlist=async (value)=>{
    removeItem(value);
    await fetchWishlistData();
        addToWishlist(value)
      setAlertForWishlist(true);
      
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
        cartData.cart!==undefined?
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
    </div>:
    <div>
      Cart is not defined
    </div>
      }
      {
        cartData.cart.length>0? <p>Total Price:{totalPrice}</p>:0
      }
      <Button onClickOperation={openCheckOutModel}>Checkout</Button>
      {/* {
        showCheckout && <Checkout totalPrice={totalPrice}/>
      } */}
      {
        showAlertForWishlist && <AlertBox>Item Moved to Wishlist</AlertBox>
      }

      <Address/>
      
    </div>
    
    </>
  )
}

export default Cart