import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react'
import CarListingForm from './CarListingForm'


class NewCarModal extends React.Component {

  render() {
    return(
      <Modal dimmer="blurring" trigger={<Button onClick={this.handleAddCarClick} floated='right' icon labelPosition='left' primary size='small'>
        <Icon name='car' />Add Car</Button>}>
        <Modal.Header>Rent Your Car</Modal.Header>
        <Modal.Content>
          <CarListingForm />
        </Modal.Content>
      </Modal>
    )
  }
}

export default NewCarModal
