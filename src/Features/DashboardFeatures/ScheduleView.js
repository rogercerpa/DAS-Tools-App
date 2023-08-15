import React from 'react';
import Schedule from "../../Components/Schedule/Schedule";
import { useFetchData } from '../../api/fetchData';

const ScheduleView = () => {
  const { data } = useFetchData();

  // Transform data into events format expected by FullCalendar
  const events = data
    ? data.reduce((uniqueEvents, item) => {
        const existingEvent = uniqueEvents.find(event => event.title === item['Job Name']);
        if (!existingEvent) {
          uniqueEvents.push({
            title: item['Job Name'],
            date: item['Requested Date']
          });
        }
        return uniqueEvents;
      }, [])
    : [];

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">ScheduleView</h1>
      <Schedule events={events} />
    </div>
  );
};

export default ScheduleView;



