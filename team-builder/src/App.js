import { getDefaultNormalizer } from '@testing-library/react';
import React, { useState } from 'react'
import { render } from 'react-dom'
import './App.css';
import Form from './Form';
const userList =[
  {
    name:'Bob',
    email: 'bobthebuilder@gmail.com',
    role: 'Designer'
  },
  {
    name:'Mike',
    email: 'mike@gmail.com',
    role: 'Front-end Developer'
  }
]
function App() {
  const[formValues, setFormValues] = useState({name:'', email:'', role:''});
  const [users, setUsers] = useState(userList);
  const [error, setError] = useState('');
  const updateForm = (inputName, inputValue) =>{
    setFormValues({...formValues, [inputName]: inputValue});
  }

const submitForm = () =>{
  const newUser ={
    name: formValues.name,
    email: formValues.email.trim(),
    role:formValues.role
  }

  if (!newUser.name || !newUser.email || !newUser.role){
    setError('You have to fill out the form first');
    return ;
  }

  setUsers(users.concat(newUser));
  setError('');
  setFormValues({name:'', email:'',role:''})
}


  return (
    <div className="App">
      <h1>USERS!</h1>
      <h2>Create a user below</h2>
      <Form
        values ={formValues}
        update ={updateForm}
        submit = {submitForm}
      />
      <h3 className = 'error'>{error}</h3>
      {users.map((user,idx)=>(
        <div key = {idx}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <p>{user.role}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
