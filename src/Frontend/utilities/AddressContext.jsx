import { createContext, useEffect, useState } from "react";

export const AddressContext=createContext();



export const AddressContextProvider=({children})=>{

  const [userToken,setUserToken]=useState(localStorage.getItem("token"));
  
  const[addressDataArr,setAddressDataArr]=useState()
    const [showAddressModal,setShowAddressModal]=useState(false);  
    const [chosenAddress,setChosenAddress]=useState('');

    

    useEffect(()=>{
      if(userToken)
      fetchData();
    },[userToken])

    const fetchData= async ()=>{
      const response= await fetch('/api/user/addresses',{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token"),
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
          'authorization': localStorage.getItem("token"),
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

    const value= {
      showAddressModal,
      setShowAddressModal,
      postAddressData,
      fetchData,
      addressDataArr,
      chosenAddress,
      setChosenAddress
    }

    return (
        <AddressContext.Provider value={value}>
          {children}
        </AddressContext.Provider>
      );
}




