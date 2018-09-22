import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { request, AuthenticationService } from '../Helpers'

import Home from './Home'

//CSS
import '../CSS/App.css';

class App extends Component {
  render(){
    return (
      <div>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/' component={ Home } />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)
export default connect(null, mapDispatchToProps)(App)
