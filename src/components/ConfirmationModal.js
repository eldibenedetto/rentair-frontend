import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Loading from './Loading'

class ConfirmationModal extends Component {
  state = { modalOpen: false }

  handleOpen = () => {
    const reservationData = {
      id: this.props.id
    }
    debugger
    this.props.deletePendingReservation(reservationData)
    this.setState({ modalOpen: true })}

  handleClose = () => this.setState({
    modalOpen: false
  }, () => this.props.history.push('/profile'))

  render() {
    return (
      <Modal
        trigger={<Button negative onClick={this.handleOpen}>Decline</Button>}
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='small'
      >
        <Header icon='browser' content='Cookies policy' />
        <Modal.Content>
          <h3>{this.props.statusMessage}</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={this.handleClose} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    statusMessage: state.reservationReducer.statusMessage
  }
}

export default withRouter(connect(mapStateToProps)(ConfirmationModal))
