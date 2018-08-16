import React from 'react';
import Appointement from 'components/appointment'

class AppointmentsList extends React.Component {
  render() {
    return (
      <div>
        <h3>Appointments made</h3>
        {this.props.appointments.map(function(appointment) {
          return (
            <Appointment appointment={appointment} key={appointment.id} />
          )
        })}
      </div>
      )
  }
}

export default AppointmentsList
