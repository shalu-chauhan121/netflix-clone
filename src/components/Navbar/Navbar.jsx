import React from 'react';
import logo from "../../assets/logo.png"
import "./Navbar.css"
import search_icon from "../../assets/search_icon.svg"
import bell_icon from "../../assets/bell_icon.svg"
import profile_img from "../../assets/profile_img.png"
import caret_img from "../../assets/caret_icon.svg"
const Navbar = () => {
  return (
    <div className='navbar'>
     <div className="navbar-left">
     <img src={logo}></img>
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
        <li>Browse by Languages</li>
      </ul>
 
     </div>
     <div className="navbar-right">
      <img src={search_icon} className='search-icon'></img>
      <p>Children</p>
      <img src={bell_icon} className='bell-icon'></img>
      <div className="navbar-profile">
        <img src={profile_img} className='profile'></img>
        <img src={caret_img} ></img>
        <div className='dropdown'>
        <p>Sign Out of Netflix</p>

      </div>
      </div>
    
     </div>
    </div>
  );
}

export default Navbar;
