import { useReducer,useEffect } from "react";
import { createContext,useState } from "react";
import WishListReducer from "./Reducer/WishlistReducer";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const WishlistContext=createContext();

const initialState={
  wishListData:[]
}



export const WishlistContextProvider=({children})=>{

  const {token}=useContext(AuthContext);
  const [showAlertForWishlist,setAlertForWishlist]=useState(false);
  const [showAlertForRemoveItem,setAlertForRemoveItem]=useState(false);
    const [wishListState,dispatch]=useReducer(WishListReducer,initialState);
    useEffect(()=>{
      if(token)
      fetchWishlistData();
    },[token])

    const addToWishlist=async (newData)=>{
      dispatch({type:'ADD_TO_WISHLIST',payload:newData})
      const response=await fetch(`/api/user/wishlist`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization': token,
        },
        body: JSON.stringify(newData),
      }).then(response=>response.json())
      .catch(error=>console.log(error))

      if(response){
        setAlertForWishlist(true);
        setTimeout(() => setAlertForWishlist(false), 2000);
      }
      
    }
    const fetchWishlistData= async ()=>{
      const response= await fetch('/api/user/wishlist',{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': token,
        }
      }).then(res=>res.json())
      .catch(error=>console.log(error))
      if(response){
        console.log(response);
        dispatch({type:'SET_WISHLIST_DATA', payload: response})
      }
      
    }

    const removeWishlistItem=async (value)=>{
      const response= await fetch(`/api/user/wishlist/${value._id}`,{
        method:'DELETE',
        headers:{
          'Content-Type': 'application/json',
          'authorization': token,
        },
      }).then(response=>{
        return response.json()
      })
      .catch(error=>console.log(error))
     dispatch({type:'REMOVE_ITEM',payload:value}) 
     if(response){
      setAlertForRemoveItem(true);
      setTimeout(() => setAlertForRemoveItem(false), 2000);
     }
    }

    const value={
      wishListState,
      addToWishlist,
      fetchWishlistData,
      removeWishlistItem,
      showAlertForWishlist,
      setAlertForWishlist,
      showAlertForRemoveItem
    };

    return (
        <WishlistContext.Provider value={value}>
          {children}
        </WishlistContext.Provider>
      );
}




