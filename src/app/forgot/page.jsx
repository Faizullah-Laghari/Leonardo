// components/LoginForm.js
'use client'
import React, { useState } from 'react';
import classes from './forgot.module.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    antiSpam: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className={classes.register_form}>
      <div className={classes.input}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <p>A message will be sent to your email address with instructions.</p>
      </div>
      <div className={classes.anitspam}>
        <label>Anti-spam verification:</label>
        <input type="text" name="antiSpam" value={formData.antiSpam} onChange={handleChange} required />
      </div>
      <button type="submit">Send Reset Password Email</button>
    </form>
  );
}
