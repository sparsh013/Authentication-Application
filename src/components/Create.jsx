import React, { useState } from 'react';
import { auth } from '../firebaseCongif';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import '../styles.css';

export default function Create() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const createAccount = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
      });
  };

  return (
    <div className="container">
      <form onSubmit={createAccount}>
        <h1>Create a new account</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
