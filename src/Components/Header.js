
import React from 'react';
// const electron = window.require('electron');
// const ipcRenderer  = electron.ipcRenderer;

const Header = () => {


  // const openFile = () => {
  //   ipcRenderer.send('open-file-dialog');
  // }
  
  // React.useEffect(() => {
  //   ipcRenderer.on('fileData', (event, data) => {
  //     console.log(data);  // Here is your file data
  //   });
  
  //   // Clean up the event listener when the component unmounts
  //   return () => ipcRenderer.removeAllListeners('fileData');
  // }, []);
  

  return (
    <header className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">DAS Tools App</h1>
        <button  className="bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded">
        Import Data
        </button>
      </div>
    </header>
  );
};

export default Header;
