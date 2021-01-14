import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Nav() {
const navStyle = {
  color: 'white'
}

  return (
    <div>
        <nav>
          <Link style={navStyle} to="/">
            <h3 id='logo'>Logo</h3>
          </Link>
            <ul className ="nav-links">
              <Link style={navStyle} to="/about">
                <li>About</li>
              </Link>
              <Link style={navStyle} to="/blog">
                <li>Blog</li>
              </Link>
            </ul>
          </nav>
    </div>
  );
}

export default Nav;
