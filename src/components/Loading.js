import React from 'react'
import { Image } from 'semantic-ui-react'

const Loading = (props) => {
  return (
    <div key='loading'>
      <Image src='https://www.pedul.com/images/loading.gif' alt='loading' height='200px'/>
    </div>
  )
}

export default Loading
