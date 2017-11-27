import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import EditUserForm from './EditUserForm'
import { connect } from 'react-redux'

class EditUserModal extends React.Component {

  render() {
    return(
      <Modal dimmer="blurring" trigger={<Button primary>Edit</Button>}>
        <Modal.Header>Edit Your Profile</Modal.Header>
        <Modal.Content>
          <EditUserForm userInfo={this.props.user}/>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.manageUser.user
  }
}

export default connect(mapStateToProps)(EditUserModal)
