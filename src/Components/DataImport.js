import React from 'react';

console.log(`"testing the component = "${window.electron}`)

const DataImport = () => {

  const handleClick = async () => {
    console.log("button working"); 
    console.log(window.electron.test());
    // const data = await window.electron.invokeCsvRead('D:\\My Drive\\QueueData\\WQSummary_Subscribed_GallowayJeff.csv');
    // console.log(data);
  }

  return (
    <div>
      <button onClick={handleClick}>Load CSV Data</button>
    </div>
  )
}

export default DataImport;
