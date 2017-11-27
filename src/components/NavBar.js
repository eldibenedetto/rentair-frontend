import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import LoginModal from './LoginModal'
import { logoutUser } from '../actions/user'
import Logo from '../Logomakr.png'

class NavBar extends React.Component {

  handleLogoutClick = (event) => {
    this.props.logoutUser()
  }

  handleProfileClick = (event) => {

  }

  render() {

    const navStatus = this.props.loggedIn ?
      <Menu.Menu position="right">
        <Menu.Item
          name='logout'
          onClick={this.handleLogoutClick} >
          Log Out
        </Menu.Item>

        <Menu.Item
          name='profile'
          onClick={this.handleProfileClick} >
          <Link to='/profile'>Profile</Link>
        </Menu.Item>
      </Menu.Menu> :
      <Menu.Menu position="right">
        <LoginModal />

        <Menu.Item
          name='signup'
          onClick={this.handleSignupClick} >
          <Link to='/signup'>Sign Up</Link>
        </Menu.Item>
      </Menu.Menu>

    return (
      <div className="container" style={{paddingTop: "25px", paddingBottom: "25px", backgroundColor: "#1b1c1d"}} >
          <Menu inverted size="massive">
            <Menu.Menu position="left">
              <Menu.Item
                name='home'>
                <Link to='/'>
                  <Icon size="large" name="home" />
                </Link>
              </Menu.Item>
              <Image src={Logo} style={{paddingLeft: "750px", display: "inline-block"}}/>
            </Menu.Menu>
            {navStatus}
          </Menu>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.manageUser.loggedIn
  }
}

export default connect (mapStateToProps, { logoutUser })(NavBar)
