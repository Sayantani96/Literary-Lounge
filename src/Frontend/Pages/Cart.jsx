import React, { useContext,useState,useEffect } from 'react'
import { CartContext } from '../utilities/CartContext'
import Button from '../Components/Button';
// import Checkout from './Checkout';


const Cart = () => {
  const {
    state:{cartData},
    removeItem,
    increment,
    decrement,
    addToCart}=useContext(CartContext);

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
  return (
    <div>
      {
        cartData.cart.length>0?
        cartData.cart.map(data=><div key={data.id}>
        <h5>{data.name}</h5>
        <p>{data.description}</p>
        <p>Price: {data.price}</p>
        <p>Quantity: {data.qty}</p>
        <Button value={data} onClickOperation={increaseQty}>+</Button>
        <Button value={data} onClickOperation={decreaseQty}>-</Button>
        <Button value={data} onClickOperation={removeProduct}>Remove</Button>
    </div>): <div>
        No items in cart
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
  )
}

export default Cart