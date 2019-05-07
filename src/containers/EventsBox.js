import React, { Component } from 'react';
import EventsList from '../components/EventsList';

class EventsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
  };



  render() {
    return(
      <div className='events-box'>
        <h2>Events</h2>
        <EventsList events={this.state.events}/>
      </div>
    );
  };
};

export default EventsBox
