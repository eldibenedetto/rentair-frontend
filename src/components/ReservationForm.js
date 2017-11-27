import React from 'react'
import { connect } from 'react-redux'
import { createPendingReservation } from '../actions/reservations'
import { Grid, Button, Form, Label } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { toggleModal } from '../actions/user'

class ReservationForm extends React.Component {

  state = {
    startDate: this.props.reqStartDate,
    pickupHr: "12",
    pickupMin: "00",
    pickupMeridian: "PM",
    endDate: this.props.reqEndDate,
    dropoffHr: "12",
    dropoffMin: "00",
    dropoffMeridian: "PM",
    description: ""
  }

  handleOnChange = (event, name) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const userID = parseInt(localStorage.getItem('user_id'), 10)
    const pickupTime = this.state.pickupHr + ":" + this.state.pickupMin + " " + this.state.pickupMeridian
    const dropoffTime = this.state.dropoffHr + ":" + this.state.dropoffMin + " " + this.state.dropoffMeridian
    const carID = this.props.mapView ? this.props.carID : this.props.selectedCar.id
    const reservationData = {
      pending_reservation: {
        guest_id: userID,
        car_id: carID,
        start_date: this.state.startDate,
        pickup_time: pickupTime,
        end_date: this.state.endDate,
        dropoff_time: dropoffTime,
        description: this.state.description
      }
    }
    this.props.createPendingReservation(reservationData)
    if (this.props.mapView && this.props.modalOpen) {
      this.props.handlePopupClose()
      this.props.toggleModal()
    } else if (this.props.modalOpen) {
      this.props.toggleModal()
    } else {
      null
    }
    this.props.history.push('/profile')
  }

  render() {
    const hours = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1].map((hour, index) => {
      return <option key={index} value={hour}>{hour}</option>
    })
    const minutes = ["00", "15", "30", "45"].map((minute, index) => {
      return <option key={index} value={minute}>{minute}</option>
    })
    const meridians = ["AM", "PM"].map((meridian, index) => {
      return <option key={index} value={meridian}>{meridian}</option>
    })
    return(
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
              <Label>Start Date</Label>
              <Form.Input
                value={this.state.startDate}
                onChange={this.handleOnChange}
                type="date"
                name="startDate"/>
              <Label>Pickup Time</Label>
              <select
                value={this.state.pickupHr}
               onChange={this.handleOnChange}
               name="pickupHr">{hours}</select>:<select
                 value={this.state.pickupMin}
                 onChange={this.handleOnChange} name="pickupMin">{minutes}</select><select
                   value={this.state.pickupMeridian}
                  onChange={this.handleOnChange} name="pickupMeridian">{meridians}</select>
          </Form.Group>
          <Form.Group>
              <Label>End Date</Label>
              <br></br>
              <Form.Input
                value={this.state.endDate}
                onChange={this.handleOnChange}
                type="date"
                name="endDate" />
                <br></br>
              <Label>Dropoff Time</Label>
              <br></br>
              <select
                value={this.state.dropoffHr}
                onChange={this.handleOnChange} name="dropoffHr">{hours}</select>:<select
                  value={this.state.dropoffMin}
                  onChange={this.handleOnChange} name="dropoffMin">{minutes}</select><select
                    value={this.state.dropoffMeridian}
                    onChange={this.handleOnChange} name="dropoffMeridian">{meridians}</select>
          </Form.Group>

              <Form.TextArea
                value={this.state.description}
                onChange={this.handleOnChange}
                type="textarea"
                placeholder="Description"
                name="description" />
                <br></br>
              <Button positive fluid icon="check"
              />
        </Form>
    )
  }
}

const mapStateToProps = (state) => {
  return { reservation: state.reservationReducer.reservations,
  selectedCar: state.carReducer.selectedCar,
reqStartDate: state.manageUser.reqStartDate,
reqEndDate: state.manageUser.reqEndDate,
mapView: state.manageUser.mapView, modalOpen: state.manageUser.modalOpen }
}

export default withRouter(connect(mapStateToProps, { createPendingReservation, toggleModal })(ReservationForm))
