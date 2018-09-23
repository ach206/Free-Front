import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withAuthentication, AuthenticationService } from '../Helpers'
import logo from '../Assets/BL-Navy.png'

// import ModalLogIn from '../Components/ModalLogIn'
// import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button, Navbar, Badge, NavItem} from 'react-materialize'

let image = <div className="valign-wrapper"><img src={logo} alt="navy logo"/><div ><p className="free" >FREE RESPONDER</p></div></div>

const HeaderNav = ({authState, signupModal, loginModal}) => (
    <Navbar id="navMenu" brand={image} right>
      <NavItem ><Button id="logon" className="navMenu">LOGIN</Button></NavItem>
    </Navbar>
)

const handleLogout = (setAuthState) => {
    localStorage.removeItem('token')
    AuthenticationService.setAuthState(null)
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(HeaderNav))
