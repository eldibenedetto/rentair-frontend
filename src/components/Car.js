import React from 'react'
import { connect } from 'react-redux'
import { selectCar } from '../actions/cars'
import { Card, Image } from 'semantic-ui-react'
import ReservationModal from './ReservationModal'

const Car = (props) => {

  const handleOnClick = (event) => {
    props.selectCar({id: props.id, make: props.make, model: props.model, year: props.year, image: props.image, price: props.price, latitude: props.latitude, longitude: props.longitude, distance: props.distance})

  }

  // const distance = haversineFunction() + " miles away"
  return(
      <Card
        key={props.id}
        onClick={handleOnClick}
        centered
        style={{zIndex: 1}} >
        <Image src={props.image} alt="car" fluid />
        <Card.Content textAlign="center">
          <Card.Header>
            {props.owner.first_name}'s {props.year} {props.make} {props.model}
          </Card.Header>
          <Card.Meta>
            {props.distance} miles away
          </Card.Meta>
          <Card.Description>
            ${props.price}
          </Card.Description>
          <ReservationModal image={props.image} />
        </Card.Content>
      </Card>
  )
}

export default connect(null, { selectCar })(Car)
