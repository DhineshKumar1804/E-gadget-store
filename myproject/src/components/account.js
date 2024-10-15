import React, { useState } from 'react';
import './account.css';

function Account() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    alert(`Logged in with email: ${loginEmail}`);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Add registration logic here
    alert(`Registered with email: ${registerEmail}`);
  };

  return (
    <div className="account-container">
      <h1>{isLogin ? 'Login to Your Account' : 'Create a New Account'}</h1>
      {isLogin ? (
        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label htmlFor="loginEmail">Email Address</label>
            <input
              type="email"
              id="loginEmail"
              name="loginEmail"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              id="loginPassword"
              name="loginPassword"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <p onClick={() => setIsLogin(false)} className="toggle-form">
            Don't have an account? Register here.
          </p>
        </form>
      ) : (
        <form onSubmit={handleRegister} className="register-form">
          <div className="form-group">
            <label htmlFor="registerName">Full Name</label>
            <input
              type="text"
              id="registerName"
              name="registerName"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerEmail">Email Address</label>
            <input
              type="email"
              id="registerEmail"
              name="registerEmail"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="registerPassword">Password</label>
            <input
              type="password"
              id="registerPassword"
              name="registerPassword"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          <p onClick={() => setIsLogin(true)} className="toggle-form">
            Already have an account? Login here.
          </p>
        </form>
      )}
    </div>
  );
}

export default Account;
