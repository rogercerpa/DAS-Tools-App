import React from 'react';
const { ipcRenderer } = window.electron;


const CreateFolder = () => {

  const handleClick = async () => {
    const folderPath = 'C://Users//rxc04//OneDrive - Acuity Brands, Inc//Desktop//DAS.TOOL.TestFolder';
    const templateFolderPath = 'K://Projects//!!!Templates For Project Creator//RFA#_TYPE_MMDDYYYY';
    ipcRenderer.send('create-folder-and-files', { folderPath, templateFolderPath });
  }

  // Listener for the IPC response
  React.useEffect(() => {
    ipcRenderer.on('folder-files-response', (event, arg) => {
      if (arg.success) {
        console.log('Folder and files created successfully');
      } else {
        console.error('An error occurred:', arg.error);
      }
    });

    // Clean up the listener when the component unmounts
    return () => {
      ipcRenderer.removeAllListeners('folder-files-response');
    }
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Create Folder and Files</button>
    </div>
  )
}

export default CreateFolder;
