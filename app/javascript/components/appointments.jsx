import React from 'react';
import update from 'immutability-helper';
import AppointmentForm from 'components/appointment_form'
import AppointmentsList from 'components/appointments_list'

class Appointments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      appointments: this.props.appointments,
      title: 'Team standup meeting',
      appt_time: 'Tomorrow at 9am'
    }
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  
  handleUserInput(stateChanges){
    this.setState(stateChanges);
  }
  
  handleFormSubmit(){
    var appointment = {
      title: this.state.title,
      appt_time: this.state.appt_time
    }
    $.post('/appointments', 
      {
        appointment: appointment
      }
    ).done(function(data) {
      this.addNewAppointment(data);
    }.bind(this));
  }
  
  addNewAppointment(appointment){
    var appointments = update(this.state.appointments,{ $push: [appointment] })
    this.setstate({appointments: appointments})
  }
  
  render() {
    return (
      <div>
        <AppointmentForm 
        title={this.state.title}
        appt_time={this.state.appt_time}
        onUserInput={this.handleUserInput} 
        onFormSubmit={this.handleFormSubmit} />
        
        <AppointmentsList 
        appointments={this.state.appointments} />
      </div>
    )
  }
};

export default Appointments