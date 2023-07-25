import React from 'react'
import './FormInput.css'
const FormInput = ({
    formPlaceholder,
    formType,
    formName,
    formValue,
    formChange
}) => {
  return (
    <div>
        <input 
        placeholder={formPlaceholder} 
        type={formType} 
        name={formName} 
        value={formValue} 
        onChange={formChange}
        required
        className="form-input"
    />
    </div>
  )
}

export default FormInput