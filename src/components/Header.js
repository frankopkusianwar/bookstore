import React from 'react';
import profile from '../assets/profile.PNG'

const Header = () => (
  <div id="App">
    <div className="header">
      <h1>BOOK STORE CMS</h1>
      <ul>
        <li><a href="#">Books</a></li>
        <li><a href="#">Categories</a></li>
      </ul>
      <div><img src={profile} alt="profile picture"/></div>
    </div>
  </div>
);

export default Header;
