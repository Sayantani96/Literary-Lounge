import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FormBackground from '../Components/FormBackground';
import FormInput from '../Components/FormInput/FormInput';
import Button from '../Components/Button';
import FormModal from '../Components/FormModal';
import { AuthContext } from '../utilities/AuthContext';
import './Login.css'

const Auth = () => {

  const {signUp}=useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const navigate=useNavigate();

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(formData);
    navigate('/products');
  };

  return (
    <FormBackground>
        <div className="auth-section">
      <FormModal>
      <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
        <FormInput
          formType="text"
          formPlaceholder="First Name"
          formName="firstName"
          formValue={formData.firstName}
          formChange={handleChange}
        />
        <FormInput
          formType="text"
          formPlaceholder="Last Name"
          formName="lastName"
          formValue={formData.lastName}
          formChange={handleChange}
        />
        <FormInput
          formType="email"
          formPlaceholder="Email"
          formName="email"
          formValue={formData.email}
          formChange={handleChange}
        />
      <FormInput
          formType="password"
          formPlaceholder="Password"
          formName="password"
          formValue={formData.password}
          formChange={handleChange}
        />
        
      <Button onClickOperation={()=>{}} btnType="submit">Submit</Button>
    </form>
    <p>Already Signed Up? <Link to="/login">Log in here</Link></p>
    </FormModal>
    </div>
    </FormBackground>
  );
};

export default Auth;
