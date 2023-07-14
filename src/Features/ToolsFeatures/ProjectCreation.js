// import ProjectCreationCard from "../../Components/Cards/ProjectCreationCard";
import React from 'react';
import { useFetchData } from '../../api/fetchData';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProjectCreationCard from "../../Components/Cards/ProjectCreationCard"

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

export default function ProjectCreation() {
  const { data, isLoading } = useFetchData();

  if (isLoading) {
    return ( 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  const wantedKeys = ['Job Name','Assigned To', 'Due Date','Task Type', 'Status'];
  const TABLE_HEAD = wantedKeys.filter(key => key in data[0]);

  return (
    <ProjectCreationCard
      TABS={TABS}
      TABLE_HEAD={TABLE_HEAD}
      TABLE_ROWS={data}
    />
  );
}
