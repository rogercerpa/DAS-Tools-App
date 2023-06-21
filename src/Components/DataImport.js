import React from 'react';

const DataImport = () => {

  const handleClick = async () => {
    const data = await window.electron.invokeCsvRead('C:\\Users\\rxc04\\OneDrive - Acuity Brands, Inc\Desktop\\WQSummary_Subscribed_GallowayJeff.csv');
    console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>Load CSV Data</button>
    </div>
  )
}

export default DataImport;
