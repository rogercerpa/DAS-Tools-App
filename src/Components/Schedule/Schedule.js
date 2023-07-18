
import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' 

function Schedule() {
  return (
    <FullCalendar
    plugins={[ dayGridPlugin ]}
    initialView="dayGridMonth"
    weekends={false}
    events={[
      { title: 'event 1', date: '2019-04-01' },
      { title: 'event 2', date: '2019-04-02' }
    ]}
  />
  )
}

export default Schedule;