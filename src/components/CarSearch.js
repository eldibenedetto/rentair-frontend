import React from 'react'
import { Redirect } from 'react-router-dom'
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete'
import { connect } from 'react-redux'
import { setSearchCriteria } from '../actions/user'
import { getCarSearchData } from '../actions/cars'
import { Grid, Form, Button } from 'semantic-ui-react'

class CarSearch extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: 'Place, Address, or Zip Code',
      redirect: false,
      req_start_date: '',
      req_end_date: '',
      validSearch: false
    }
    this.onChange = (address) => this.setState({ address })
  }

  handleReqStartDateChange = (event) => {
    this.setState({
      req_start_date: event.target.value
    })
  }

  handleReqEndDateChange = (event) => {
    if (new Date(event.target.value) > new Date(this.req_start_date)) {
      console.log("in true")
      this.setState({
        req_end_date: event.target.value,
        validSearch: true
      })
    } else {
      console.log("in false")
      this.setState({
        req_end_date: event.target.value,
        validSearch: false
      })
    }
  }

  dateValidator = () => {

  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    if (new Date(this.state.req_end_date) - new Date(this.state.req_start_date) > 0) {
      geocodeByAddress(this.state.address)
        .then(results => getLatLng(results[0]))
        .then(latLng => {
          const searchData = {
            location: latLng,
            req_start_date: this.state.req_start_date,
            req_end_date: this.state.req_end_date
          }
          this.props.setSearchCriteria(searchData)
          this.props.getCarSearchData(searchData)
          this.setState({
            redirect: true
          })
        })
        .catch(error => console.error('Error', error))
    } else {
      alert("Pick a valid date range.")
    }
  }

  handleClearClick = () => {
    //This is the clear input function
    this.setState({
      address: ""
    })
  }
  render() {
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
    }

    const redirect = this.state.redirect ? <Redirect to="/browse" /> : null

    const buttonStatus = new Date(this.state.req_end_date) > new Date(this.state.req_start_date) ? <Button primary circular size="massive" icon='search' /> : <Button disabled circular size="massive" icon='search' />
    return (
      <div style={{zIndex: 100}}>
        <Form onSubmit={this.handleFormSubmit}>
          <Grid columns='equal'>
            <Grid.Column width={1}></Grid.Column>
            <Grid.Column width={4}>
              <Form.Field onClick={this.handleClearClick}>
                <PlacesAutocomplete inputProps={inputProps} />
              </Form.Field>
            </Grid.Column>
            <Grid.Column width={4}>
              <input
                type="date"
                value={this.state.req_start_date}
                onChange={this.handleReqStartDateChange}/>
            </Grid.Column>
            <Grid.Column width={4}>
              <input
                type="date"
                value={this.state.req_end_date}
                onChange={this.handleReqEndDateChange}/>
            </Grid.Column>
            <Grid.Column width={2}>
              {buttonStatus}
            </Grid.Column>
            <Grid.Column width={1}></Grid.Column>
          {redirect}
          </Grid>
        </Form>
      </div>
      )
    }
  }

export default connect(null, { setSearchCriteria, getCarSearchData })(CarSearch)
