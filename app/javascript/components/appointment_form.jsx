import React from 'react';

class AppointmentForm extends React.Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e){
    var name = e.target.name;
    var stateChanges = {};
    stateChanges[name] = e.target.value;
    this.props.onUserInput(stateChanges);
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.props.onFormSubmit();
  }
  
  render() {
    return (
      <div>
        <h3>Make a new appointment</h3>
        <form onSubmit={this.handleSubmit}>
          <input name="title" placeholder="Appointment title" 
          value={this.props.title}
          onChange={this.handleChange} />
          
          <input name="appt_time" placeholder="Date and time"
          value={this.props.appt_time}
          onChange={this.handleChange}  />
          
          <input type="submit" value="Make Appointment" />
        </form>
      </div>
      )
  }
}

export default AppointmentForm