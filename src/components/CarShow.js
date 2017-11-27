import React from 'react'
import { Image } from 'semantic-ui-react'
import { connect } from 'react-redux'

class CarShow extends React.Component {
  render() {
    return(
      <div>
        <Image src="" fluid />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  debugger
  return {
    selectedCar: state.carReducer.selectedCar
  }
}

export default connect(mapStateToProps)(CarShow)
