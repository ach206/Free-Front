import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withAuthentication, AuthenticationService } from '../Helpers'

// import ModalLogIn from '../Components/ModalLogIn'
// import ModalCreateUser from '../Components/ModalCreateUser'

import {Col, Row, Modal, Button} from 'react-materialize'

const Navbar = ({authState, signupModal, loginModal}) => (
  <nav>
    Navbar
  </nav>
)

const handleLogout = (setAuthState) => {
    localStorage.removeItem('token')
    AuthenticationService.setAuthState(null)
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null,mapDispatchToProps)(withAuthentication(Navbar))
