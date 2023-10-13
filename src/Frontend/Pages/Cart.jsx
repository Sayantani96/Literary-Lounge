import React, { useContext,useState,useEffect } from 'react'
import { CartContext } from '../utilities/CartContext'
import Button from '../Components/Button';
import "./Cart.css"
import { WishlistContext } from '../utilities/WishListContext';
import { useNavigate } from 'react-router-dom';
// import { AddressContext } from '../utilities/AddressContext';
// import Address from './Address';
import AlertBox from '../Components/AlertBox/AlertBox'
import CartButton from '../Components/CartButton/CartButton';
import LinkButton from '../Components/LinkButton/LinkButton';
// import Checkout from './Checkout';
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {AiOutlineMinusCircle} from 'react-icons/ai'
import {RxCrossCircled} from 'react-icons/rx'


const Cart = () => {
  const navigate=useNavigate();
  const {
    state:{cartData,totalPrice},
    removeItem,
    increment,
    decrement,
    dispatch
  }=useContext(CartContext);

  console.log(cartData);


  useEffect(()=>{
      const totalPriceOfCart=()=>{
        dispatch({type:'TOTAL_PRICE'})
      }
      totalPriceOfCart()
    },[cartData])

    // const {showAddressModal,setShowAddressModal}=useContext(AddressContext)

    const {
      fetchWishlistData,
      addToWishlist,
      showAlertForWishlist,
      setAlertForWishlist
    }=useContext(WishlistContext);

    console.log(cartData.cart==undefined?"There's a problem":cartData.cart.length);

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
    // setShowAddressModal(true);
    console.log("address here!")
  };
  const moveToWishlist=async (value)=>{
    removeItem(value);
    await fetchWishlistData();
        addToWishlist(value)
      setAlertForWishlist(true);
      
  }

  const userName=JSON.parse(localStorage.getItem("signedup-user")).userDetails.firstName
  // const closeModal=()=>{
  //   navigate('/')
  // }
  return (
    <>
    <div className="cart-container">
      <h3>
        {userName}'s Cart
      </h3>
      
      {   
        cartData.cart==undefined?
          <div>
          There's a problem in cart
        </div>
       :
        cartData.cart.length>0?
        cartData.cart.map(
          data=>
        <div key={data.id} className="cart-product">
          <p>{data.description}</p>
        <h5>{data.title}</h5>
        
        <p>Price: {data.price}/-</p>
        <p>Qty: {data.qty}</p>
        <div className='cart-operations'>
        <CartButton value={data} onClickOperation={increaseQty}>
        <AiOutlinePlusCircle size={25} color="#003366"/>
        </CartButton>
        <CartButton value={data} onClickOperation={decreaseQty}>
        <AiOutlineMinusCircle size={25} color="#003366"/>
        </CartButton>
        <CartButton value={data} onClickOperation={removeProduct}>
        <RxCrossCircled size={25} color="#003366"/>
        </CartButton>
        </div>
        <LinkButton value={data} onClickOperation={moveToWishlist}>Move to Wishlist</LinkButton>
    </div>): <div>
        No items in cart
    </div>
    
      }
      </div>
      {
        cartData.cart?.length>0? <h3 className="total-price">Total Price: {totalPrice}/-</h3>:''
      }
      <div className="checkout-btn">
      <Button onClickOperation={openCheckOutModel}>Checkout</Button>
      </div>

      {/* {
        showCheckout && <Checkout totalPrice={totalPrice}/>
      } */}
      {
        showAlertForWishlist && <AlertBox>Item Moved to Wishlist</AlertBox>
      }

      {/* <Address/> */}
      
    
    </>
  )
}

export default Cart