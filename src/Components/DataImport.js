import React, { useState } from 'react';
import axios from 'axios'; // import axios
import PopUp from "./PopUp"


const DataImport = () => {

  const [showPopup, setShowPopup] = useState(false);

  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const fileUploadHandler = async () => {
    const formData = new FormData(); 
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log(response.data);
      setShowPopup(true);
    } catch (error) {
      console.error('Error uploading file: ', error);
    }
  };

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  }
  

  return (
<div className="flex flex-col items-center justify-center space-y-4">
      {/* <button
        onClick={handleClick}
        className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Load CSV Data
      </button> */}
      <div className="flex items-center space-x-4">
        <input type="file" onChange={fileSelectedHandler} className="border p-2" />
        <button
          onClick={fileUploadHandler}
          className="bg-sky-400 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded"
        >
          Upload CSV Data
        </button>
      </div>
      <PopUp showPopup={showPopup} onClose={handlePopupClose} />
    </div>
  )
}

export default DataImport;

