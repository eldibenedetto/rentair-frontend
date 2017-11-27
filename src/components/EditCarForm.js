import React from 'react'
import { connect } from 'react-redux'
import { editCar } from '../actions/cars'
import { Redirect } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import ImageUpload from './ImageUpload'

class EditCarForm extends React.Component {

  state = {
    redirect: false,
    link: this.props.carInfo.image,
    make: this.props.carInfo.make,
    model: this.props.carInfo.model,
    year: this.props.carInfo.year,
    price: this.props.carInfo.price,
    address: this.props.carInfo.address
  }

  handleImage = (link) => {
    this.setState({
      link: link
    })
  }

  handleMakeChange = (event) => {
    this.setState({
      make: event.target.value
    })
  }

  handleModelChange = (event) => {
    this.setState({
      model: event.target.value
    })
  }

  handleYearChange = (event) => {
    this.setState({
      year: event.target.value
    })
  }

  handlePriceChange = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  handleAddressChange = (event) => {
    this.setState({
      address: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const ownerID = parseInt(localStorage.getItem('user_id'), 10)
    const carData = {
      id: this.props.carInfo.id,
      car: {
        owner_id: ownerID,
        make: this.state.make,
        model: this.state.model,
        year: this.state.year,
        image: this.state.link,
        price: this.state.price,
        address: this.state.address
      }
    }
    this.props.editCar(carData)
    this.setState({
      redirect: true,
    })
  }

  render() {
    console.log(this.props)
    const redirect = this.state.redirect ? <Redirect to="/profile" /> : null

    return(
      <div>
        <Form onSubmit={this.handleSubmit}>
          <ImageUpload setPicture={this.handleImage}/>
          <br></br>
          <Form.Input
            onChange={this.handleMakeChange}
            type="text"
            placeholder="Make"
            value={this.state.make}/>
            <br></br>
          <Form.Input
            onChange={this.handleModelChange}
            type="text"
            placeholder="Model"
            value={this.state.model} />
            <br></br>
          <Form.Input
            onChange={this.handleYearChange}
            type="text"
            placeholder="Year"
            value={this.state.year} />
            <br></br>
          <Form.Input
            onChange={this.handlePriceChange}
            type="number"
            placeholder="Daily Rate"
            value={this.state.price} />
            <br></br>
          <Form.Input
            onChange={this.handleAddressChange}
            type="text"
            placeholder="Pick-Up Location"
            value={this.state.address} />
            <br></br>
            <Button positive fluid type="submit">Edit Your Car</Button>

        </Form>
        {redirect}
      </div>
    )
  }
}

export default connect(null, { editCar })(EditCarForm)
