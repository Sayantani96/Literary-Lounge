import React, { useContext } from 'react'
import { AddressContext } from '../utilities/AddressContext'
import './Checkout.css'

const Checkout = () => {
  const {chosenAddress}=useContext(AddressContext)
  console.log(chosenAddress)
  return (
    <div className='checkout-section'>
      <h2>Order Summary</h2>
      <p>Delivery Address: {chosenAddress}</p>
    </div>
  )
}

export default Checkout