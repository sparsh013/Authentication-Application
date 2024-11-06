import React, { useEffect, useState } from 'react';
import { auth } from '../firebaseCongif';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import '../styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const logIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const loggedInUser = userCredential.user;
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="container">
      <form onSubmit={logIn}>
        <h1>Log In</h1>
        <input type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Log In</button>
      </form>
      {user ? (
        <div className="user-info">
          <p>Welcome, {user.email}</p>
          <button onClick={logOut}>Log Out</button>
        </div>
      ) : (
        <p className="user-info">You are not logged in</p>
      )}
    </div>
  );
}
