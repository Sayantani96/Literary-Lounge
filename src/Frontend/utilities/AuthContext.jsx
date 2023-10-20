import { createContext, useContext, useState } from "react";
import { CartContext } from "./CartContext";
import {useNavigate} from 'react-router-dom'


export const AuthContext=createContext();



export const AuthContextProvider=({children})=>{

    const signupData=JSON.parse(localStorage.getItem("signedup-user"));
    const [token,setToken]=useState(signupData?.token);
    const [userData,setUserData]=useState(signupData?.userDetails);
    const navigate=useNavigate();

    //Handling signup data
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
              console.error('Error submitting form:', error);
            });
            
            if(response){
              if(response.errors){
                alert(response.errors[0]);
              }
          else{
            localStorage.setItem(
              "signedup-user",
              JSON.stringify(
                {
                  token:response.encodedToken,
                  userDetails: response.createdUser
                }
              )

             )
             setToken(response.encodedToken);
              setUserData(response.createdUser);
            navigate('/products')
          }
             
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
                alert(response.errors[0]);
              }
              else{
                localStorage.setItem(
                  "signedup-user",
                  JSON.stringify(
                    {
                      token:response.encodedToken,
                      userDetails: response.foundUser
                    }
                  )
    
                 );
                setToken(response.encodedToken);
                setUserData(response.foundUser);
                navigate('/products')
              }
             
             
            }else{
                alert("Response Not Found");
            }
    }

    const signOut=()=>{
      console.log("Entered in signout");
        localStorage.removeItem("signedup-user");
        setToken(null);
        setUserData(null);   
    }

    const value={signUp,logIn,signOut,token,userData};
   
    return (
        <AuthContext.Provider value={value}>
          {children}
        </AuthContext.Provider>
      );
}




