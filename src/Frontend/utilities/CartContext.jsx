import { createContext,useContext, useEffect, useReducer, useState } from "react";
import cartReducer from "./Reducer/CartReducer";
import { AuthContext } from "./AuthContext";
export const CartContext=createContext();

const initialState={
  cartData:[],
  totalPrice:0,
  cartTotal:0
}

export const CartContextProvider=({children})=>{

  const {token}=useContext(AuthContext);
  const [showAlertForCart,setAlertForCart]=useState(false);
    const [state,dispatch]=useReducer(cartReducer,initialState);


    const fetchData= async ()=>{
      const response= await fetch('/api/user/cart',{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        }
      }).then(res=>res.json())
      .catch(error=>console.log(error))
      if(response){
        dispatch({type:'SET_DATA', payload: response})
      }
      
    }

    useEffect(()=>{
      if(token)
      fetchData();
    },[token])

    const addToCart=async (value)=>{

       dispatch({type:'ADD_TO_CART',payload:value})  
        try {
          const response = await fetch('/api/user/cart', {
            method: 'POST',
            headers: {
              'authorization':token,
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

          console.error(error);
        }
        
    }
    const removeItem=async (value)=>{
      
      const response= await fetch(`/api/user/cart/${value._id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'authorization':token,
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
          'authorization': token,
        },
        body: JSON.stringify({
          action:{
            type:"increment"
          }
        })
      }).then(response=>response.json())
      .catch(error=>console.log(error))
      setAlertForCart(true);
      setTimeout(() => setAlertForCart(false), 2000);
       dispatch({type:'INCREMENT_ITEM_QTY',payload:value})
    }
    const decrement= async (value)=>{
      const response=await fetch(`/api/user/cart/${value._id}`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization':token,
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
    

    const isPresentInCart=value=>{
      if(state.cartData.cart){
        const isPresent=state.cartData.cart.find(data=>data._id===value._id)
        return isPresent;
      }
      return false;
    }

    const value={
      state,
      dispatch,
      fetchData,
      addToCart,
      removeItem,
      increment,
      decrement,
      isPresentInCart,
      showAlertForCart
    };

    return (
        <CartContext.Provider value={value}>
          {children}
        </CartContext.Provider>
      );
}




