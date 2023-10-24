import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 
import { useNavigate } from 'react-router-dom';


function Schedule({ events }) {
  const navigate = useNavigate();

  const handleEventClick = (eventInfo) => {
    // Get the project ID or unique identifier from eventInfo.event
    const projectId = eventInfo.event.id;

    // Navigate to the project page with the project ID
    navigate(`/project/${projectId}`);
    console.log(projectId)
  };
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      weekends={false}
      events={events}
      eventClick={handleEventClick}
      eventClassNames="cursor-pointer"
    />
  )
}

export default Schedule;
