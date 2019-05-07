import React from 'react'

const Event = (props) => {
  return(
    <div className='event'>
      <h4>props.name</h4>
      <p>props.date</p>
      <p>props.description</p>
    </div>
  )
}

export default Event;
