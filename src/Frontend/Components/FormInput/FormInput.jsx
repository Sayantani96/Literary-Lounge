import React, { useState } from 'react'
import './FormInput.css'
import {BiSolidShow,BiSolidHide} from 'react-icons/bi'
const FormInput = ({
    formPlaceholder,
    formType,
    formName,
    formValue,
    formChange,
    formKeyPress
}) => {
  const [handleShowHide,setHandleShowHide]=useState(true);
  const handleChange=()=>{
    setHandleShowHide(!handleShowHide)
    console.log(handleShowHide);
  }
  return (
    <div>
      {
        formType=="password"?
        <input 
        placeholder={formPlaceholder} 
        type={handleShowHide?formType:"text"} 
        name={formName} 
        value={formValue} 
        onChange={formChange}
        onKeyDown={formKeyPress}
        required
        className="form-input"
    />:
<input 
        placeholder={formPlaceholder} 
        type={formType} 
        name={formName} 
        value={formValue} 
        onChange={formChange}
        onKeyDown={formKeyPress}
        required
        className="form-input"
    />

      }
        
    {
      formName=="password" ?
        handleShowHide? <BiSolidHide size={25} color="#003366" className="pwd-icon" 
        onClick={handleChange}/>
        :
        <BiSolidShow size={25} color="#003366" className="pwd-icon" 
        onClick={handleChange}/>: ''
      
    }
    </div>
  )
}

export default FormInput