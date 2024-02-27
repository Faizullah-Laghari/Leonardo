// components/LoginForm.js
'use client'
import React, { useState } from 'react';
import classes from './registeration.module.css';

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
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} required />
      </div>
      <div className={classes.input}>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} required />
      </div>
      <div className={classes.input}>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <p>Privacy: Your email address will not be shared or sold to third parties.</p>
      </div>
      <div className={classes.anitspam}>
        <label>Anti-spam verification:</label>
        <input type="text" name="antiSpam" value={formData.antiSpam} onChange={handleChange} required />
        <p>Please complete the anti-spam verification</p>
      </div>
      <button type="submit">Register</button>
    </form>
  );
}
