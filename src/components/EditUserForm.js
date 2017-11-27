import React from 'react'
import { signUpUser } from '../actions/user'
import { connect } from 'react-redux'
import { Header, Form, Segment, Button, Grid } from 'semantic-ui-react'
import ImageUpload from './ImageUpload'
import { withRouter } from 'react-router-dom'
import { editUser } from '../actions/user'

class EditUserForm extends React.Component {

  state = {
    redirect: false,
    first_name: this.props.userInfo.first_name,
    last_name: this.props.userInfo.last_name,
    image: this.props.userInfo.image,
    email: this.props.userInfo.email,
    password: this.props.userInfo.password,
    phone_number: this.props.userInfo.phone_number,
    street_address: this.props.userInfo.street_address,
    city: this.props.userInfo.city,
    state_territory: this.props.userInfo.state_territory,
    zip_code: this.props.userInfo.zip_code,
    state_territory_dl: this.props.userInfo.state_territory_dl,
    drivers_license_id: this.props.userInfo.drivers_license_id
  }

    handleFirstName = (event) => {
      this.setState({
        first_name: event.target.value
      }, () => console.log(this.state.first_name))
    }

    handleLastName = (event) => {
      this.setState({
        last_name: event.target.value
      })
    }

    handlePassword = (event) => {
      this.setState({
        password: event.target.value
      })
    }

    handleEmail = (event) => {
      this.setState({
        email: event.target.value
      })
    }
    handlePhoneNumber = (event) => {
      this.setState({
        phone_number: event.target.value
      })
    }

    handleImage = (link) => {
      this.setState({
        image: link
      })
    }

    handleStreetAddress = (event) => {
      this.setState({
        street_address: event.target.value
      })
    }

    handleCity = (event) => {
      this.setState({
        city: event.target.value
      })
    }

    handleStateTerritory = (event) => {
      this.setState({
        state_territory: event.target.value
      })
    }

    handleZipCode = (event) => {
      this.setState({
        zip_code: event.target.value
      })
    }

    handleDLState = (event) => {
      this.setState({
        state_territory_dl: event.target.value
      })
    }

    handleDLID = (event) => {
      this.setState({
        drivers_license_id: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      const userData = {
        id: this.props.userInfo.id,
        user: {
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          email: this.state.email,
          image: this.state.image,
          password: this.state.password,
          phone_number: this.state.phone_number,
          street_address: this.state.street_ddress,
          city: this.state.city,
          state_territory: this.state.state_territory,
          zip_code: this.state.zip_code,
          state_territory_dl: this.state.state_territory_dl,
          drivers_license_id: this.state.drivers_license_id
        }
      }
      this.props.editUser(userData)
      this.props.history.push('/profile')
    }

    render() {
      const stateAbbrevs = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA','GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT','VT','VI','VA','WA','WV','WI','WY']
      const stateOptions = stateAbbrevs.map((state, index) => {
        return <option key={index} value={state}>{state}</option>
      })
      console.log(this.props)
      return(
        <Grid centered columns={2}>
          <Grid.Row>
            <Header textAlign="center" as='h1'>Edit Your Profile</Header>
          </Grid.Row>
          <Grid.Row>
            <Segment raised padded='very' textAlign="center" style={{width: "90%"}}>
              <Form onSubmit={this.handleSubmit}>
                  <ImageUpload setPicture={this.handleImage}/>
                <Header>Account Info</Header>
                <br></br>
                <Form.Group widths='equal'>
                  <Form.Input
                    type="text"
                    placeholder="First Name"
                    onChange={this.handleFirstName}
                    value={this.state.first_name}/>
                  <Form.Input
                    type="text"
                    placeholder="Last Name"
                    onChange={this.handleLastName}
                    value={this.state.last_name} />
                  <Form.Input
                    type="text"
                    placeholder="Phone Number"
                    onChange={this.handlePhoneNumber}
                    value={this.state.phone_number} />
                </Form.Group>
                <Form.Group widths='equal'>
                  <Form.Input
                    type="text"
                    placeholder="Email"
                    onChange={this.handleEmail}
                    value={this.state.email} />
                  <Form.Input
                    type="password"
                    placeholder="Password"
                    onChange={this.handlePassword}
                    value={this.state.password} />
                </Form.Group>
                  <Header> Address Must Match Driver's License</Header>
                  <br></br>
                <Form.Input
                  type="text"
                  placeholder="Street Address"
                  onChange={this.handleStreetAddress}
                  value={this.state.street_address} />
                  <br></br>
                <Form.Group widths='equal'>
                  <Form.Input
                    type="text"
                    placeholder="City"
                    onChange={this.handleCity}
                    value={this.state.city} />
                    <br></br>
                  <select
                    onChange={this.handleStateTerritory}
                    value={this.state.state_territory}>
                      {stateOptions}
                  </select>
                    <br></br>
                  <Form.Input
                    type="text"
                    placeholder="Zip Code"
                    onChange={this.handleZipCode}
                    value={this.state.zip_code} />
                </Form.Group>
                  <Header>Driver's License</Header>
                <Form.Group widths='equal'>
                  <select
                    onChange={this.handlehandleDLState}
                    value={this.state_territory_dl}>
                      {stateOptions}
                  </select>
                  <br></br>
                  <Form.Input
                    type="text"
                    placeholder="ID Number"
                    onChange={this.handleDLID}
                    value={this.state.drivers_license_id} />
                  <br></br>
                </Form.Group>
                <Button type="submit">Submit</Button>
              </Form>
            </Segment>
          </Grid.Row>
        </Grid>
      )
    }
  }

  const mapStateToProps = (state) => {
    return { id: state.manageUser.id }
  }

  export default withRouter(connect(mapStateToProps, { editUser })(EditUserForm))
