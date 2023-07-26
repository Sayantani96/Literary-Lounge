import { createContext,useContext, useEffect, useReducer, useState } from "react";

export const CartContext=createContext();

const initialState={
 addressData:[],

}

export const AddressContextProvider=({children})=>{

  const [userToken,setUserToken]=useState(localStorage.getItem("token"));
  const [showAlertForCart,setAlertForCart]=useState(false);
    const [state,dispatch]=useReducer(cartReducer,initialState);

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
        setaddressData(response);
      }
      
    }

    const addToCart=async (value)=>{

       dispatch({type:'ADD_TO_CART',payload:value})  
        try {
          const response = await fetch('/api/user/cart', {
            method: 'POST',
            headers: {
              'authorization': localStorage.getItem('token'),
            },
            body: JSON.stringify(value),
          });
        
          if (!response) {
            throw new Error('Request failed with status ' + response.status);
          }
        
          const responseData = await response.json();
          if(responseData) {
            setAlertForCart(true);
            setTimeout(() => setAlertForCart(false), 2000);
          }
        } catch (error) {
          // Handle errors
          console.error(error);
        }
        
    }
    const removeItem=async (value)=>{
      // console.log(value);
      
      const response= await fetch(`/api/user/cart/${value._id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token"),
        },
      }).then(response=>{
        return response.json()
      })
      .catch(error=>console.log(error))
     dispatch({type:'REMOVE_ITEM',payload:value}) 
    }
    const increment=async(value)=>{
     
      const response=await fetch(`/api/user/cart/${value._id}`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token"),
        },
        body: JSON.stringify({
          action:{
            type:"increment"
          }
        })
      }).then(response=>response.json())
      .catch(error=>console.log(error))
       dispatch({type:'INCREMENT_ITEM_QTY',payload:value})
    }
    const decrement= async (value)=>{
      const response=await fetch(`/api/user/cart/${value._id}`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token"),
        },
        body: JSON.stringify({
          action:{
            type:"decrement"
          }
        })
      }).then(response=>response.json())
      .catch(error=>console.log(error))
       dispatch({type:'DECREMENT_ITEM_QTY',payload:value})
    }
    // useEffect(()=>{
    //   const totalPriceOfCart=()=>{
    //     dispatch({type:'TOTAL_PRICE'})
    //   }
    //   totalPriceOfCart()
    // },[state.cartData])

    const isPresentInCart=value=>{
      if(state.cartData.cart){
        const isPresent=state.cartData.cart.find(data=>data._id===value._id)
        return isPresent;
      }
      return false;
    }
    

    const value={state,fetchData,addToCart,removeItem,increment,decrement,isPresentInCart,showAlertForCart};

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
      );
}




