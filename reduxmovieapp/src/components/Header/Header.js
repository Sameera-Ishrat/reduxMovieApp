import React from 'react';
import userImage from "../../images/user.png";
import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
      <div className='logo'>MovieApp</div>
      </Link>
      
      <div className='user-image'>
        <img src={userImage} alt="userPicture" /> 
      </div>
    </div>
  )
}

export default Header