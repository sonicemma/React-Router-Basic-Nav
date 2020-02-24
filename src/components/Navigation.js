import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link exact className="home" to="/">Home</Link>
        </div>
        <div>
          <Link className="about" to="/about">About</Link>
        </div>
        <div>
          <Link className="contact" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
