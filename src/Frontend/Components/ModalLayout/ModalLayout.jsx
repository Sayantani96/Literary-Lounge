import React from 'react'
import Button from '../Button'
import './ModalLayout.css'
const ModalLayout = ({modalHeading,isOpen,modalBody}) => {
  return (
  <div className="modal-background">
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        <h2>{modalHeading}</h2>
        {modalBody}
        <Button className="close-btn">
          Close
        </Button>
      </div>
    </div>
    </div>
  )
}

export default ModalLayout