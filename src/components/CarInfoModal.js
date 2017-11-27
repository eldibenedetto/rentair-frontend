import React from 'react'
import { Button, Image, Modal, Icon, Header, Grid } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { approveReservation } from '../actions/reservations'
import { deletePendingReservation } from '../actions/reservations'
import { withRouter } from 'react-router-dom'
// import ConfirmationModal from './ConfirmationModal'

class CarInfoModal extends React.Component {

  handleApproval = (event) => {
    const reservationData = {
      id: this.props.id,
      reservation: {
        guest_id: this.props.guest_id,
        car_id: this.props.car.id,
        start_date: this.props.start_date,
        end_date: this.props.end_date,
        pickup_time: this.props.pickup_time,
        dropoff_time: this.props.dropoff_time,
        description: this.props.description
      }
    }
    this.props.approveReservation(reservationData)
    this.props.history.push('/profile')
  }

  handleDecline = (event) => {
    const reservationData = {
      id: this.props.id
    }
    this.props.deletePendingReservation(reservationData)
    this.props.history.push('/profile')
  }

  render() {
    // const handleOnClick = (event) => {
    //   props.selectCar({id: props.id, make: props.make, model: props.model, year: props.year, image: props.image, price: props.price, latitude: props.latitude, longitude: props.longitude, distance})
    //
    // }
    const headerContent = (status) => {
      switch (status) {
        case "pending":
          return ("Pending Reservation Information")
        case "requested":
          return ("Requested Reservation Information")
        case "upcoming":
          return ("Upcoming Reservation Information")
      }
    }

    const approvalButton = this.props.status === "requested" ? <Grid.Row centered columns={1}>
      <Grid.Column>
        <Button positive onClick={this.handleApproval}>Approve</Button>
        <Button negative onClick={this.handleDecline}>Decline</Button>
      </Grid.Column>
    </Grid.Row> : null
    return(
      <Modal dimmer="blurring" trigger={<Button  onClick={this.handleOnClick} circular inverted color='violet' icon><Icon name='info circle' /></Button>}>
        <Modal.Header>{headerContent(this.props.status)}</Modal.Header>
        <Modal.Content>
        <Grid textAlign="center">
            <Grid.Row centered columns={1}>
              <Grid.Column>
                <Header>Car</Header>
                <p>{this.props.car.year} {this.props.car.make} {this.props.car.model}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={1}>
              <Grid.Column>
                <Image fluid src={this.props.car.image} />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column>
                <Header>Requested Start Date</Header>
                <p>{this.props.start_date}</p>
              </Grid.Column>
              <Grid.Column>
                <Header>Requested Pick Up Time</Header>
                <p>{this.props.pickup_time}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={2}>
              <Grid.Column>
                <Header>Requested Return Date</Header>
                <p>{this.props.end_date}</p>
              </Grid.Column>
              <Grid.Column>
                <Header>Requested Drop Off Time</Header>
                <p>{this.props.dropoff_time}</p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered columns={1}>
              <Grid.Column>
                <Header>Request Description</Header>
                <p>{this.props.description}</p>
              </Grid.Column>
            </Grid.Row>
            {approvalButton}
        </Grid>
        </Modal.Content>
      </Modal>
    )
  }
}

export default withRouter(connect(null, { approveReservation, deletePendingReservation })(CarInfoModal))
