import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import '../css/header.css'
import logo from '../images/portfolio_logo_tp.png'

const Header = () => {


//ml-auto : shifts nav items to the right

  return (
    <div>
      <Navbar className='nav-background' expand="lg">
        <Navbar.Brand href="/"><img src={logo} width='70px' height='70px' alt=''/><Nav.Link className='logo-name gradient' href='/'>MAYUR</Nav.Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ml-auto"
            style={{ maxHeight: '250px' }}>
            <Nav.Link className='btn btn-outline-info space' href="/">HOME</Nav.Link>
            <Nav.Link className='btn btn-outline-info space' href="/about">ABOUT</Nav.Link>
            <Nav.Link className='btn btn-outline-info space' href="/contact">CONTACT</Nav.Link>
            <Nav.Link className='btn btn-outline-info space' href="/project">PROJECTS</Nav.Link>        
           </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header;