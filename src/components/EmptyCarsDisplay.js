import React from 'react'
import { Image, Grid, Header } from 'semantic-ui-react'

const EmptyCarsDisplay = (props) => {

  return (
    <Grid style={{paddingTop: "14px"}}>
      <Grid.Column width={4}></Grid.Column>
      <Grid.Column width={8}>
        <Header textAlign="center" style={{padding: "10px"}}>Enter your search terms to find the car for you!</Header>
        <Image centered huge src="https://cdn3.iconfinder.com/data/icons/car-maintenance-icons/367/Car_Under_Magnifying_Glass-512.png" alt="car search" />
      </Grid.Column>
      <Grid.Column width={4}></Grid.Column>
    </Grid>
  )
}

export default EmptyCarsDisplay
