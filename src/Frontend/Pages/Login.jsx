import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../Components/FormInput/FormInput';
import './Login.css'
import Button from '../Components/Button';
import FormBackground from '../Components/FormBackground';
import FormModal from '../Components/FormModal';
// import { Eye, EyeOff } from "react-icons/fa";
const Login = () => {
  const [loginFormData, setloginFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setloginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Make POST request to server
     const response=await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginFormData)
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
            navigate('/products');
          }
         
        }else{
            alert("Response Not Found");
        }
  };

  return (
    <FormBackground>
    <FormModal>
    <div className="form">
     <form onSubmit={handleSubmit}>
        <FormInput 
        formPlaceholder="Email"
        formType="email"
        formValue={loginFormData.email}
        formChange={handleChange}
        formName="email"
        />
        <FormInput
          formPlaceholder="Password"
          formType="password"
          formName="password"
          formValue={loginFormData.password}
          formChange={handleChange}
        />
        {/* <Icon
        className={passwordVisibility ? "hide" : "show"}
        type={passwordVisibility ? EyeOff : Eye}
        onClick={handleToggle}
      /> */}
      <Button onClickOperation={()=>{}} btnType="submit">Submit</Button>
     </form>
    </div>
    </FormModal>
    </FormBackground>
  )
}

export default Login