import React from 'react'
import { loginUser } from '../actions/user'
import { connect } from 'react-redux'
import { Form, Message } from 'semantic-ui-react'

class LoginForm extends React.Component {

  state = {
    email: "",
    password: "",
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.loginUser(this.state.email, this.state.password)
  }
  render() {
    return(
      <div>
        <Form onSubmit={this.handleSubmit} error={this.props.errorMessage}>
          <Message
            error
            content={this.props.errorMessage}></Message>
          <label>Email</label>
          <Form.Input
            onChange={this.handleEmailChange}
            type="text"
            value ={this.state.email}
            placeholder='Email'/>
          <label>Password</label>
          <Form.Input
            onChange={this.handlePasswordChange}
            type="password"
            value={this.state.password}
            placeholder='Password'/>
            <br></br>
          <Form.Button positive size="massive" fluid>Submit</Form.Button>
          </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    errorMessage: state.manageUser.errorMessage
  }
}

export default connect(mapStateToProps, { loginUser })(LoginForm)
