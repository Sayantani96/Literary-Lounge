import React from 'react'
import './AlertBox.css'
const AlertBox = ({children}) => {
  return (
    <div className='alert-box'>
        {children}
    </div>
  )
}

export default AlertBox