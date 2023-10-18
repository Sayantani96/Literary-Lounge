import React, { useContext } from 'react'
import { AddressContext } from '../utilities/AddressContext'
import './Checkout.css'
import { CartContext } from '../utilities/CartContext'
import BookCart from '../Assets/BookCart.svg'

const Checkout = () => {
  const {chosenAddress}=useContext(AddressContext)
  const {state:{cartData,totalPrice}}=useContext(CartContext);
  console.log(chosenAddress.address);

  return (
  <div className="order-summary">
    <div className='checkout-section'>

      <h2>Order Summary</h2>
      <div className="summary-section">
      <ul>
        {cartData.cart.map(prod=>
        <li key={prod._id}>
          <h3>{prod.title}</h3>
          <p>Qty: {prod.qty}</p>
        </li>
          )}
      </ul>
      <h2>{totalPrice}INR----------Total</h2>
      </div>
      <h2>Delivery Address</h2>
      <p>{chosenAddress.address}</p>
    </div>
    <div className="svg-section">
          <img src={BookCart} alt="summary-pic" className='summary-pic'/>
    </div>
    </div>
  )
}

export default Checkout