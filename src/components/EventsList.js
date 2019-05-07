import React from 'react'
import Event from './Event'

const EventsList = (props) => {
  const events = props.events.map((event, index) => {
    return(
      <Event name={event.name} date={event.date} description={event.description} key={index}/>
    )
  })

  return (
    <div className='events-list'>
      {events}
    </div>
  );
}

export default EventsList;
