import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

//import CSS
import './NavBar.css'

function NavBar() {
    return (
        <>
          <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">
          <img src="./logo/logo.png" id='logo' alt="logo" />
          </div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div className="nav-links">
            <ul>
          <li><a href="#DISCOVER">DISCOVER</a></li>
          <li><a href="#EXPLORE">EXPLORE</a></li>
          <li><a href="#pricing" target="_blank">PLAY</a></li>
          <li><a href="#">MINT</a></li>
          <li><a href="#ROADMAP">ROADMAP</a></li>
          <a className="icon">
          <img alt="discord" src="./icons/icons8-discord.svg" />
          <img alt="discord" src="./icons/icons8-twitter.svg" />
          <img alt="discord" src="./icons/Group 1231.svg" />
          </a>
          <li className='walletBtn'><a href="#ROADMAP">Connect wallet</a></li>
            </ul>
        </div>
      </div>
        </>
    )
}

export default NavBar