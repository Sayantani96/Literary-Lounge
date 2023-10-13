import React from 'react'
import './CartButton.css'
const CartButton = ({children,onClickOperation,btnType,value}) => {
  return (
    <button 
    onClick={()=>onClickOperation(value)} 
    className='cart-btn' 
    type={btnType}>{children}</button>
  )
}

export default CartButton