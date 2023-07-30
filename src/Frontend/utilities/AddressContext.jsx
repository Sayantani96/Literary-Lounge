import { createContext, useEffect, useState } from "react";

export const AddressContext=createContext();



export const AddressContextProvider=({children})=>{

  const [userToken,setUserToken]=useState(localStorage.getItem("token"));
  

    const [showAddressModal,setShowAddressModal]=useState(false);  

    

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
      // if(response){
      //   setaddressData(response);
      // }
      
    }

    const value= {showAddressModal,setShowAddressModal}

    return (
        <AddressContext.Provider value={value}>
          {children}
        </AddressContext.Provider>
      );
}




