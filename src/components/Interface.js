import React from 'react'
import CarsContainer from './CarsContainer'
import Settings from './Settings'
import Map from './Map'
import { Grid, Rail, Sticky } from 'semantic-ui-react'
import { connect } from 'react-redux'
import CarSearch from './CarSearch'
import EmptyCarsDisplay from './EmptyCarsDisplay'

class Interface extends React.Component {

  render() {

  const searchStyle = {
    backgroundColor: "#1b1c1d",
    position: "relative",
    zIndex: 100
    }

  const carView = this.props.mapView ? <Map /> : <CarsContainer />
  const fullView = this.props.cars.length === 0 ? <EmptyCarsDisplay /> :
  (<div style={{position: "relative", zIndex: 0}}>
    <Grid style={{paddingTop: "25px"}}>
      <Grid.Row>
        <Grid.Column width={3}>
          <Settings />
        </Grid.Column>
        <Grid.Column width={1}></Grid.Column>
        <Grid.Column width={11}>
          {carView}
        </Grid.Column><Grid.Column width={1}>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </div>)
    return (
      <div>
        <div style={searchStyle}>
          <CarSearch />
        </div>
          {fullView}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    mapView: state.manageUser.mapView,
    cars: state.carReducer.cars
  }
}

export default connect(mapStateToProps)(Interface)
