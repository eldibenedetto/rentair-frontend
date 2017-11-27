import React from 'react'
import {Grid, Label, Item, Header, Image, Button, Icon} from 'semantic-ui-react'
import EditUserModal from './EditUserModal'
import DeleteUserConfirmationModal from './DeleteUserConfirmationModal'

class ProfileUserInfo extends React.Component {
  render() {
    return(
      <Grid celled='internally'>
        <Grid.Row>
          <Grid.Column width={2} textAlign="left" >
            <Header textAlign="center" as='h2' icon>
              <Icon name='user' />
              User Information
            </Header>
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>
          <Grid.Column width={11} verticalAlign="middle" >
            <div style={{display: "inline-block", paddingLeft: "500px"}}>
              <Item.Group>
                <Item>
                  <Item.Image size="medium" alt="profile pic" src={this.props.userInfo.image} />

                  <Item.Content verticalAlign='middle'>
                    <Item.Header style={{fontSize: "3em"}}>{this.props.userInfo.first_name} {this.props.userInfo.last_name}</Item.Header>
                    <Item.Meta style={{fontSize: "1.5em"}}>{this.props.userInfo.email}</Item.Meta>
                    <Item.Meta style={{fontSize: "1.5em"}}>{this.props.userInfo.phone_number}</Item.Meta>
                    <Item.Description style={{fontSize: "1em"}}>{this.props.userInfo.street_address} {this.props.userInfo.city}, {this.props.userInfo.state_territory} {this.props.userInfo.zip_code}</Item.Description>
                    <Item.Extra style={{fontSize: "1em"}}>Drivers License: {this.props.userInfo.state_territory_dl} {this.props.userInfo.drivers_license_id}</Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            </div>
          </Grid.Column>
          <Grid.Column width={2} verticalAlign="middle" >
            <EditUserModal />
            <DeleteUserConfirmationModal />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default ProfileUserInfo
