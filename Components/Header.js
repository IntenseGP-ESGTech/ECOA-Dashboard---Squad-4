import React from 'react';
import { FaBars, FaPlay, FaUser, FaSearch, FaEnvelope } from 'react-icons/fa';
import Logo from '../Img/Logo2.png';
import '../App.css';

function Header() {
  return (
    <header className="Header">
      <div className="Header-left">
        <FaBars className="icon" />
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <div className="Header-right">
        <FaPlay className="icon" />
        <FaUser className="icon" />
        <FaSearch className="icon" />
        <FaEnvelope className="icon" />
      </div>
    </header>
  );
}

export default Header;
