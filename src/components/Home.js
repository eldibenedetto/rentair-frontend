import React from 'react'
import CarSearch from './CarSearch'

const Home = (props) => {
  const homeStyle = {
    backgroundImage: "url(http://wallup.net/wp-content/uploads/2017/03/28/436094-BMW_M4_Coupe-BMW-city-car-vehicle-German_cars.jpg)",
    backgroundSize: "cover",
    height: "90vh"
  }
  const homeSearchStyle = {
    paddingTop: "300px"
  }
  return(
    <div style={homeStyle}>
      <div className='homeSearch' style={homeSearchStyle}>
        <CarSearch />
      </div>
      <div style={{display: "inline-block", position: "fixed", bottom: "0px", left: "45%", borderRadius: "5px", border: "5px double black", backgroundColor: "rgba(5, 5, 5, 0.47)", padding: "20px"}}>
        <p style={{fontSize: "16px", color: "white"}}>An SQLit Production</p>
      </div>
    </div>
  )
}

export default Home
