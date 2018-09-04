import Appointments from 'components/appointments';
import AppointmentsList from 'components/appointments_list';
import AppointmentForm from 'components/appointment_form';
import Appointment from 'components/appointment';

import WebpackerReact from 'webpacker-react';

WebpackerReact.setup({Appointments, AppointmentForm, AppointmentsList, Appointment});