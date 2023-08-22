import React, { useState } from 'react';
import PopUp from "../PopUp"

const CreateFolder = () => {
  const titleText = "Folder Creation";
  const subTitleText = "Your folder have been successfully created"
  const [showPopup, setShowPopup] = useState(false);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleClick = async () => {
    const folderPath = 'C://Users//rxc04//OneDrive - Acuity Brands, Inc//Desktop//DAS.TOOL.TestFolder';
    const templateFolderPath = 'K://Projects//!!!Templates For Project Creator//RFA#_TYPE_MMDDYYYY';
    window.electron.ipcRenderer.send('create-folder-and-files', { folderPath, templateFolderPath });
  }
 
  // Listener for the IPC response
  React.useEffect(() => {
    const handleFolderFilesResponse = (event, arg) => {
      if (arg.success) {
        setShowPopup(true);
      } else {
        // Handle failure case here if needed
      }
    };

    window.electron.ipcRenderer.on('folder-files-response', handleFolderFilesResponse);


    // Clean up the listener when the component unmounts
    return () => {
      window.electron.ipcRenderer.removeAllListeners('folder-files-response', handleFolderFilesResponse);
    };
  }, []);

  return (
    <div>
      <button className='bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded' onClick={handleClick}>Create Folder</button>
      <PopUp showPopup={showPopup} onClose={handlePopupClose} titleText={titleText} subTitleText={subTitleText} />
    </div>
  )
}

export default CreateFolder;
