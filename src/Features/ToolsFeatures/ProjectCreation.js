// import ProjectCreationCard from "../../Components/Cards/ProjectCreationCard";
import React from 'react';
import { useFetchData } from '../../api/fetchData';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];
 
const TABLE_HEAD = ["Project Name", "Due Date", "Requested Data", "Status", "Task Type", "Action"];
 
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
 
export default function ProjectCreation() {

  const { data, isLoading } = useFetchData();

  if (isLoading) {
    return  ( 
    <Box sx={{ display: 'flex' }}>
    <CircularProgress />
  </Box>)
  }

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {console.log(item)}
        </div>
      ))}
    </div>
  );



  // return (
  //   <ProjectCreationCard
  //   TABS={TABS}
  //   TABLE_HEAD={TABLE_HEAD}
  //   TABLE_ROWS={TABLE_ROWS}
  //   />
  // );
}