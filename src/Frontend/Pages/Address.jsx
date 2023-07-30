import React from 'react'
import ModalLayout from '../Components/ModalLayout/ModalLayout'
import {AiOutlinePlusCircle} from 'react-icons/ai'
const Address = () => {

  return (
    <ModalLayout 
    modalHeading="Address List" 
    >
      <h3>Choose your Address</h3>
      <h3>Add New Address</h3>
      <AiOutlinePlusCircle size={45} color="#003366"/>
    </ModalLayout>
  )
}

export default Address