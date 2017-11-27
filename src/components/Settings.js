import React from 'react'
import { Button, Icon, Grid} from 'semantic-ui-react'
import SortCars from './SortCars'
import { connect } from 'react-redux'
import { changeToMapView, changeToListView } from '../actions/user'

class Settings extends React.Component {

  handleMapOnClick = (event) => {
    event.preventDefault()

    this.props.changeToMapView()
  }

  handleListOnClick = (event) => {
    event.preventDefault()

    this.props.changeToListView()
  }

  render() {

    const settingsStyle = {
      borderRight: "2px solid black",
      borderTop: "1px solid grey",
      borderBottom: "1px solid grey",
      borderRadius: "5px",
      position: "fixed",
      zIndex: 0
    }

    return(
      <Grid verticalAlign='middle' columns={1} centered style={settingsStyle}>
        <Grid.Row>
        <Button.Group fluid style={{paddingRight: "5px", paddingLeft: "5px"}}>
          <Button icon onClick={this.handleListOnClick}>
           <Icon name="list layout" />
          </Button>
          <Button icon onClick={this.handleMapOnClick}>
            <Icon name='map' />
          </Button>
        </Button.Group>
       </Grid.Row>
       <Grid.Row>
        <SortCars />
        </Grid.Row>
      </Grid>
    )
  }
}

export default connect(null, { changeToMapView, changeToListView })(Settings)
