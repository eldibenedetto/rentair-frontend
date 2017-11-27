import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteUser, logoutUser } from '../actions/user'
import { withRouter } from 'react-router-dom'

class DeleteUserConfirmationModal extends React.Component {
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false}) //this.props.history.push('/profile')

  handleOnClick = (event) => {
    this.props.deleteUser({id: this.props.userID})
    this.props.logoutUser()
    this.setState({ modalOpen: false })
    this.props.history.push('/')
  }

  render() {
    return(
      <Modal
        trigger={<Button
        onClick={this.handleOpen}
        negative
        size='small'>Delete</Button>} open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'>
        <Header icon='trash outline' content='Delete User' />
        <Modal.Content>
          <p>Are you sure you want to delete your Account?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button onClick={this.handleOnClick} color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.manageUser.user.id
  }
}

export default withRouter(connect(mapStateToProps, { deleteUser, logoutUser })(DeleteUserConfirmationModal))
