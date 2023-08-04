import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../Components/FormInput/FormInput';
import './Login.css'
import Button from '../Components/Button';
import FormBackground from '../Components/FormBackground';
import FormModal from '../Components/FormModal';
import { AuthContext } from '../utilities/AuthContext';
import AlertBox from '../Components/AlertBox/AlertBox';
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
  const {logIn,isLoggedIn}=useContext(AuthContext);
  const handleSubmit =(event) => {
    event.preventDefault();
    console.log(event);
    logIn(loginFormData);
    navigate('/products')
  };

  return (
  <>
    <FormBackground>
  <div className="auth-section">
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
    </div>
    </FormBackground>
    </>  
  )
}

export default Login