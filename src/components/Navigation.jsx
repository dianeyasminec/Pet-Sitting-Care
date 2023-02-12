import React ,{useState} from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link, Outlet, NavLink} from 'react-router-dom'

export default function Navigation() {

  const [open, setOpen] = useState(false)

  return (
    <div>
<Navbar bg="warning" variant="light">
        <Container>
          <Navbar.Brand href="#home">
          {/* <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as= {Link} to='/' href="#home">
            <i className="bi bi-house-fill"></i>
              Home
            </Nav.Link>
            <Nav.Link as= {Link} to='request' href="#requestservices">
            <i className="bi bi-journal-bookmark-fill"></i>
              Request Services
              </Nav.Link>

            <Nav.Link as= {Link} to='about'  >
              <div className={open ? 'about-item open' : 'about-item'}>
              <div className='about-title'>
              <span >
              <i className="bi bi-info-circle-fill"></i>
              About Us
              </span>
              <i className="bi bi-chevron-down toggle-btn px-2" onClick ={() => setOpen(!open)}></i>
              </div>
              <div className='sidebar-content'>
              <nav>
                <NavLink className='px-3' to='company'>Company </NavLink>
                <NavLink className='px-3' to='team'>Teams </NavLink>
                </nav>
                <Outlet/>
                
              </div>
              </div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}
