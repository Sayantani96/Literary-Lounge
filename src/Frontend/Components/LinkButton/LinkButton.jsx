import React from 'react'
import './LinkButton.css'
const LinkButton = ({children,onClickOperation,btnType,value}) => {
  return (
    <button 
    onClick={()=>onClickOperation(value)} 
    className='link-btn' 
    type={btnType}>{children}</button>
  )
}

export default LinkButton