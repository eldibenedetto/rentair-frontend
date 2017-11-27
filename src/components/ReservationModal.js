import React from 'react'
import { Button, Image, Modal } from 'semantic-ui-react'
import ReservationForm from './ReservationForm'
import { connect } from 'react-redux'
import {selectCar} from '../actions/cars'
import {toggleModal} from '../actions/user'

class ReservationModal extends React.Component {

  // state = {
  //   isOpen: false
  // }

  handleOpen = () => this.props.toggleModal()

  handleClose = () => {
    if (this.props.mapView) {
      this.props.toggleModal()
      this.props.handlePopupClose()
    } else {
      this.props.toggleModal()
    }
  }

  render() {
    const carID = this.props.mapView ? this.props.car.id : null
    const buttonStatus = this.props.loggedIn ? <Button onClick={this.handleOpen} positive>Reserve</Button> : <Button disabled>Reserve</Button>
    return(
      <Modal
        dimmer="blurring"
        trigger={buttonStatus}
        closeIcon
        open={this.props.modalOpen}
        onClose={this.handleClose}>
        <Modal.Header>Reservation Form</Modal.Header>
        <Modal.Content>
          <Image fluid src={this.props.image} />
          <ReservationForm carID={carID} handlePopupClose={this.props.handlePopupClose}/>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.manageUser.loggedIn,
    reqStartDate: state.manageUser.reqStartDate,
    reqEndDate: state.manageUser.reqEndDate,
    mapView: state.manageUser.mapView
  }
}

export default connect(mapStateToProps, { selectCar, toggleModal })(ReservationModal)
