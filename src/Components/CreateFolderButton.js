import React from 'react';


const CreateFolder = () => {

  const handleClick = async () => {
    const folderPath = 'C://Users//rxc04//OneDrive - Acuity Brands, Inc//Desktop//DAS.TOOL.TestFolder';
    const templateFolderPath = 'K://Projects//!!!Templates For Project Creator//RFA#_TYPE_MMDDYYYY';
    window.electron.ipcRenderer.send('create-folder-and-files', { folderPath, templateFolderPath });
  }

  // Listener for the IPC response
  React.useEffect(() => {
    window.electron.ipcRenderer.on('folder-files-response', (event, arg) => {
      if (arg.success) {
        console.log('Folder and files created successfully');
      } else {
        console.error('An error occurred:', arg.error);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('folder-files-response');
    }
  }, []);

  return (
    <div>
      <button className='bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Create Folder</button>
    </div>
  )
}

export default CreateFolder;
