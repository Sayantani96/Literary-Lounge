import React from 'react'
import './FormBackground.css'
const FormBackground = ({children}) => {
  return (
    <div className='auth-bg'>
        {children}
    </div>
  )
}

export default FormBackground