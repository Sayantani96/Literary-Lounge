import React,{useContext, useState} from 'react'
import { Link} from 'react-router-dom';
import FormInput from '../Components/FormInput/FormInput';
import './Login.css'
import Button from '../Components/Button';
import FormBackground from '../Components/FormBackground';
import FormModal from '../Components/FormModal';
import { AuthContext } from '../utilities/AuthContext';

const Login = () => {
  const [loginFormData, setloginFormData] = useState({
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    setloginFormData({ ...loginFormData, [e.target.name]: e.target.value });
  };
  const {logIn}=useContext(AuthContext);
  const handleSubmit =(event) => {
    event.preventDefault();
    logIn(loginFormData);
  };

  return (
  <>
    <FormBackground>
  <div className="auth-section">
    <FormModal>
      <h1 style={{color:"#003366"}}>Login</h1>
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
      
      <Button onClickOperation={()=>{}} btnType="submit">Submit</Button>
     </form>
    </div>
    <p className="reg-nav">
    Not Registered?<Link to="/auth"> Sign Up Now</Link>
    </p>
    </FormModal>
    </div>
    </FormBackground>
    </>  
  )
}

export default Login