import React from 'react';
import 'bulma/css/bulma.css';

const Header = () => {
  return (
    <div className="navbar-menu mt-3">
        <div className="navbar-start">
            <h1 className="title ml-5">Legends Portal</h1>
        </div>

        <div className="navbar-end mr-5">
          <a className="navbar-item" href="/">Home</a>
          <a className="navbar-item" href="/products">Products</a>
          <a className="navbar-item" href="/about">Functions</a>
        </div>
    </div>
  );
};

export default Header;