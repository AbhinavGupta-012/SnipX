import React, { useState } from 'react';
import styles from './styles.module.css';
import './LoginPopup.css';

const LoginPopup = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div id="loginPopUp">
      <div className="login-container">
        <div className="forms-container">
          <button className="close-btn" onClick={() => setShowLogin(false)}>&times;</button>
          <div className="signin-signup">
            {showLogin ? (
              <form className="sign-in-form">
                <h2 className="title">Sign in</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-lock"></i>
                  <input type="password" placeholder="Password" />
                </div>
                <button className="btn">Login</button>
              </form>
            ) : (
              <form className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                  <i className="fas fa-user"></i>
                  <input type="text" placeholder="Username" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope"></i>
                  <input type="email" placeholder="Email" />
                </div>
                <button className="btn">Sign Up</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
