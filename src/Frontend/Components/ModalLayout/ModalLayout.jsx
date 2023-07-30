import React,{useContext} from 'react'
import Button from '../Button'
import './ModalLayout.css'
import { AddressContext } from '../../utilities/AddressContext'

const ModalLayout = ({modalHeading,children}) => {
  const {setShowAddressModal,showAddressModal}=useContext(AddressContext)
  const closeModal=()=>{
    console.log("Entering Here")
    setShowAddressModal(false);
  }
  return (
  <div className={`modal-background ${showAddressModal ? 'open' : 'close'}`}>
    <div className={`modal`}>
      <div className="modal-content">
        <h2>{modalHeading}</h2>
        {children}
        <Button className="close-btn" onClickOperation={closeModal}>
          Close
        </Button>
      </div>
    </div>
    </div>
  )
}

export default ModalLayout