import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Interface from './components/Interface'
import { Route, withRouter } from 'react-router-dom'
import './index.css'
import SignUpForm from './components/SignUpForm'
import Profile from './components/Profile'
import { userIsAuthenticated, userIsNotAuthenticated } from './components/AuthWrapper'
import { getCurrentUser } from './actions/user'
import { connect } from 'react-redux'
import Home from './components/Home'

class App extends Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.props.getCurrentUser()
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route exact path='/' component={Home}/>
        <Route exact path='/browse' component={Interface} />
        <Route exact path='/signup' component={userIsNotAuthenticated(SignUpForm)} />
        <Route exact path='/profile'
        component={userIsAuthenticated(Profile)} />
      </div>
    );
  }
}

export default withRouter(connect(null, { getCurrentUser })(App))
