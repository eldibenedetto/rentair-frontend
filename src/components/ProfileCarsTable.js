import React from 'react'
import { Grid, Button, Radio, Table, Icon, Header } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import NewCarModal from './NewCarModal'
import EditCarModal from './EditCarModal'
import DeleteConfirmationModal from './DeleteConfirmationModal'
// import { connect } from 'react-redux'


class ProfileCarsTable extends React.Component {

  state = {
    isClicked: false,
    clickedID: ""
  }

  handleSelectClick = (event, id) => {
    this.setState({
      isClicked: !this.state.isClicked,
      clickedID: id
    })
  }

  render() {
    const userID = parseInt(localStorage.getItem("user_id"), 10)
    const ownedCars = this.props.carData.filter(car => car.owner_id === userID)
    const tableRows = ownedCars.map(car => {
      return (<Table.Row key={car.id}>
        <Table.Cell collapsing>
        <Radio slider onClick={(event) => this.handleSelectClick(event, car.id)}/>
        </Table.Cell>
        <Table.Cell>{car.year} {car.make} {car.model}</Table.Cell>
        <Table.Cell>${car.price}</Table.Cell>
        <Table.Cell>{car.address}</Table.Cell>
      </Table.Row>)
    })
    const buttons = this.state.isClicked ? <div><EditCarModal carID={this.state.clickedID}/>
    <DeleteConfirmationModal carID={this.state.clickedID}/></div> : <div><Button disabled size='small'>Edit</Button>
    <Button disabled size='small'>Delete</Button></div>
    return(
      <Grid width="equal" celled="internally">
        <Grid.Row>
          <Grid.Column width={2}>
            <Header textAlign="center"
              as='h2' icon>
              <Icon name='car' />Car</Header>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={11}>
            <Table compact celled definition>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Car</Table.HeaderCell>
                  <Table.HeaderCell>Price </Table.HeaderCell>
                  <Table.HeaderCell>Location</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {tableRows}
              </Table.Body>

              <Table.Footer fullWidth>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell colSpan='4'>
                    <NewCarModal />
                    {buttons}
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Grid.Column>
          <Grid.Row width={2}></Grid.Row>
        </Grid.Row>
      </Grid>
    )
  }
}

export default withRouter(ProfileCarsTable)
