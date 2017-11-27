import React from 'react'
import { connect } from 'react-redux'
import Car from './Car'
import { Card } from 'semantic-ui-react'
import Loading from './Loading'

class CarsContainer extends React.Component {

  sortedCars = () => {
    let cars
    if (this.props.sortType === "Distance") {
      cars = this.props.cars.sort((car1, car2) => {
        return car1.distance - car2.distance
      })
    } else if (this.props.sortType === "Price: Low to High") {
      cars = this.props.cars.sort((car1, car2) => {
        return car1.price - car2.price
      })
    } else if (this.props.sortType === "Price: High to Low") {
      cars = this.props.cars.sort((car1, car2) => {
        return car2.price - car1.price
      })
    } else {
      cars = []
    }
    return cars
  }
  render() {
    let cars = this.sortedCars()
    const carCards = !cars.empty ? cars.map(car => {
      return <Car key={car.id} {...car} />
    }) : [<Loading />]
    const message = this.props.message ? <div>{this.props.message}</div> : null
    return (
      <div className="container">
        {message}
        <Card.Group itemsPerRow={1} style={{zIndex: 1}}>
          {carCards}
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {cars: state.carReducer.cars, loading: state.carReducer.loading, loaded: state.carReducer.loaded, message: state.carReducer.message, searchLocation: state.manageUser.location, reqStartDate: state.manageUser.reqStartDate, reqEndDate: state.manageUser.reqEndDate, sortType: state.manageUser.sortType}
}

export default connect(mapStateToProps)(CarsContainer)
