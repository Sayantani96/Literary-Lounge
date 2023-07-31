import React, { useContext } from 'react'
import { AddressContext } from '../utilities/AddressContext'
import './Checkout.css'
import { CartContext } from '../utilities/CartContext'

const Checkout = () => {
  const {chosenAddress}=useContext(AddressContext)
  const {state:{cartData,totalPrice}}=useContext(CartContext);

  return (
    <div className='checkout-section'>
      <h2>Order Summary</h2>
      <h3>Items</h3>
      <ul>
        {cartData.cart.map(prod=>
        <li key={prod._id}>
          <span>{prod.title}</span>
          <span>{prod.price}</span>
        </li>
          )}
      </ul>
      <p>Total Price: {totalPrice}</p>
      <p>Delivery Address: {chosenAddress.address}</p>
    </div>
  )
}

export default Checkout