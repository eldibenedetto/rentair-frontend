import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EditCarForm from './EditCarForm'
import { getSelectedCarData } from '../actions/cars'
import { connect } from 'react-redux'

class EditCarModal extends React.Component {

  componentDidMount() {
    this.props.getSelectedCarData(this.props.carID)
  }

  render() {
    return(
      <Modal dimmer="blurring" trigger={<Button size='small'>Edit</Button>}>
        <Modal.Header>Edit Your Car's Information</Modal.Header>
        <Modal.Content>
          <EditCarForm carInfo={this.props.carInfo}/>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    carInfo: state.carReducer.selectedCar
  }
}

export default connect(mapStateToProps, { getSelectedCarData })(EditCarModal)
