import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext();



export const AuthContextProvider=({children})=>{
    const [isSignedUp,setIsSignedUp]=useState(false);
    const [isLoggedIn,setIsLoggedIn]=useState(false);


    const signUp=async (credentials)=>{
        const response=await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
              'Content-formType': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
            .then(response =>response.json())
            
            .catch(error => {
              // Handle any error that occurred during the request
              console.error('Error submitting form:', error);
            });
            if(response){
              console.log(response);
                localStorage.setItem("token",response.encodedToken);
                setIsSignedUp(true);
            }else{
                alert("Response Not Found");
            }
    }

    const logIn=async (credentials)=>{
        const response=await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
          })
            .then(response =>response.json())
            
            .catch(error => {
              // Handle any error that occurred during the request
              console.error('Error submitting form:', error);
            });
            if(response){
              if(response.errors){
                alert(response.errors[0])
              }
              else {
                localStorage.setItem('userToken',response.encodedToken);
                localStorage.setItem('userDetails',JSON.stringify(response.foundUser));
                setIsLoggedIn(true);
              }
             
            }else{
                alert("Response Not Found");
            }
    }

    const signOut=()=>{
        setIsLoggedIn(false);
    }

    const value={signUp,isSignedUp,logIn,isLoggedIn,signOut};
   
    return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
      );
}




