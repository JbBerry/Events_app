import React, { Component } from 'react';
import EventsList from '../components/EventsList';
import EventsForm from '../components/EventsForm';
import './EventsBox.css'

class EventsBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    }
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
  };

  handleEventSubmit(newEvent) {
    const updateEvents = [...this.state.events, newEvent]
    this.setState({ events: updateEvents})
  }

  render() {
    return(
      <div className='events-box'>
      <div className='ui header'>Submit New Event</div>
      <EventsForm handleEventSubmit={this.handleEventSubmit}/>
        <div className='ui header'>Events</div>
        <EventsList events={this.state.events}/>
      </div>
    );
  };
};

export default EventsBox
