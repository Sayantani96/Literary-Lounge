import React, { useState } from 'react'
import ModalLayout from '../Components/ModalLayout/ModalLayout'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import './Address.css'
import { useContext } from 'react'
import { AddressContext } from '../utilities/AddressContext'
import { Link } from 'react-router-dom'

const Address = () => {
  const [displayTextArea,setDisplayTextArea]=useState(false);
  const [addressData,setAddressData]=useState('')
  const {postAddressData,
    addressDataArr:{address},
    fetchData,
    setChosenAddress,
    chosenAddress
  }=useContext(AddressContext)

  const [selectedAddressId, setSelectedAddressId] = useState(null);

  const handleAddAddress=()=>{
    setDisplayTextArea(true)
  }

  const handleCheckboxChange = (event, addressId) => {
    if (event.target.checked) {
      
      setSelectedAddressId(addressId);
      const checkoutAddress=address.find(addr=>addr._id===addressId);
      console.log(checkoutAddress);
      setChosenAddress(checkoutAddress);

    } else {
      setSelectedAddressId(null);
    }
  };

  const addAddressToList=async()=>{
    await postAddressData(addressData);
    await fetchData();
    setAddressData('');
  }

  return (
    <ModalLayout 
    modalHeading="Address List" 
    >
      <h3>Choose your Address</h3>
      {
        address?
        address.length>0?
        <ul>
          {
            address.map(addr=>
            <li key={addr._id}>
              <input
              type="checkbox"
              value={addr._id}
              checked={selectedAddressId === addr._id}
              onChange={(event) => handleCheckboxChange(event,addr._id)}
            />
              {addr.address}
              </li>
            )
          }
        </ul>:
        <div>
          No Address Added
        </div>:
        <div>Address Not Found</div>
      }
      <h3>Add New Address</h3>
     
      <div className='add-address-btn'>
      <AiOutlinePlusCircle size={45} color="#003366" onClick={handleAddAddress}/>
      </div>
     {
      displayTextArea &&
      <>
      <textarea 
      value={addressData}
      placeholder='Enter Your Address Here' onChange={(e)=>{
         setAddressData(e.target.value)
      }
        }/>
      <button onClick={addAddressToList}>Add</button>
      </> 
     }

      <div>
      <Link to="/checkout">Go to Checkout Page</Link>
      </div>
    </ModalLayout>
  )
}

export default Address