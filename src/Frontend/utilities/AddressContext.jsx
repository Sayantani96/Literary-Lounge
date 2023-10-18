import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const AddressContext=createContext();



export const AddressContextProvider=({children})=>{

  const {token}=useContext(AuthContext);
  
  const[addressDataArr,setAddressDataArr]=useState()
    const [showAddressModal,setShowAddressModal]=useState(false);  
    const [chosenAddress,setChosenAddress]=useState('');

    

    useEffect(()=>{
      if(token)
      fetchData();
    },[token])

    const fetchData= async ()=>{
      const response= await fetch('/api/user/addresses',{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization':token,
        }
      }).then(res=>res.json())
      .catch(error=>console.log(error))
      if(response){
        console.log(response);
        setAddressDataArr(response);
      }
      
    }

    const postAddressData=async (address)=>{
      const response=await fetch('/api/user/address',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization':token,
        },
        body: JSON.stringify({address})
      }).then(response=>response.json())
      .catch(error=>console.log(error))
      // if(response){
      //   setAddressDataArr({
      //     ...addressDataArr,
      //     response
      //   })
      //   console.log(addressDataArr);
      // }
    }

    const removeAddressData= async(value)=>{
      const response= await fetch(`/api/user/address/${value._id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'authorization':token,
        },
      }).then(response=>{
        return response.json()
      })
      .catch(error=>console.log(error))
    }

    const value= {
      showAddressModal,
      setShowAddressModal,
      postAddressData,
      fetchData,
      addressDataArr,
      chosenAddress,
      setChosenAddress,
      removeAddressData
    }

    return (
        <AddressContext.Provider value={value}>
          {children}
        </AddressContext.Provider>
      );
}




