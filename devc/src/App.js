import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="box-container">
      <div>
        <div className="box-controller">
          <div>Login</div>
          <div>Register</div>
        </div>
        <div >
          <form>
            <p>Login</p>
            < input type="text" placeholder="Username" className="login-input"></ input>
            < input type="text" placeholder="Username" className="login-input"></ input>
            <button className="login-btn  ">Login</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default App;
