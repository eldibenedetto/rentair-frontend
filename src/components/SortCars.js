import React from 'react'
// import { connect } from 'react-redux'
import { Select } from 'semantic-ui-react'
import { setSortType } from '../actions/user'
import { connect } from 'react-redux'

class SortCars extends React.Component {

  handleOnChange = (event) => {
    switch (event.target.innerText) {
      case "Distance":
        return this.props.setSortType(event.target.innerText)
      case "Price: Low to High":
        return this.props.setSortType(event.target.innerText)
      case "Price: High to Low":
        return this.props.setSortType(event.target.innerText)
      default:
      return this.props.setSortType(event.target.innerText)
    }
  }



  render() {

    const sortOptions = [
      {
        key: "distance",
        text: "Distance",
        value: "distance"
      },
      {
        key: "priceLowToHigh",
        text: "Price: Low to High",
        value: "priceLowToHigh"
      },
      {
        key: "priceHighToLow",
        text: "Price: High to Low",
        value: "priceHighToLow"
      }
    ]
    return(
      <div>
        <Select defaultValue="distance" options={sortOptions} onChange={this.handleOnChange} simple item />
      </div>
    )
  }
}

export default connect(null, { setSortType })(SortCars)
