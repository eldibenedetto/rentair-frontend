import React from 'react'
import { Icon, Popup, Header, Image, Button } from 'semantic-ui-react'
import ReservationModal from './ReservationModal'
import { connect } from 'react-redux'
import { toggleModal } from '../actions/user'

class MapMarker extends React.Component {

  state = {
    isOpen: false
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.props.modalOpen ? null : this.setState({isOpen: false})
  }


  render() {
    console.log(this.props.modalOpen)
    return (

      <Popup
        trigger={<Icon name="car" size="large"/>}
        flowing
        hoverable
        on="hover"
        open={this.state.isOpen}
        onOpen={this.handleOpen}
        onMouseLeave={this.handleClose}
        >
          <Popup.Header as='h4'>{this.props.year} {this.props.make} {this.props.model}</Popup.Header>
          <Image size="small" alt="car" src={this.props.image} />
          <ReservationModal car={this.props} handlePopupClose={this.handleClose}/> ${this.props.price}
      </Popup>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    modalOpen: state.manageUser.modalOpen
  }
}

export default connect(mapStateToProps, {toggleModal})(MapMarker)
