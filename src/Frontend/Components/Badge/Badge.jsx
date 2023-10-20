import React, { useContext, useEffect } from 'react'
import './Badge.css'
import { CartContext } from '../../utilities/CartContext'
import { AuthContext } from '../../utilities/AuthContext';

const Badge = () => {

    const {dispatch,state}=useContext(CartContext);
    const {token}=useContext(AuthContext);

    useEffect(()=>{
        dispatch({type:'CART_TOTAL'})
    },[state.cartData])

  return (
    <div className={state.cartTotal>0&&token?"cart-badge":"badge-hide"}>
        {state.cartTotal}
    </div>
  )
}

export default Badge