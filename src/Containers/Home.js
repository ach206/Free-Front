import React, { Component } from 'react'
//import { Col, Row, Divider, Navbar, NavItem } from 'react-materialize'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withAuthentication } from '../Helpers'

class Home extends Component {

  render() {
    return(
      <div>
        Hello World
      </div>
    )
  }
}

const mapStateToProps = ({}) => ({})
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(withAuthentication(Home))
