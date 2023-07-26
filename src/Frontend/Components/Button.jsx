import React from 'react'
import './Button.css'
const Button = ({children,onClickOperation,btnType,value}) => {
  return (
    <button 
    onClick={()=>onClickOperation(value)} 
    className='primary-btn' 
    type={btnType}>{children}</button>
  )
}

export default Button