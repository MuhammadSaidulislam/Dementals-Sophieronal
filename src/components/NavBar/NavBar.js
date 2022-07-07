import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

//import CSS
import './NavBar.css'

function NavBar() {
    return (
        // <Navbar collapseOnSelect expand="xxl" className='bg_main'  >
        //     <Container className='gg'>
        //         <Navbar.Brand href="#home">
        //             <img src="./logo/logo.png" id='logo' alt="logo" />
        //         </Navbar.Brand>
        //         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        //         <Navbar.Collapse id="responsive-navbar-nav">

        //             <Nav className=''>
        //                 <Nav.Link href="#DISCOVER">DISCOVER</Nav.Link>
        //                 <Nav.Link href="#EXPLORE">EXPLORE</Nav.Link>
        //                 <Nav.Link href="#pricing">PLAY</Nav.Link>
        //                 <Nav.Link href="#pricing">MINT</Nav.Link>
        //                 <Nav.Link href="#ROADMAP">ROADMAP</Nav.Link>
        //                 <Nav.Link href="#pricing"> <img alt="discord" src="./icons/icons8-discord.svg" /> </Nav.Link>
        //                 <Nav.Link href="#pricing"><img alt="discord" src="./icons/icons8-twitter.svg" /></Nav.Link>
        //                 <Nav.Link href="#pricing"><img alt="discord" src="./icons/Group 1231.svg" /></Nav.Link>
        //             </Nav>
        //             <Nav>
        //                 <Nav.Link href="#deets">
        //                     <button className='btn-connect'>CONNECT WALLET </button>
        //                 </Nav.Link>

        //             </Nav>

        //         </Navbar.Collapse>

        //     </Container>
        // </Navbar>
        <>
          <div class="nav">
        <input type="checkbox" id="nav-check" />
        <div class="nav-header">
          <div class="nav-title">
          <img src="./logo/logo.png" id='logo' alt="logo" />
          </div>
        </div>
        <div class="nav-btn">
          <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        
        <div class="nav-links">
            <ul>
          <li><a href="#DISCOVER">DISCOVER</a></li>
          <li><a href="#EXPLORE">EXPLORE</a></li>
          <li><a href="#pricing" target="_blank">PLAY</a></li>
          <li><a href="#">MINT</a></li>
          <li><a href="#ROADMAP">ROADMAP</a></li>
          <a class="icon">
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