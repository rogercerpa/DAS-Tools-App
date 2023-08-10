// import ProjectCreationCard from "../../Components/Cards/ProjectCreationCard";
import React, { useState } from 'react';
import { useFetchData } from '../../api/fetchData';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ProjectCreationCard from "../../Components/Cards/ProjectCreationCard"
import TriageProcess from '../../Components/Processes/TriageProcess';

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Triages",
    value: "triages",
  },
  {
    label: "QC",
    value: "controls QC",
  },
];

export default function ProjectCreation() {



  const [showTriageProcess, setShowTriageProcess] = useState(false); // Step 2: Create state variable
  const { data, isLoading } = useFetchData();
  const [triageData, setTriageData] = useState(null);

  if (isLoading) {
    return ( 
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    )
  }

  const wantedKeys = ['Job Name','Assigned To', 'Due Date','Task Type', 'Status'];
  const TABLE_HEAD = wantedKeys.filter(key => key in data[0]);

  const handleTriageButtonClick = (rowData) => {
    setTriageData(rowData);
    setShowTriageProcess(true);
  };

  return (
    <div >
      {showTriageProcess ? (
        <TriageProcess data={triageData} />
      ) : (
        <ProjectCreationCard
          TABS={TABS}
          TABLE_HEAD={TABLE_HEAD}
          TABLE_ROWS={data}
          onTriageButtonClick={handleTriageButtonClick} 
        />
      )}
    </div>
  );
}
