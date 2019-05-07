import React, { Component } from 'react'
import './event.css'

class EventsForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      description: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDateChange = this.handleDateChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value })
  }

  handleDateChange(event) {
    this.setState({ date: event.target.value })
  }

  handleDescriptionChange(event) {
    this.setState({ description: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    const name = this.state.name;
    const date = this.state.date;
    const description = this.state.description;
    const newEvent = { name: name, date: date, description: description };
    this.props.handleEventSubmit(newEvent);
    this.setState({name: '', date: '', description: ''})
  }


  render() {
    return(
      <form className='events-form ui form' onSubmit={this.handleSubmit}>
        <div className='three fields'>
          <input
          type='text'
          placeholder='Event Name'
          value={this.state.name}
          onChange={this.handleNameChange}
          id='padding'
          />
          <input
          type='date'
          placeholder='Event Date'
          value={this.state.date}
          onChange={this.handleDateChange}
          id='padding'
          />
          <input
          type='text'
          placeholder='Event Description'
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          id='padding'
          />
        </div>
        <input type='submit' value='Submit Event' className='fluid ui positive button'/>
      </form>
    )
  }

}

export default EventsForm;
