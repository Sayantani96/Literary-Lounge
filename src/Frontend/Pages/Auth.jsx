import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormBackground from '../Components/FormBackground';
import FormInput from '../Components/FormInput/FormInput';
import Button from '../Components/Button';
import FormModal from '../Components/FormModal';
const Auth = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const handleChange = (e) => {
    console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Make POST request to server
     const response=await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-formType': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response =>response.json())
        
        .catch(error => {
          // Handle any error that occurred during the request
          console.error('Error submitting form:', error);
        });
        if(response){
          console.log(response);
            localStorage.setItem("token",response.encodedToken);
        }else{
            alert("Response Not Found");
        }
  };

  return (
    <FormBackground>
      <FormModal>
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
    </FormBackground>
  );
};

export default Auth;
