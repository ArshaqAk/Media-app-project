import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

const Header = () => {
  return (
    <div>
       <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='/'>
          <i className="fa-brands fa-youtube fa-2xl me-1"></i>
           <h3>MEDIA PLAYER</h3>
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>  
    </div>
  )
}

export default Header
