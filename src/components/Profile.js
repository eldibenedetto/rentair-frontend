import React from 'react'
import { connect } from 'react-redux'
import { Grid, Divider } from 'semantic-ui-react'
import ProfileCarsTable from './ProfileCarsTable'
import { getCarData } from '../actions/cars'
import { getPendingReservations, getApprovedReservations } from '../actions/reservations'
import Loading from './Loading'
import ProfileReservationsInfo from './ProfileReservationsInfo'
import ProfileUserInfo from './ProfileUserInfo'

class Profile extends React.Component {

  componentDidMount() {
    this.props.getCarData()
    this.props.getPendingReservations()
    this.props.getApprovedReservations()
  }

  render() {
    // console.log(this.props.user.first_name)
    const profileTable = this.props.carLoaded ? <ProfileCarsTable carData={this.props.cars}/> : <Loading />
    const userInfo = this.props.userLoaded ? <ProfileUserInfo userInfo={this.props.user}/> : <Loading />
    const reservationInfo = this.props.pendingLoaded && this.props.approvedLoaded ? <ProfileReservationsInfo /> : <Loading />
    return(
        <Grid style={{paddingTop: "20px"}}>
          <Grid.Row>
            {userInfo}
          </Grid.Row>
           <Divider fitted />
          <Grid.Row stretched>
              {profileTable}
          </Grid.Row>
           <Divider fitted />
          <Grid.Row stretched>
              {reservationInfo}
          </Grid.Row>
        </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.manageUser.user, userLoaded: state.manageUser.loaded, cars: state.carReducer.cars, carLoaded: state.carReducer.loaded, pendingLoaded: state.reservationReducer.pendingLoaded, reservations: state.reservationReducer.reservations, approvedReservations: state.reservationReducer.approvedReservations, approvedLoaded: state.reservationReducer.approvedLoaded
  }
}

export default connect(mapStateToProps, { getCarData, getPendingReservations, getApprovedReservations })(Profile)
