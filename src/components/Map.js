import React from 'react'
import GoogleMapReact from 'google-map-react'
import { connect } from 'react-redux'
import MapMarker from './MapMarker'
import { Grid, Popup, Header, Icon, Image, Button } from 'semantic-ui-react'


// const MapCarInfo = (props) => {
//   return(
//     <Popup
//       trigger={<MapMarker />}
//       flowing
//       hoverable>
//       <Grid centered divided columns={3}>
//       <Grid.Column textAlign='center'>
//         <Header as='h4'>{props.car.year}</Header>
//         {props.car.make}
//         {props.car.model}
//         <Image size="small" alt="car" src={props.car.image} />
//         <Button>Choose</Button>
//       </Grid.Column>
//     </Grid>
//     </Popup>
//   )
// }

class Map extends React.Component {

  state = {
    car: {
      make: "",
      model: "",
      year: "",
      image: "",
      price: "",
      lat: "",
      lng: "",
      hover: false
    }
  }

  // static defaultProps = {
  //   center: this.props.searchLocation,
  //   zoom: 14
  // }

  onChildMouseEnter = (num, childProps) => {
    if (childProps.car === undefined) {
      return null
    } else {
      this.setState({
        hover: true,
        car: {
          make: childProps.car.make,
          model: childProps.car.model,
          year: childProps.car.year,
          image: childProps.car.image,
          price: childProps.car.price,
          lat: childProps.car.latitude,
          lng: childProps.car.longitude
        }
      })
    }
  }

  onChildMouseLeave = (num, childProps) => {
    if (childProps.car === undefined) {
      return null
    } else {
      this.setState({
        hover: false,
        car: {
          make: "",
          model: "",
          year: "",
          image: "",
          price: "",
          lat: "",
          lng: ""
        }
      })
    }
  }

  render() {
    // const infoBox = this.state.hover ? <MapCarInfo car={this.state.car} lat={this.state.car.lat} lng={this.state.car.lng} /> : null

    const carLocations = this.props.cars.map((car, index) => {
      return <MapMarker {...car} key={car.id} lat={car.latitude} lng={car.longitude} />
    })
    return (
      <div id="map"
        style={{height:"700px"}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: {GOOGLE_API_KEY},
          language: 'en'}}
          center={this.props.searchLocation}
          zoom={14}
          onChildMouseEnter={this.onChildMouseEnter}
          onChildMouseLeave={this.onChildMouseLeave} >
          {carLocations}
          {/* { infoBox } */}
        </GoogleMapReact>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {searchLocation: state.manageUser.searchLocation, cars: state.carReducer.cars}
}

export default connect(mapStateToProps)(Map)
