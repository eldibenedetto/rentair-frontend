import React from 'react'
import { Grid, Table, Header, Icon} from 'semantic-ui-react'
import { connect } from 'react-redux'
import CarInfoModal from './CarInfoModal'

class ProfileReservationsInfo extends React.Component {

  render() {
    const userID = parseInt(localStorage.getItem('user_id'), 10)
    const pendingReservations = this.props.pendingReservations.filter(reservation => reservation.guest_id === userID)
    const pendingReservationRows = pendingReservations.map((reservation, index) => {
      return (<Table.Row key={index} negative>
        <Table.Cell collapsing>
        <CarInfoModal {...reservation} status="pending"/>
        </Table.Cell>
        <Table.Cell>{reservation.car.year} {reservation.car.make} {reservation.car.model}</Table.Cell>
        <Table.Cell>{reservation.start_date} - {reservation.end_date}</Table.Cell>
        <Table.Cell>{reservation.owner.first_name} {reservation.owner.last_name}</Table.Cell>
      </Table.Row>)
    })
    const requestedReservations = this.props.pendingReservations.filter(reservation => reservation.owner.id === userID)
    const requestedReservationRows = requestedReservations.map((reservation, index) => {
      return (<Table.Row key={index}>
        <Table.Cell collapsing >
        <CarInfoModal {...reservation} status="requested"/>
        </Table.Cell>
        <Table.Cell>{reservation.car.year} {reservation.car.make} {reservation.car.model}</Table.Cell>
        <Table.Cell>{reservation.start_date} - {reservation.end_date}</Table.Cell>
        <Table.Cell>{reservation.owner.first_name} {reservation.owner.last_name}</Table.Cell>
      </Table.Row>)
    })
    const approvedReservations = this.props.approvedReservations.filter(reservation => reservation.guest_id === userID)
    const approvedReservationRows = approvedReservations.map((reservation, index) => {
      return (<Table.Row key={index} positive>
        <Table.Cell collapsing>
        <CarInfoModal {...reservation} status="upcoming"/>
        </Table.Cell>
        <Table.Cell>{reservation.car.year} {reservation.car.make} {reservation.car.model}</Table.Cell>
        <Table.Cell>{reservation.start_date} - {reservation.end_date}</Table.Cell>
        <Table.Cell>{reservation.owner.first_name} {reservation.owner.last_name}</Table.Cell>
      </Table.Row>)
    })
    const ownerReservations = this.props.approvedReservations.filter(reservation => reservation.owner.id === userID)
    const ownerReservationRows = ownerReservations.map((reservation, index) => {
      return (<Table.Row key={index} positive>
        <Table.Cell collapsing>
          <CarInfoModal {...reservation} status="upcoming"/>
        </Table.Cell>
        <Table.Cell>{reservation.car.year} {reservation.car.make} {reservation.car.model}</Table.Cell>
        <Table.Cell>{reservation.start_date} - {reservation.end_date}</Table.Cell>
        <Table.Cell>{reservation.owner.first_name} {reservation.owner.last_name}</Table.Cell>
      </Table.Row>)
    })
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={2}>
            <Header textAlign="center" as='h2' icon>
              <Icon name='calendar' />
              Reservations
            </Header>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={11}>
            <Table compact celled definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Car</Table.HeaderCell>
                  <Table.HeaderCell>Dates</Table.HeaderCell>
                  <Table.HeaderCell>Owner</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {pendingReservationRows}
                {requestedReservationRows}
                {approvedReservationRows}
                {ownerReservationRows}
              </Table.Body>
            </Table>
          </Grid.Column>
          <Grid.Column width={2}></Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
   pendingReservations: state.reservationReducer.pendingReservations, approvedReservations: state.reservationReducer.approvedReservations
  }
}

export default connect(mapStateToProps)(ProfileReservationsInfo)
