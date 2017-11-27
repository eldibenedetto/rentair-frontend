import React from 'react'
import { Menu, Modal } from 'semantic-ui-react'
import LoginForm from './LoginForm'

const LoginModal = (props) => {

  return(
    <Modal
      dimmer="blurring"
      trigger={<Menu.Item name='login' onClick={this.handleItemClick}>Log In</Menu.Item>}>
      <Modal.Header>Log In</Modal.Header>
      <Modal.Content>
        <LoginForm />
      </Modal.Content>
    </Modal>
  )
}

export default LoginModal
