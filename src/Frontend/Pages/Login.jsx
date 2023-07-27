import React,{useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import FormInput from '../Components/FormInput/FormInput';
import './Login.css'
import Button from '../Components/Button';
import FormBackground from '../Components/FormBackground';
import FormModal from '../Components/FormModal';
import { AuthContext } from '../utilities/AuthContext';
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
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(loginFormData);
    if(isLoggedIn) navigate('/products')
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