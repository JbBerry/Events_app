import React from 'react'
import './event.css';

const Event = (props) => {
  return(
    <div id='event-cards' className='event ui raised card content'>
      <div id='padding' className='header'>Event: {props.name}</div>
      <div id='padding' className='meta'>Date: {props.date}</div>
      <div id='padding' className='description'>Description:<br/>{props.description}</div>
    </div>
  )
}

export default Event;
