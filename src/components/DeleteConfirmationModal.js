import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { deleteCar} from '../actions/cars'
import { Redirect } from 'react-router-dom'

class DeleteConfirmationModal extends React.Component {
  state = {
    modalOpen: false,
    redirect: false
  }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false}) //this.props.history.push('/profile')

  handleOnClick = (event) => {
    this.props.deleteCar({id: this.props.carID})
    this.setState({ modalOpen: false, redirect: true })
  }

  render() {

    const redirect = this.state.redirect ? <Redirect to="/profile" /> : null

    return(
      <Modal
        trigger={<Button
        onClick={this.handleOpen}
        negative
        size='small'>Delete</Button>} open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'>
        <Header icon='trash outline' content='Delete Car' />
        <Modal.Content>
          <p>Are you sure you want to delete this car?</p>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.handleClose} basic color='red' inverted>
            <Icon name='remove' /> No
          </Button>
          <Button onClick={this.handleOnClick} color='green' inverted>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
        {redirect}
      </Modal>
    )
  }
}

export default connect(null, { deleteCar })(DeleteConfirmationModal)
