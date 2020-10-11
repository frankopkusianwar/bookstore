import React from 'react';
import profile from '../assets/profile.PNG';

const Header = () => (
  <div id="App">
    <div className="header">
      <h1>BOOK STORE CMS</h1>
      <ul>
        <li><small>Books</small></li>
        <li><small className="category">Categories</small></li>
      </ul>
      <div className="profile"><img src={profile} alt="profile" /></div>
    </div>
  </div>
);

export default Header;
