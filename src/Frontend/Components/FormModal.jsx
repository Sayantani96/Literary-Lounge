import React from 'react'
import './FormModal.css'
import formLogo from'../Assets/Form_logo.svg'
const FormModal = ({children}) => {
  return (
    <div className="form-modal">
        <div className='design'>
            <img 
            src={formLogo} 
            alt="form-pic"
            height="600px"
            width="600px"
            />
        </div>
        <div className="form-section">
            {children}
        </div>
    </div>
  )
}

export default FormModal