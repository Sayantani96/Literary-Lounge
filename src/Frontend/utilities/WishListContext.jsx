import { useReducer,useEffect } from "react";
import { createContext,useState } from "react";
import WishListReducer from "./Reducer/WishlistReducer";

export const WishlistContext=createContext();

const initialState={
  wishListData:[]
}



export const WishlistContextProvider=({children})=>{

  const [userToken,setUserToken]=useState(localStorage.getItem("token"));
  const [showAlertForWishlist,setAlertForWishlist]=useState(false);
    const [wishListState,dispatch]=useReducer(WishListReducer,initialState);
    useEffect(()=>{
      if(userToken)
      fetchWishlistData();
    },[userToken])

    const addToWishlist=async (newData)=>{
      dispatch({type:'ADD_TO_WISHLIST',payload:newData})
      const response=await fetch(`/api/user/wishlist`,{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem('token'),
        },
        body: JSON.stringify(newData),
      }).then(response=>response.json())
      .catch(error=>console.log(error))
      
    }
    const fetchWishlistData= async ()=>{
      const response= await fetch('/api/user/wishlist',{
        method:'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': localStorage.getItem("token"),
        }
      }).then(res=>res.json())
      .catch(error=>console.log(error))
      if(response){
        console.log(response);
        dispatch({type:'SET_WISHLIST_DATA', payload: response})
      }
      
    }

    const value={wishListState,addToWishlist,fetchWishlistData};

    return (
        <WishlistContext.Provider value={value}>
          {children}
        </WishlistContext.Provider>
      );
}




